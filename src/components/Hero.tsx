/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { Language, translations } from "../types";
import { ChevronDown, ArrowRight } from "lucide-react";

interface HeroProps {
  language: Language;
  onOpenContact: (interest: "worship" | "missions" | "both" | "other") => void;
}

export default function Hero({ language, onOpenContact }: HeroProps) {
  const t = translations[language];

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-brand-charcoal py-28 text-white"
      id="hero-section"
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Aesthetic glowing color spot for ambient texture */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 z-10">
        {/* Animated Icon Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto flex justify-center mb-8"
          id="hero-logo-icon-emblem"
        >
          <div className="h-16 px-6 py-2 rounded-sm bg-brand-charcoal/40 backdrop-blur-xs shadow-md border border-white/20 flex items-center justify-center">
            <Logo iconOnly={false} className="h-10" light={true} />
          </div>
        </motion.div>

        {/* Brand Name Annotation */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono text-xl uppercase tracking-[0.4em] text-slate-300 font-semibold"
          id="hero-mini-title"
        >
          {t.brandName}
        </motion.h2>

        {/* Tagline Heading - Uses custom font-serif with beautiful light weight */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white max-w-4xl mx-auto leading-tight"
          id="hero-banner-tagline"
        >
          {t.brandSub}
        </motion.h1>

        {/* Description body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 font-sans text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-2xl mx-auto"
          id="hero-intro-paragraph"
        >
          {t.description}
        </motion.p>

        {/* Call to Actions button group */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          id="hero-button-actions"
        >
          <button
            onClick={() => onOpenContact("both")}
            className="group w-full sm:w-auto px-8 py-3.5 rounded-sm bg-white text-brand-charcoal font-semibold text-sm tracking-wide shadow-md hover:bg-slate-100 transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
            id="hero-connect-cta-btn"
          >
            <span>{t.contactLink}</span>
            <ArrowRight className="h-4 w-4 stroke-[2px] transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => {
              try {
                const el = document.getElementById("ministries");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              } catch (e) {
                try {
                  const el = document.getElementById("ministries");
                  if (el) {
                    el.scrollIntoView();
                  }
                } catch (err) {
                  // no-op
                }
              }
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm border-2 border-white/80 bg-transparent text-white font-semibold text-sm tracking-wide hover:bg-white hover:text-brand-charcoal transition duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
            id="hero-discover-btn"
          >
            <span>{t.learnMore}</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator Anchor */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="font-mono text-[9px] tracking-widest text-slate-300 uppercase font-semibold">
          {language === "en" ? "Scroll Down" : "ወደ ታች ይሸብልሉ"}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-slate-300" />
        </motion.div>
      </div>
    </section>
  );
}
