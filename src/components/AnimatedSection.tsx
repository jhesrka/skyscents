"use client";

import React, { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  delayMs?: number;
}

export function AnimatedSection({
  id,
  className = "",
  children,
  delayMs = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0,
    rootMargin: "0px 0px 100px 0px",
  });

  return (
    <section
      id={id}
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-7 pointer-events-none"
      } ${className}`}
    >
      {children}
    </section>
  );
}

