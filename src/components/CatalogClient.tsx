"use client";
import React, { useMemo, useState } from "react";
import {
  MAS_VENDIDOS,
  MUJER_CATALOG,
  DISENADOR_CATALOG,
  ARABES_CATALOG,
  FAQ_SIZES,
  SHIPPING_HIGHLIGHTS,
  SHIPPING_DAYS,
  SITE_CONFIG,
  buildWhatsAppUrl,
  PerfumeItem,
} from "@/data/catalog";
import { SectionHeading } from "./SectionHeading";
import { PerfumeCard } from "./PerfumeCard";
import { AnimatedSection } from "./AnimatedSection";
import { ImageLightboxModal } from "./ImageLightboxModal";
import {
  DiamondIcon,
  MosqueIcon,
  SearchIcon,
  BenefitDropIcon,
  BenefitBottleIcon,
  WhatsAppOutlineIcon,
  ShipTruckIcon,
  ShipTagIcon,
  ShipDropIcon,
  ShipClockIcon,
  SocialInstagramIcon,
  SocialFacebookIcon,
  SocialTikTokIcon,
  PayBankIcon,
  PaySpeiIcon,
  PayCashIcon,
} from "./Icons";
function filterPerfumes(list: PerfumeItem[], query: string): PerfumeItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.brand.toLowerCase().includes(q) ||
      item.notes.salida.toLowerCase().includes(q) ||
      item.notes.corazon.toLowerCase().includes(q) ||
      item.notes.fondo.toLowerCase().includes(q) ||
      (item.tag && item.tag.toLowerCase().includes(q))
  );
}
export function CatalogClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxItem, setLightboxItem] = useState<PerfumeItem | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const allPerfumes = useMemo(
    () => [...MAS_VENDIDOS, ...MUJER_CATALOG, ...DISENADOR_CATALOG, ...ARABES_CATALOG],
    []
  );

  const searchSuggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return allPerfumes
      .filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.brand.toLowerCase().includes(q) ||
          item.notes.salida.toLowerCase().includes(q) ||
          item.notes.corazon.toLowerCase().includes(q) ||
          item.notes.fondo.toLowerCase().includes(q)
      )
      .slice(0, 5);
  }, [searchQuery, allPerfumes]);

  const handleSelectSuggestion = (itemId: string) => {
    setIsSearchFocused(false);
    const element = document.getElementById(`perfume-${itemId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("ring-2", "ring-sky-gold", "scale-[1.02]");
      setTimeout(() => {
        element.classList.remove("ring-2", "ring-sky-gold", "scale-[1.02]");
      }, 2500);
    }
  };
  const filteredMasVendidos = useMemo(
    () => filterPerfumes(MAS_VENDIDOS, searchQuery),
    [searchQuery]
  );
  const filteredMujer = useMemo(
    () => filterPerfumes(MUJER_CATALOG, searchQuery),
    [searchQuery]
  );
  const filteredDisenador = useMemo(
    () => filterPerfumes(DISENADOR_CATALOG, searchQuery),
    [searchQuery]
  );
  const filteredArabes = useMemo(
    () => filterPerfumes(ARABES_CATALOG, searchQuery),
    [searchQuery]
  );
  const totalMatches =
    filteredMasVendidos.length +
    filteredMujer.length +
    filteredDisenador.length +
    filteredArabes.length;
  const isSearching = searchQuery.trim().length > 0;
  return (
    <div className="min-h-screen bg-sky-bg text-sky-cream font-montserrat selection:bg-sky-gold selection:text-sky-bg">
      {/* Skip to Main Content Link for Keyboard and Screen Readers */}
      <a
        href="#catalogo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sky-gold focus:text-sky-bg focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Saltar al contenido principal
      </a>
      {/* =====================================================================
          1. TOP NAVBAR (Height 70px + 2.5px gold border)
      ===================================================================== */}
      <header className="sticky top-0 z-50 w-full bg-sky-bg/95 backdrop-blur-md border-b-[2.5px] border-sky-gold">
        <div className="max-w-canvas mx-auto px-4 sm:px-8 lg:px-[82px] h-[70px] flex items-center justify-between gap-4">
          {/* Left: Compact Bottle + SKY SCENTS + Tagline */}
          <a
            href="#inicio"
            className="flex items-center gap-3 sm:gap-4 group focus:outline-none"
            aria-label="Sky Scents Inicio"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/navbar-logo.svg"
              alt="Sky Scents عطر السماء"
              width={175}
              height={51}
              className="h-[38px] sm:h-[49px] w-auto object-contain transition-opacity group-hover:opacity-90"
            />
            <span className="hidden md:inline-block font-montserrat font-normal text-[8.4px] sm:text-[9.5px] text-sky-textMuted tracking-[0.02em] mt-1">
              {SITE_CONFIG.tagline}
            </span>
          </a>
          {/* Right: Contacto Link + Search Pill */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="font-montserrat font-medium text-[10px] sm:text-[10.5px] text-sky-creamSoft hover:text-sky-gold transition-colors"
            >
              Contacto
            </a>
            <div className="relative flex items-center">
              <SearchIcon className="absolute left-[13px] w-[11.5px] h-[11.5px] text-[#c8a66b] pointer-events-none z-10" />
              <input
                type="search"
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                placeholder="Buscar…"
                aria-label="Buscar perfumes por nombre, marca o nota olfativa"
                className="w-[130px] sm:w-[150px] focus:w-[185px] sm:focus:w-[220px] h-[28px] pl-[30px] pr-[10px] rounded-full bg-sky-card/90 border border-[#c8a66b] font-montserrat font-normal text-[9.5px] text-sky-cream placeholder:text-sky-textMuted focus:outline-none focus:ring-1 focus:ring-sky-gold transition-all duration-300"
              />

              {/* Live Search Suggestions Dropdown */}
              {isSearchFocused && searchSuggestions.length > 0 && (
                <div className="absolute top-[34px] right-0 w-[240px] sm:w-[280px] rounded-xl bg-[#14110d] border border-sky-borderGold/80 shadow-[0_14px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(200,164,106,0.15)] overflow-hidden z-50 animate-fade-in">
                  <div className="px-3 py-1.5 border-b border-sky-borderSubtle/60 text-[8.5px] font-semibold text-sky-textDim uppercase tracking-wider bg-black/40">
                    Perfumes sugeridos
                  </div>
                  <div className="divide-y divide-sky-borderSubtle/30 max-h-[260px] overflow-y-auto">
                    {searchSuggestions.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onMouseDown={() => handleSelectSuggestion(item.id)}
                        className="w-full px-3 py-2 flex items-center gap-2.5 text-left transition-colors hover:bg-sky-gold/15 group cursor-pointer"
                      >
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-8 h-8 rounded object-cover bg-white shrink-0 p-0.5 border border-sky-borderGold/40"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded bg-sky-card border border-sky-borderSubtle flex items-center justify-center shrink-0 text-sky-gold text-[9px]">
                            🧴
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-playfair font-bold text-[11px] text-sky-cream truncate group-hover:text-sky-goldLight transition-colors">
                            {item.name}
                          </p>
                          <p className="font-montserrat text-[9px] text-sky-textDim truncate">
                            {item.brandAndVolume}
                          </p>
                        </div>
                        <span className="text-[10px] text-sky-gold font-playfair font-bold shrink-0">
                          {item.fullBottlePrice}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* =====================================================================
          2. HERO SECTION + CATEGORY NAVIGATION CARDS
      ===================================================================== */}
      <section id="inicio" className="relative w-full overflow-hidden">
        {/* Hero Background Block with Arabic Calligraphic Watermark */}
        <div
          className="relative w-full pt-[79px] pb-[105px] flex flex-col items-center justify-center px-4"
          style={{
            background:
              "linear-gradient(180deg, #1b1713 0%, #15120e 65%, #110e0b 100%)",
          }}
        >
          {/* Arabic Calligraphic Watermark SVG Pattern extracted 1:1 from PDF */}
          <div
            className="pointer-events-none select-none absolute inset-0 overflow-hidden flex items-start justify-center opacity-[0.08]"
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero-pattern.svg"
              alt=""
              width={1403}
              height={551}
              className="w-[1403px] max-w-none h-[551px] object-cover object-top"
            />
          </div>
          {/* Subtle radial vignette for depth */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, transparent 25%, rgba(9, 8, 7, 0.45) 100%)",
            }}
            aria-hidden="true"
          />
          {/* Golden Fragrance Halo Animation */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full animate-hero-glow"
            style={{
              background:
                "radial-gradient(circle, rgba(200, 164, 106, 0.18) 0%, rgba(137, 110, 67, 0.06) 45%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          {/* Main Bottle Calligraphic Emblem */}
          <div className="relative z-10 flex flex-col items-center text-center animate-fade-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero-logo.svg"
              alt="Sky Scents Perfumes de Autor - عطر السماء"
              width={329}
              height={262}
              fetchPriority="high"
              className="w-[245px] sm:w-[329.4px] h-auto select-none drop-shadow-[0_8px_24px_rgba(0,0,0,0.65)]"
            />
            <h1 className="mt-[21px] font-cormorant font-light text-[11.5px] sm:text-[12.6px] tracking-[0.18em] text-sky-textMuted">
              Decants y perfumes completos · Diseñador y árabes
            </h1>
          </div>
        </div>
        {/* Category Cards Overlapping the Bottom Edge of Hero Banner */}
        <div className="relative z-20 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 -mt-[41px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[25px]">
            {/* Card 1: Designer Perfumes */}
            <a
              href="#perfumes-disenador"
              className="group min-h-[76px] md:h-[83.4px] rounded-[12px] bg-sky-bgAlt border border-sky-borderGold px-[18px] sm:px-[20px] py-3 md:py-0 flex items-center gap-[15px] transition-all duration-300 hover:border-sky-gold hover:bg-[#191612] hover:shadow-[0_10px_28px_rgba(0,0,0,0.55)]"
            >
              <div className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full border border-sky-gold flex items-center justify-center shrink-0 text-sky-gold transition-transform duration-300 group-hover:scale-105">
                <DiamondIcon className="w-[19.5px] h-[16.5px]" />
              </div>
              <div>
                <h2 className="font-playfair font-bold text-[15.5px] sm:text-[16.7px] leading-[1.2] text-sky-cream group-hover:text-sky-goldLight transition-colors">
                  Designer Perfumes
                </h2>
                <p className="mt-[3px] sm:mt-[4px] font-montserrat font-normal text-[10.5px] sm:text-[10.8px] text-sky-textDim">
                  3 ml · 5 ml · 10 ml
                </p>
              </div>
            </a>
            {/* Card 2: Arabic Perfumes */}
            <a
              href="#perfumes-arabes"
              className="group min-h-[76px] md:h-[83.4px] rounded-[12px] bg-sky-bgAlt border border-sky-borderGold px-[18px] sm:px-[20px] py-3 md:py-0 flex items-center gap-[15px] transition-all duration-300 hover:border-sky-gold hover:bg-[#191612] hover:shadow-[0_10px_28px_rgba(0,0,0,0.55)]"
            >
              <div className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full border border-sky-gold flex items-center justify-center shrink-0 text-sky-gold transition-transform duration-300 group-hover:scale-105">
                <MosqueIcon className="w-[17.5px] h-[18.5px]" />
              </div>
              <div>
                <h2 className="font-playfair font-bold text-[15.5px] sm:text-[16.7px] leading-[1.2] text-sky-cream group-hover:text-sky-goldLight transition-colors">
                  Arabic Perfumes
                </h2>
                <p className="mt-[3px] sm:mt-[4px] font-montserrat font-normal text-[10.5px] sm:text-[10.8px] text-sky-textDim">
                  Decants & 100 ml full bottle
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Search Filter Status Banner (only visible when typing in search box) */}
      {isSearching && (
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 mt-8">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-[10px] bg-sky-card border border-sky-borderGold/60 text-[11px]">
            <p className="text-sky-cream">
              Mostrando <strong className="text-sky-gold">{totalMatches}</strong>{" "}
              {totalMatches === 1 ? "resultado" : "resultados"} para{" "}
              <span className="text-sky-goldLight font-semibold">
                &ldquo;{searchQuery}&rdquo;
              </span>
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-sky-gold hover:text-sky-cream underline underline-offset-2 text-[10.5px]"
            >
              Limpiar búsqueda
            </button>
          </div>
        </div>
      )}
      {/* Main Anchor for Screen Readers */}
      <div id="catalogo" tabIndex={-1} className="outline-none" />
      {/* =====================================================================
          3. SECCIÓN: MÁS VENDIDOS (4 columns)
      ===================================================================== */}
      {(!isSearching || filteredMasVendidos.length > 0) && (
        <AnimatedSection
          id="mas-vendidos"
          aria-labelledby="heading-mas-vendidos"
          className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 pt-[44px]"
        >
          <SectionHeading
            title="Más vendidos"
            subtitle="Selección destacada · se mostrará antes de las categorías"
          />
          <div className="mt-[22px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {filteredMasVendidos.map((item, idx) => (
              <PerfumeCard
                key={item.id}
                item={item}
                index={idx}
                onOpenLightbox={(prod) => setLightboxItem(prod)}
              />
            ))}
          </div>
        </AnimatedSection>
      )}
      {/* =====================================================================
          4. SECCIÓN: MUJER (3 columns)
      ===================================================================== */}
      {(!isSearching || filteredMujer.length > 0) && (
        <AnimatedSection
          id="mujer"
          aria-labelledby="heading-mujer"
          className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 pt-[54px]"
        >
          <SectionHeading
            title="Mujer"
            subtitle="Decants y perfume completo · preguntar por existencia"
          />
          <div className="mt-[22px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
            {filteredMujer.map((item, idx) => (
              <PerfumeCard
                key={item.id}
                item={item}
                index={idx}
                onOpenLightbox={(prod) => setLightboxItem(prod)}
              />
            ))}
          </div>
        </AnimatedSection>
      )}
      {/* =====================================================================
          5. SECCIÓN: PERFUMES DE DISEÑADOR (4 columns, 12 items)
      ===================================================================== */}
      {(!isSearching || filteredDisenador.length > 0) && (
        <AnimatedSection
          id="perfumes-disenador"
          aria-labelledby="heading-disenador"
          className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 pt-[54px] scroll-mt-24"
        >
          <SectionHeading
            title="Perfumes de diseñador"
            subtitle="Perfume completo y decants · precios en MXN"
          />
          <div className="mt-[22px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {filteredDisenador.map((item, idx) => (
              <PerfumeCard
                key={item.id}
                item={item}
                index={idx}
                onOpenLightbox={(prod) => setLightboxItem(prod)}
              />
            ))}
          </div>
        </AnimatedSection>
      )}
      {/* =====================================================================
          6. SECCIÓN: PERFUMES ÁRABES (4 columns, 16 items)
      ===================================================================== */}
      {(!isSearching || filteredArabes.length > 0) && (
        <AnimatedSection
          id="perfumes-arabes"
          aria-labelledby="heading-arabes"
          className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 pt-[54px] pb-[60px] scroll-mt-24"
        >
          <SectionHeading
            title="Perfumes árabes"
            subtitle="Decants y perfume completo 100 ml · precios en MXN"
          />
          <div className="mt-[22px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {filteredArabes.map((item, idx) => (
              <PerfumeCard
                key={item.id}
                item={item}
                index={idx}
                onOpenLightbox={(prod) => setLightboxItem(prod)}
              />
            ))}
          </div>
        </AnimatedSection>
      )}
      {/* Empty state if search returns 0 results */}
      {isSearching && totalMatches === 0 && (
        <div className="max-w-[1000px] mx-auto px-4 py-16 text-center">
          <p className="font-cormorant text-[26px] text-sky-cream">
            No encontramos perfumes que coincidan con &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="mt-2 text-[11.5px] text-sky-textDim">
            Intenta con otra nota olfativa (ej. vainilla, bergamota, coco) o pregúntanos directamente por WhatsApp.
          </p>
        </div>
      )}
      {/* =====================================================================
          7. SECCIÓN: BENEFICIOS
      ===================================================================== */}
      <AnimatedSection
        id="beneficios"
        className="w-full bg-sky-card py-[40px] border-t border-b border-sky-borderSubtle/40"
      >
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0">
          <SectionHeading title="Beneficios" />
          <div className="mt-[18px] grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
              <div className="w-[38.3px] h-[38.3px] rounded-full border border-sky-gold flex items-center justify-center text-sky-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-gold group-hover:text-sky-bg">
                <BenefitDropIcon />
              </div>
              <h3 className="mt-[12px] font-playfair font-bold text-[13.3px] text-sky-goldBright">
                Custom Decants
              </h3>
              <p className="mt-[4px] font-montserrat font-normal text-[10px] text-sky-textDim">
                Try 3, 5, or 10 ml before buying the bottle.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
              <div className="w-[38.3px] h-[38.3px] rounded-full border border-sky-gold flex items-center justify-center text-sky-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-gold group-hover:text-sky-bg">
                <BenefitBottleIcon />
              </div>
              <h3 className="mt-[12px] font-playfair font-bold text-[13.3px] text-sky-goldBright">
                Full Bottles
              </h3>
              <p className="mt-[4px] font-montserrat font-normal text-[10px] text-sky-textDim">
                Available in full size, check current stock.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
              <div className="w-[38.3px] h-[38.3px] rounded-full border border-sky-gold flex items-center justify-center text-sky-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-gold group-hover:text-sky-bg">
                <WhatsAppOutlineIcon className="w-[15px] h-[14.5px]" />
              </div>
              <h3 className="mt-[12px] font-playfair font-bold text-[13.3px] text-sky-goldBright">
                Personalized Advice
              </h3>
              <p className="mt-[4px] font-montserrat font-normal text-[10px] text-sky-textDim">
                We assist you directly via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* =====================================================================
          8. SECCIÓN: PREGUNTAS FRECUENTES (3 ml, 5 ml, 10 ml)
      ===================================================================== */}
      <AnimatedSection
        id="preguntas-frecuentes"
        className="w-full bg-sky-bg pt-[48px] pb-[44px]"
      >
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0">
          <SectionHeading
            title="Preguntas frecuentes"
            subtitle="Las dudas reales que más nos hacen nuestros clientes"
            extraLine="¿No sabes qué tamaño pedir? Te explico cuál es para ti."
          />
          <div className="mt-[26px] grid grid-cols-1 md:grid-cols-3 gap-[20px]">
            {FAQ_SIZES.map((faq) => (
              <div
                key={faq.size}
                className="rounded-[14px] bg-sky-card border border-sky-borderSubtle p-[22px] sm:p-[24px] min-h-[216.6px] flex flex-col justify-start transition-all duration-300 hover:border-sky-borderGold/70 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)] group"
              >
                <div className="flex items-baseline gap-[6px] transition-transform duration-300 group-hover:scale-105 origin-left">
                  <span className="font-playfair font-bold text-[43.3px] leading-none text-sky-goldBright">
                    {faq.size}
                  </span>
                  <span className="font-playfair font-bold text-[16.7px] leading-none text-sky-goldBright">
                    {faq.unit}
                  </span>
                </div>
                <p className="mt-[14px] font-montserrat font-normal text-[9.2px] tracking-[0.14em] text-sky-textDim uppercase">
                  {faq.subtitle}
                </p>
                <p className="mt-[10px] font-montserrat font-normal text-[10.8px] leading-[1.65] text-sky-textSecondary">
                  {faq.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      {/* =====================================================================
          9. SECCIÓN: INFORMACIÓN DE ENVÍOS
      ===================================================================== */}
      <AnimatedSection
        id="envios"
        className="w-full bg-sky-card pt-[38px] pb-[34px]"
      >
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0">
          <SectionHeading title="Información de envíos" />
          {/* 4 Shipping Highlight Cards */}
          <div className="mt-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[13.3px]">
            {SHIPPING_HIGHLIGHTS.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  transitionDelay: `${idx * 60}ms`,
                }}
                className="group h-[91.7px] rounded-[12px] bg-sky-bgDarkBox border border-sky-borderGold px-[18px] py-[14px] flex flex-col justify-between transition-all duration-300 hover:border-sky-gold hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.6),0_0_15px_rgba(200,164,106,0.12)] cursor-default"
              >
                <div className="text-sky-gold transition-transform duration-300 group-hover:scale-110 origin-left">
                  {item.icon === "truck" && <ShipTruckIcon />}
                  {item.icon === "tag" && <ShipTagIcon />}
                  {item.icon === "drop" && <ShipDropIcon />}
                  {item.icon === "clock" && <ShipClockIcon />}
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-[15px] leading-[1.2] text-sky-goldBright transition-colors duration-200 group-hover:text-sky-cream">
                    {item.title}
                  </h3>
                  <p className="mt-[2px] font-montserrat font-normal text-[10px] text-sky-textDim">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* COURIERS */}
          <div className="mt-[24px]">
            <p className="font-montserrat font-normal text-[9.2px] tracking-[0.14em] text-sky-textDim uppercase">
              COURIERS
            </p>
            <div className="mt-[8px] flex flex-wrap items-center justify-start gap-[13.3px]">
              {/* FedEx Pill */}
              <div className="w-[108.3px] h-[36.7px] rounded-full bg-[#f3e9d7] flex items-center justify-center select-none transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_16px_rgba(243,233,215,0.2)] cursor-default">
                <span className="font-montserrat font-extrabold text-[14.2px] tracking-[-0.03em] leading-none">
                  <span className="text-[#4d148c]">Fed</span>
                  <span className="text-[#ff6600]">Ex</span>
                </span>
              </div>
              {/* DHL Pill */}
              <div className="w-[108.3px] h-[36.7px] rounded-full bg-[#ffcc00] flex items-center justify-center select-none transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_16px_rgba(255,204,0,0.3)] cursor-default">
                <span className="font-montserrat font-extrabold text-[14.2px] tracking-[0.02em] leading-none text-[#d40511]">
                  DHL
                </span>
              </div>
              {/* Estafeta Pill */}
              <div className="w-[108.3px] h-[36.7px] rounded-full bg-[#f3e9d7] flex items-center justify-center select-none transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_16px_rgba(243,233,215,0.2)] cursor-default">
                <span className="font-montserrat font-extrabold text-[13.3px] tracking-[-0.01em] leading-none text-[#e2001a]">
                  Estafeta
                </span>
              </div>
            </div>
          </div>
          {/* SHIPPING DAYS */}
          <div className="mt-[20px]">
            <p className="font-montserrat font-normal text-[9.2px] tracking-[0.14em] text-sky-textDim uppercase">
              SHIPPING DAYS
            </p>
            <div className="mt-[8px] flex flex-col md:flex-row md:items-center gap-4 md:gap-[24px]">
              {/* 7 Day Boxes */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-[11.7px]">
                {SHIPPING_DAYS.map((d) => {
                  const isGold = d.variant === "gold";
                  return (
                    <div
                      key={d.day}
                      className={`group w-[51.7px] h-[46.6px] rounded-[10px] bg-sky-bg border flex flex-col items-center justify-center gap-[7px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(0,0,0,0.5)] cursor-default ${
                        isGold ? "border-sky-gold hover:bg-sky-gold/10" : "border-[#f3e9d7] hover:border-sky-gold hover:bg-white/5"
                      }`}
                    >
                      <span className="font-montserrat font-semibold text-[10.8px] leading-none text-sky-cream transition-colors group-hover:text-sky-goldLight">
                        {d.day}
                      </span>
                      <span
                        className={`w-[5.8px] h-[5.8px] rounded-full transition-transform duration-200 group-hover:scale-125 ${
                          isGold ? "bg-sky-gold" : "bg-[#f3e9d7]"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
              {/* Dispatch Schedule Text */}
              <div className="text-center sm:text-left space-y-[5px] font-montserrat font-normal text-[10.8px] text-sky-textDim">
                <p>Pedidos de lunes a jueves → salen el viernes</p>
                <p>Pedidos de viernes a domingo → salen el lunes</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* =====================================================================
          10. SECCIÓN: BANNER WHATSAPP + CONTACTO (Redes Sociales)
      ===================================================================== */}
      <section id="contact" className="w-full bg-sky-bg pt-[64px] pb-[56px]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0">
          {/* Large WhatsApp CTA Box */}
          <div className="w-full min-h-[141.7px] rounded-[14px] bg-sky-bgAlt border border-sky-gold px-6 py-[22px] flex flex-col items-center justify-center">
            <div className="text-sky-gold mb-[16px]">
              <WhatsAppOutlineIcon className="w-[20px] h-[19.5px]" />
            </div>
            <a
              href={buildWhatsAppUrl(SITE_CONFIG.whatsappDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[267px] h-[48px] rounded-full flex items-center justify-center font-montserrat font-semibold text-[14.2px] text-[#14110c] transition-all duration-300 hover:brightness-105 hover:scale-[1.02] shadow-[0_6px_20px_rgba(200,164,106,0.25)]"
              style={{
                background:
                  "linear-gradient(135deg, #e1c188 0%, #c9a56a 55%, #b18b4f 100%)",
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
          {/* Contact Socials */}
          <div className="mt-[64px]">
            <SectionHeading title="Contacto" />
            <div className="mt-[18px] flex flex-wrap items-center justify-center gap-[28px] sm:gap-[35px]">
              {/* Instagram */}
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-[10px] select-none transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="w-[48.4px] h-[48.4px] rounded-full border border-sky-gold flex items-center justify-center text-sky-gold transition-all duration-200 group-hover:bg-sky-gold group-hover:text-sky-bg group-hover:shadow-[0_0_15px_rgba(200,164,106,0.35)]">
                  <SocialInstagramIcon />
                </div>
                <span className="font-montserrat font-normal text-[9.2px] text-sky-textDim group-hover:text-sky-goldLight transition-colors">
                  Instagram
                </span>
              </a>
              {/* Facebook */}
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-[10px] select-none transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="w-[48.4px] h-[48.4px] rounded-full border border-sky-gold flex items-center justify-center text-sky-gold transition-all duration-200 group-hover:bg-sky-gold group-hover:text-sky-bg group-hover:shadow-[0_0_15px_rgba(200,164,106,0.35)]">
                  <SocialFacebookIcon />
                </div>
                <span className="font-montserrat font-normal text-[9.2px] text-sky-textDim group-hover:text-sky-goldLight transition-colors">
                  Facebook
                </span>
              </a>
              {/* TikTok */}
              <a
                href={SITE_CONFIG.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-[10px] select-none transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="w-[48.4px] h-[48.4px] rounded-full border border-sky-gold flex items-center justify-center text-sky-gold transition-all duration-200 group-hover:bg-sky-gold group-hover:text-sky-bg group-hover:shadow-[0_0_15px_rgba(200,164,106,0.35)]">
                  <SocialTikTokIcon />
                </div>
                <span className="font-montserrat font-normal text-[9.2px] text-sky-textDim group-hover:text-sky-goldLight transition-colors">
                  TikTok
                </span>
              </a>
              {/* WhatsApp */}
              <a
                href={SITE_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-[10px] select-none transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="w-[48.4px] h-[48.4px] rounded-full border border-sky-gold flex items-center justify-center text-sky-gold transition-all duration-200 group-hover:bg-sky-gold group-hover:text-sky-bg group-hover:shadow-[0_0_15px_rgba(200,164,106,0.35)]">
                  <WhatsAppOutlineIcon className="w-[17.5px] h-[17px]" />
                </div>
                <span className="font-montserrat font-normal text-[9.2px] text-sky-textDim group-hover:text-sky-goldLight transition-colors">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. SECCIÓN: MÉTODOS DE PAGO
      ===================================================================== */}
      <section
        id="metodos-de-pago"
        className="w-full bg-sky-card pt-[36px] pb-[34px]"
      >
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0">
          <SectionHeading title="Métodos de pago" />
          <div className="mt-[18px] grid grid-cols-1 md:grid-cols-3 gap-[20px]">
            {/* Bank Deposit */}
            <div className="h-[91.7px] rounded-[12px] bg-sky-bgDarkBox border border-sky-borderGold flex flex-col items-center justify-center gap-[12px]">
              <div className="text-sky-gold">
                <PayBankIcon />
              </div>
              <span className="font-montserrat font-semibold text-[11.7px] text-sky-cream">
                Bank Deposit
              </span>
            </div>
            {/* SPEI Wire Transfer */}
            <div className="h-[91.7px] rounded-[12px] bg-sky-bgDarkBox border border-sky-borderGold flex flex-col items-center justify-center gap-[12px]">
              <div className="text-sky-gold">
                <PaySpeiIcon />
              </div>
              <span className="font-montserrat font-semibold text-[11.7px] text-sky-cream">
                SPEI Wire Transfer
              </span>
            </div>
            {/* Cash */}
            <div className="h-[91.7px] rounded-[12px] bg-sky-bgDarkBox border border-sky-borderGold flex flex-col items-center justify-center gap-[12px]">
              <div className="text-sky-gold">
                <PayCashIcon />
              </div>
              <span className="font-montserrat font-semibold text-[11.7px] text-sky-cream">
                Cash
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================================
          12. FOOTER
      ===================================================================== */}
      <footer className="w-full bg-sky-bgDeep border-t-[2.5px] border-sky-gold pt-[17px] pb-[18px]">
        <div className="max-w-[1000px] mx-auto px-4 flex flex-col items-center justify-center text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/footer-logo.svg"
            alt="Sky Scents عطر السماء"
            width={68}
            height={47}
            className="h-[44.5px] w-auto object-contain select-none"
          />
          <p className="mt-[8px] font-montserrat font-normal text-[8.4px] text-sky-textMuted tracking-[0.01em]">
            © Sky Scents Club — Protección de Datos y Derechos - Hecho por{" "}
            <a
              href="https://palaciosmkt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-cream hover:text-sky-gold underline underline-offset-2 transition-colors"
            >
              Palacios MKT
            </a>
          </p>
        </div>
      </footer>
      {/* Lightbox Modal Premium */}
      <ImageLightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />
    </div>
  );
}
