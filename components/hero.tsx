"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-950 antialiased">
      <BackgroundBeams className="opacity-50" />
      
      <div className="z-10 flex flex-col items-center justify-center p-4 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-blue-300 backdrop-blur-sm"
        >
          Premier Venture Studio em Angola
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 text-center"
        >
          Nós Construímos o<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-cyber-purple">
            Futuro da Tecnologia.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl text-center leading-relaxed"
        >
          A Starting Point faz parceria com visionários para arquitetar, desenhar e escalar software de classe mundial, de Luanda para o mundo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ShimmerButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Iniciar um Projeto <MoveRight className="w-4 h-4" />
          </ShimmerButton>
        </motion.div>
      </div>
    </div>
  );
};
