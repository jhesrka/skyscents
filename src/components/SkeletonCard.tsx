import React from "react";

export function SkeletonCard() {
  return (
    <div className="relative flex flex-col justify-between rounded-[14px] bg-sky-card border border-sky-borderSubtle p-[10px] animate-pulse">
      <div>
        {/* Image Box Skeleton */}
        <div className="w-full h-[160px] sm:h-[126px] rounded-[10px] bg-sky-bgDarkBox/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-gold/10 to-transparent animate-shimmer" />
        </div>

        {/* Text Skeleton */}
        <div className="mt-4 px-1 space-y-2">
          <div className="h-4 w-3/4 bg-sky-bgDarkBox rounded" />
          <div className="h-3 w-1/2 bg-sky-bgDarkBox/70 rounded" />
          <div className="h-2.5 w-full bg-sky-bgDarkBox/40 rounded mt-3" />
          <div className="h-2.5 w-5/6 bg-sky-bgDarkBox/40 rounded" />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="h-6 w-full bg-sky-bgDarkBox/70 rounded" />
        <div className="h-6 w-full bg-sky-bgDarkBox/70 rounded" />
        <div className="h-8 w-full bg-sky-bgDarkBox/90 rounded-full mt-3" />
      </div>
    </div>
  );
}

