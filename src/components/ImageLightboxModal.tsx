"use client";

import React, { useEffect } from "react";
import { PerfumeItem } from "@/data/catalog";

interface ImageLightboxModalProps {
  item: PerfumeItem | null;
  onClose: () => void;
}

export function ImageLightboxModal({ item, onClose }: ImageLightboxModalProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item || !item.image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${item.name}`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in cursor-zoom-out select-none"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl bg-sky-card border border-sky-borderGold/70 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(200,164,106,0.15)] cursor-default transition-all duration-300 transform animate-modal-scale"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar vista detallada"
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-sky-bgAlt border border-sky-borderGold flex items-center justify-center text-sky-gold hover:text-sky-goldLight hover:bg-sky-gold/20 transition-all cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Badge */}
        {item.tag && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-sky-gold font-montserrat font-semibold text-[9px] tracking-[0.06em] text-sky-goldBright uppercase bg-[#1a1714]">
            {item.tag}
          </span>
        )}

        {/* Image Box */}
        <div className="relative w-full h-[260px] sm:h-[310px] rounded-xl overflow-hidden mt-3 flex items-center justify-center bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain p-3 select-none"
          />
        </div>

        {/* Perfume Header */}
        <div className="mt-4 text-center">
          <h3 className="font-playfair font-bold text-[18px] sm:text-[20px] text-sky-cream">
            {item.name}
          </h3>
          <p className="font-montserrat font-normal text-[12px] text-sky-textDim mt-0.5">
            {item.brandAndVolume}
          </p>
        </div>

        {/* Olfactory Notes Mini Grid */}
        <div className="mt-4 pt-3 border-t border-sky-borderSubtle grid grid-cols-1 sm:grid-cols-3 gap-2 text-center font-montserrat text-[10px]">
          <div className="p-2 rounded bg-sky-bgDarkBox border border-sky-borderSubtle/60">
            <span className="block font-semibold text-sky-goldBright text-[9px] uppercase tracking-wider">
              Top notes
            </span>
            <span className="text-sky-textDim mt-1 block line-clamp-2">
              {item.notes.salida}
            </span>
          </div>
          <div className="p-2 rounded bg-sky-bgDarkBox border border-sky-borderSubtle/60">
            <span className="block font-semibold text-sky-goldBright text-[9px] uppercase tracking-wider">
              Heart notes
            </span>
            <span className="text-sky-textDim mt-1 block line-clamp-2">
              {item.notes.corazon}
            </span>
          </div>
          <div className="p-2 rounded bg-sky-bgDarkBox border border-sky-borderSubtle/60">
            <span className="block font-semibold text-sky-goldBright text-[9px] uppercase tracking-wider">
              Base notes
            </span>
            <span className="text-sky-textDim mt-1 block line-clamp-2">
              {item.notes.fondo}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

