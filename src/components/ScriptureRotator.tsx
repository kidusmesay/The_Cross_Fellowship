/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Language, scriptureVerses, translations } from "../types";

interface ScriptureRotatorProps {
  language: Language;
}

export default function ScriptureRotator({ language }: ScriptureRotatorProps) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const verses = scriptureVerses[language];
  const t = translations[language];

  // Automatic slide/timer rotation
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % verses.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, verses.length]);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + verses.length) % verses.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % verses.length);
  };

  return (
    <section
      className="relative bg-white overflow-hidden py-24 sm:py-28 text-slate-800 border-y border-slate-200/80"
      id="scriptures"
    >
      {/* Delicate background decorations */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <Quote className="h-96 w-96 text-[#0c3527]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Indicator */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-[#0c3527]/20" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#0c3527] font-bold">
            {t.scripturesTitle}
          </span>
          <span className="h-px w-8 bg-[#0c3527]/20" />
        </div>

        {/* Rotator Text Panel */}
        <div className="relative min-h-[160px] flex items-center justify-center" id="scripture-carousel-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${language}-${index}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-2xl mx-auto flex flex-col items-center justify-center"
            >
              {/* Main Verse Quote */}
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-slate-800 font-light italic leading-relaxed tracking-wide">
                "{verses[index]?.text || ""}"
              </p>

              {/* Reference */}
              <p className="mt-5 font-mono text-xs uppercase tracking-widest text-[#0c3527] font-bold">
                — {verses[index]?.reference || ""} —
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="mt-10 flex items-center justify-center gap-4" id="scripture-carousel-controls">
          <button
            onClick={handlePrev}
            className="rounded-sm p-2.5 border border-slate-200 bg-slate-50 text-slate-500 hover:text-[#0c3527] hover:border-[#0c3527]/30 hover:bg-emerald-50/50 transition duration-150 cursor-pointer"
            id="scripture-prev-btn"
            title={language === "en" ? "Previous verse" : "ያለፈው ጥቅስ"}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Autoplay Pause Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-sm p-2 border border-slate-200 bg-slate-50 text-slate-500 hover:text-[#0c3527] hover:border-[#0c3527]/30 hover:bg-emerald-50/50 transition duration-150 cursor-pointer"
            id="scripture-play-pause-btn"
            title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>

          <button
            onClick={handleNext}
            className="rounded-sm p-2.5 border border-slate-200 bg-slate-50 text-slate-500 hover:text-[#0c3527] hover:border-[#0c3527]/30 hover:bg-emerald-50/50 transition duration-150 cursor-pointer"
            id="scripture-next-btn"
            title={language === "en" ? "Next verse" : "የሚቀጥለው ጥቅስ"}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="mt-6 flex justify-center gap-2">
          {verses.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-sm transition-all duration-300 ${
                i === index ? "w-6 bg-gradient-to-r from-[#0c3527] to-[#134937]" : "w-1.5 bg-slate-200 hover:bg-[#0c3527]/30"
              }`}
              id={`scripture-pag-dot-${i}`}
              title={`Go to verse ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
