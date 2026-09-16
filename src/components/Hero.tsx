/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { Language, translations } from "../types";
import { ChevronDown, ArrowRight } from "lucide-react";
import bannerMainImg from "../assets/images/banner main.jpg";

interface HeroProps {
  language: Language;
  onOpenContact: (interest: "worship" | "missions" | "both" | "other") => void;
}

export default function Hero({ language, onOpenContact }: HeroProps) {
  const t = translations[language];

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0c3527] py-28 text-white"
      id="hero-section"
    >
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerMainImg}
          alt="The Cross Fellowship Banner"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Subtle, refined gradient overlays: fades top into header and bottom into next section while keeping the image vibrant and visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c3527] via-[#0c3527]/40 to-[#0c3527]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c3527]/75 via-transparent to-[#0c3527]" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Aesthetic glowing color spots for ambient texture: emerald + warm gold */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full bg-emerald-400/10 blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[35%] left-[60%] -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[130px] pointer-events-none z-0" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 z-10">
        {/* Animated Icon Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto flex justify-center mb-8"
          id="hero-logo-icon-emblem"
        >
          <div className="h-16 px-6 py-2 rounded-sm bg-gradient-to-r from-[#0c3527]/85 to-[#16533e]/85 backdrop-blur-md shadow-xl border border-amber-300/30 flex items-center justify-center">
            <Logo iconOnly={false} className="h-10" light={true} />
          </div>
        </motion.div>

        {/* Brand Name Annotation with shimmering gold gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gradient-gold font-mono text-xl uppercase tracking-[0.4em] font-semibold drop-shadow-xs"
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
          className="mt-6 font-sans text-base sm:text-lg text-emerald-50/90 font-light leading-relaxed max-w-2xl mx-auto"
          id="hero-intro-paragraph"
        >
          {t.description}
        </motion.p>

        {/* Verse under welcome description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-5 font-serif text-lg sm:text-xl text-amber-200/95 italic tracking-wide font-normal max-w-xl mx-auto drop-shadow-xs"
          id="hero-scripture-verse"
        >
          {language === "en" ? (
            <>
              “For to me to live is Christ”{" "}
              <span className="font-mono text-xs not-italic font-semibold tracking-widest uppercase text-amber-300/80 block sm:inline sm:ml-2">
                — Philippians 1:21
              </span>
            </>
          ) : (
            <>
              “ለእኔ ሕይወት ክርስቶስ ነው”{" "}
              <span className="font-mono text-xs not-italic font-semibold tracking-widest uppercase text-amber-300/80 block sm:inline sm:ml-2">
                — ፊልጵስዩስ ፩:፳፩
              </span>
            </>
          )}
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
            className="group w-full sm:w-auto px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#c89b4a] via-[#dfb66e] to-[#b38334] text-[#072118] font-bold text-sm tracking-wide shadow-lg shadow-black/25 hover:shadow-amber-500/25 hover:brightness-105 active:scale-[0.99] transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
            id="hero-connect-cta-btn"
          >
            <span>{t.contactLink}</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5px] transition-transform group-hover:translate-x-1" />
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
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm border-2 border-emerald-400/40 bg-[#0c3527]/50 backdrop-blur-xs text-white font-semibold text-sm tracking-wide hover:bg-white hover:text-[#0c3527] hover:border-white transition duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
            id="hero-discover-btn"
          >
            <span>{t.learnMore}</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator Anchor */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-70">
        <span className="font-mono text-[9px] tracking-widest text-emerald-200 uppercase font-semibold">
          {language === "en" ? "Scroll Down" : "ወደ ታች ይሸብልሉ"}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-amber-300" />
        </motion.div>
      </div>
    </section>
  );
}
