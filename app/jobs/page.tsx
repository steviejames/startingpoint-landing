"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Paintbrush, Copy, Check } from "lucide-react";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden">
      <Navbar />
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 mb-6"
          >
            Estamos a Recrutar!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Junta-te à equipa de desenvolvimento da Starting Point para construir produtos do zero.
            Procuramos talentos apaixonados por tecnologia e inovação.
          </motion.p>
        </div>

        {/* Jobs List */}
        <div className="grid md:grid-cols-2 gap-8 gap-y-48 max-w-6xl mx-auto mt-40">
          
          {/* Full Stack Developer */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 pt-60 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group relative"
          >
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[350px] h-[350px] flex items-center justify-center pointer-events-none">
              <div className="absolute inset-20 bg-blue-500/20 rounded-full blur-3xl -z-10" />
              <Image 
                src="/assets/jobs/dev-3d-transparent.png.png" // Character coding
                alt="Full Stack Developer"
                width={350}
                height={350}
                quality={100}
                className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Code2 size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Desenvolvedor Full Stack</h2>
              </div>
              
              <div className="space-y-4 text-slate-600 mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium">React.js</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium">Prisma</span>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                    <span>Regime 100% Remoto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                    <span>Subsídio de Internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                    <span>Fase inicial (1 mês) em regime de estágio remunerado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                    <span>Possibilidade de efetivação imediata baseada em performance</span>
                  </li>
                </ul>
              </div>

              <Link 
                href="mailto:jobs@sbhub.ao?subject=Candidatura Full Stack Developer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all hover:gap-4 group-hover:shadow-lg group-hover:shadow-blue-500/30"
              >
                Candidatar-se <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Graphic Designer */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 pt-60 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group relative"
          >
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[350px] h-[350px] flex items-center justify-center pointer-events-none">
              <div className="absolute inset-20 bg-purple-500/20 rounded-full blur-3xl -z-10" />
              <Image 
                src="/assets/jobs/design-3d-final.png" // Character designing
                alt="Graphic Designer"
                width={350}
                height={350}
                quality={100}
                className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <Paintbrush size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Designer Gráfico (+ UI Básico)</h2>
              </div>
              
              <div className="space-y-4 text-slate-600 mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium">Photoshop</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium">Illustrator</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium">Figma (Básico)</span>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                    <span>Regime 100% Remoto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                    <span>Subsídio de Internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                    <span>Fase inicial (1 mês) em regime de estágio remunerado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                    <span>Possibilidade de efetivação imediata baseada em performance</span>
                  </li>
                </ul>
              </div>

              <Link 
                href="mailto:jobs@sbhub.ao?subject=Candidatura Designer Gráfico"
                className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all hover:gap-4 group-hover:shadow-lg group-hover:shadow-slate-500/30"
              >
                Candidatar-se <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center bg-white p-12 rounded-3xl border border-slate-100 shadow-lg max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Não encontraste a tua vaga?
          </h3>
          <p className="text-slate-600 mb-8 text-lg">
            Estamos sempre à procura de talentos excepcionais. Envia o teu CV espontâneo.
          </p>
          <EmailButton />
        </motion.div>

      </div>
      <Footer hideCTA={true} />
    </main>
  );
}

function EmailButton() {
  const [copied, setCopied] = React.useState(false);
  const email = "jobs@sbhub.ao";

  const handleCopy = () => {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex justify-center">
      <button
          onClick={handleCopy}
          className="group relative flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-slate-200 hover:border-neon-blue transition-all shadow-sm hover:shadow-md"
      >
          <span className="text-lg md:text-xl font-mono text-slate-600 group-hover:text-slate-900 transition-colors">
              {email}
          </span>
          {copied ? (
              <Check className="w-5 h-5 text-green-500" />
          ) : (
              <Copy className="w-5 h-5 text-slate-400 group-hover:text-neon-blue transition-colors" />
          )}

          <AnimatePresence>
              {copied && (
                  <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-full whitespace-nowrap backdrop-blur-md"
                  >
                      Email copiado!
                  </motion.div>
              )}
          </AnimatePresence>
      </button>
    </div>
  );
}
