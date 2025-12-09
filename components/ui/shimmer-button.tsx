"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const ShimmerButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex h-12 overflow-hidden rounded-full border border-slate-800 bg-slate-950 px-8 py-2 transition-all hover:scale-105 hover:border-slate-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]" />
      <span className="inline-flex items-center justify-center gap-2 text-slate-100 font-medium z-10">
        {children}
      </span>
    </button>
  );
};
