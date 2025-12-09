"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
        scrolled
          ? "bg-slate-950/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          Starting Point
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <Link href="#services" className="hover:text-white transition-colors">
          Serviços
        </Link>
        <Link href="#method" className="hover:text-white transition-colors">
          Método
        </Link>
        <Link href="#contact" className="hover:text-white transition-colors">
          Contacto
        </Link>
      </div>

      <div className="md:hidden">
        {/* Mobile Menu Placeholder - keeping it simple as per request or just basic hamburger */}
        <button className="text-white p-2">
           <span className="sr-only">Menu</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </motion.nav>
  );
};
