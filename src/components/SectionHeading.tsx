import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  extraLine?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  extraLine,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center flex flex-col items-center ${className}`}>
      <h2 className="font-cormorant font-light text-[28px] sm:text-[35px] leading-[1.15] text-sky-cream tracking-[0.01em]">
        {title}
      </h2>

      {/* Golden Line & Central Diamond Ornament */}
      <div className="flex items-center justify-center gap-2.5 mt-3 mb-3.5" aria-hidden="true">
        <span className="w-[56.7px] h-[1px] bg-sky-gold" />
        <span className="w-[6.7px] h-[6.7px] bg-sky-gold rotate-45 block" />
        <span className="w-[56.7px] h-[1px] bg-sky-gold" />
      </div>

      {subtitle && (
        <p className="font-montserrat font-normal text-[11.5px] sm:text-[12.5px] text-sky-textSecondary tracking-[0.01em]">
          {subtitle}
        </p>
      )}

      {extraLine && (
        <p className="font-cormorant font-light text-[16px] sm:text-[18.3px] text-sky-cream mt-2.5">
          {extraLine}
        </p>
      )}
    </div>
  );
}

