/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Music, MapPin, Sparkles, Heart } from "lucide-react";
import { Language, translations } from "../types";

// Import the generated images directly for high visual quality
import worshipImg from "../assets/images/worship_team_photo_1781712491371.jpg";
import missionImg from "../assets/images/mission_team_photo_1781712507579.jpg";

interface WingsProps {
  language: Language;
  onOpenContact: (interest: "worship" | "missions" | "both" | "other") => void;
}

export default function Wings({ language, onOpenContact }: WingsProps) {
  const t = translations[language];

  return (
    <section className="bg-brand-bg py-24 sm:py-32 border-t border-slate-200/80" id="ministries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white text-slate-600 border border-slate-200/80 mb-4"
          >
            <Sparkles className="h-4 w-4 text-amber-600" />
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider">
              {language === "en" ? "Wings of Ministry" : "የአአገልግሎት ክንፎች"}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif font-light text-3xl sm:text-5xl tracking-tight text-slate-900"
            id="wings-section-title"
          >
            {language === "en" ? "Two Wings, One Spirit" : "ሁለት ክንፎች፣ አንድ መንፈስ"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 font-sans text-base text-slate-500 font-light leading-relaxed"
          >
            {language === "en"
              ? "Through continuous praise and hands-on service, we balance our ministry inward to God and outward to humanity."
              : "በቀጣይነት ምስጋና እና በተግባራዊ አገልግሎት፣ አገልግሎታችንን ወደ እግዚአብሔር እና ወደ ማህበረሰቡ ሚዛናዊ እናደርጋለን::"}
          </motion.p>
        </div>

        {/* Side by Side (Stacked on Mobile) Bento Grid structure for Ministry Wings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" id="ministry-wings-grid">
          {/* Wing 1: Singers / Worship Team */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
            className="flex flex-col bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-lg hover:border-slate-300/80 border border-slate-200 transition-all duration-300 group"
            id="wing-worship-card"
          >
            {/* Top Indicator Accent Line */}
            <div className="h-2 bg-slate-800 group-hover:bg-indigo-900 transition-colors" />

            {/* Image Block */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-50">
              <img
                src={worshipImg}
                alt={t.worshipTitle}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/15" />
              <div className="absolute top-4 left-4 rounded-sm bg-slate-900/95 backdrop-blur-xs px-3.5 py-1.5 flex items-center gap-2 text-white shadow-md">
                <Music className="h-4 w-4 text-indigo-300" />
                <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                  {language === "en" ? "Singers" : "ዘማሪዎች"}
                </span>
              </div>
            </div>

            {/* Content info */}
            <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-slate-400 mb-3 block">
                  <span className="h-px w-6 bg-slate-200 inline-block align-middle mr-2" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    {language === "en" ? "Ministry Inward" : "ውስጣዊ አገልግሎት"}
                  </span>
                </div>
                <h3 className="font-serif font-light text-2xl sm:text-3xl text-slate-900 tracking-tight mb-4">
                  {t.worshipTitle}
                </h3>
                <p className="font-sans font-light text-slate-600 text-sm leading-relaxed mb-6">
                  {t.worshipDesc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs text-slate-400 font-medium">
                  <Music className="h-4 w-4 text-slate-500" />
                  <span>
                    {language === "en"
                      ? "Acoustic / Contemporary / Traditional"
                      : "አኮስቲክ / ዘመናዊ / ባህላዊ"}
                  </span>
                </div>
                <button
                  onClick={() => onOpenContact("worship")}
                  className="w-full sm:w-auto px-6 py-3 border-2 border-slate-800 text-slate-800 font-semibold text-sm rounded-sm hover:bg-slate-800 hover:text-white transition-all cursor-pointer text-center"
                  id="join-worship-btn"
                >
                  {t.joinButton}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Wing 2: Mission / Outreach Team */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, type: "spring", bounce: 0.1 }}
            className="flex flex-col bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-lg hover:border-slate-300/80 border border-slate-200 transition-all duration-300 group"
            id="wing-missions-card"
          >
            {/* Top Indicator Accent Line */}
            <div className="h-2 bg-brand-maroon group-hover:bg-brand-maroon-hover transition-colors" />

            {/* Image Block */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-50">
              <img
                src={missionImg}
                alt={t.missionTitle}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/15" />
              <div className="absolute top-4 left-4 rounded-sm bg-slate-900/95 backdrop-blur-xs px-3.5 py-1.5 flex items-center gap-2 text-white shadow-md">
                <MapPin className="h-4 w-4 text-rose-300" />
                <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                  {language === "en" ? "Missions" : "ተልዕኮ"}
                </span>
              </div>
            </div>

            {/* Content info */}
            <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-slate-400 mb-3 block">
                  <span className="h-px w-6 bg-slate-200 inline-block align-middle mr-2" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    {language === "en" ? "Ministry Outward" : "ውጫዊ አገልግሎት"}
                  </span>
                </div>
                <h3 className="font-serif font-light text-2xl sm:text-3xl text-slate-900 tracking-tight mb-4">
                  {t.missionTitle}
                </h3>
                <p className="font-sans font-light text-slate-600 text-sm leading-relaxed mb-6">
                  {t.missionDesc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs text-slate-400 font-medium">
                  <Heart className="h-4 w-4 text-brand-maroon/80" />
                  <span>
                    {language === "en"
                      ? "Local Outreach & Global Campaigns"
                      : "የአካባቢ ተደራሽነት እና ዓለም አቀፍ ዘመቻዎች"}
                  </span>
                </div>
                <button
                  onClick={() => onOpenContact("missions")}
                  className="w-full sm:w-auto px-6 py-3 border-2 border-brand-maroon text-brand-maroon font-semibold text-sm rounded-sm hover:bg-brand-maroon hover:text-white transition-all cursor-pointer text-center"
                  id="join-missions-btn"
                >
                  {t.joinButton}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
