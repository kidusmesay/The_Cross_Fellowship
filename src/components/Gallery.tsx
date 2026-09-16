/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Image as ImageIcon, 
  Calendar, 
  Search, 
  ArrowRight,
  ChevronRight,
  Layers
} from "lucide-react";
import { Language, translations, galleryItems, GalleryItem } from "../types";

// Import the images
import worshipImg from "../assets/images/a.jpg";
import missionImg from "../assets/images/mission_team_photo_1781712507579.jpg";
import bibleStudyImg from "../assets/images/bible_study_group_1784647578299.jpg";
import youthImg from "../assets/images/youth_fellowship_1784647593564.jpg";
import prayerImg from "../assets/images/prayer_group_fellowship_1784648210064.jpg";
import coffeeImg from "../assets/images/fellowship_coffee_tea_1784648224038.jpg";
import bImg from "../assets/images/b.jpg";
import cImg from "../assets/images/c.jpg";
import dImg from "../assets/images/d.jpg";
import main4Img from "../assets/images/4_main.jpg";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/10.jpg";
import img11 from "../assets/images/11.jpg";
import img12 from "../assets/images/12.jpg";

interface GalleryProps {
  language: Language;
  onViewActivities?: (selectedId?: string) => void;
}

type DateFilter = "all" | "july-2026" | "june-2026";
type CategoryFilter = "all" | "worship" | "outreach" | "bible" | "youth";

export default function Gallery({ language, onViewActivities }: GalleryProps) {
  const t = translations[language];
  const allItems = useMemo(() => {
    const gal2RecapList = [
      main4Img,
      img1,
      img2,
      img3,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12
    ];
    return galleryItems(
      worshipImg,
      missionImg,
      bibleStudyImg,
      youthImg,
      prayerImg,
      coffeeImg,
      bImg,
      cImg,
      dImg,
      main4Img,
      gal2RecapList
    );
  }, []);

  // UI state for search and filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDateFilter, setSelectedDateFilter] = useState<DateFilter>("all");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<CategoryFilter>("all");

  // Filter items based on user selection
  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      // 1. Text Search matching
      const matchesSearch = 
        item.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.titleAm.includes(searchQuery) ||
        item.descEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.descAm.includes(searchQuery) ||
        item.scriptureRefEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.scriptureRefAm.includes(searchQuery) ||
        item.categoryEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryAm.includes(searchQuery);

      // 2. Date/Timeline Filter matching
      let matchesDate = true;
      if (selectedDateFilter === "july-2026") {
        matchesDate = item.date.startsWith("2026-07");
      } else if (selectedDateFilter === "june-2026") {
        matchesDate = item.date.startsWith("2026-06");
      }

      // 3. Category matching
      let matchesCategory = true;
      if (selectedCategoryFilter === "worship") {
        matchesCategory =
          item.id === "gal-1" ||
          item.id === "gal-2" ||
          item.categoryEn.toLowerCase().includes("worship") ||
          item.categoryEn.toLowerCase().includes("praise");
      } else if (selectedCategoryFilter === "outreach") {
        matchesCategory =
          item.categoryEn.toLowerCase().includes("outreach") ||
          item.categoryEn.toLowerCase().includes("mission");
      } else if (selectedCategoryFilter === "bible") {
        matchesCategory = item.id === "gal-3";
      } else if (selectedCategoryFilter === "youth") {
        matchesCategory = item.id === "gal-4";
      }

      return matchesSearch && matchesDate && matchesCategory;
    });
  }, [allItems, searchQuery, selectedDateFilter, selectedCategoryFilter]);

  const activeDateFilters: { id: DateFilter; labelEn: string; labelAm: string }[] = [
    { id: "all", labelEn: "All Dates", labelAm: "ሁሉም ቀናት" },
    { id: "july-2026", labelEn: "July 2026", labelAm: "ሐምሌ ፪፲፲፰" },
    { id: "june-2026", labelEn: "June 2026", labelAm: "ሰኔ ፪፲፲፰" },
  ];

  const activeCategoryFilters: { id: CategoryFilter; labelEn: string; labelAm: string }[] = [
    { id: "all", labelEn: "All Services", labelAm: "ሁሉም አገልግሎቶች" },
    { id: "worship", labelEn: "Worship & Praise", labelAm: "አምልኮና ምስጋና" },
    { id: "outreach", labelEn: "Outreach & Mission", labelAm: "ማህበረሰብ አገልግሎት" },
    { id: "bible", labelEn: "Bible Study", labelAm: "መጽሐፍ ቅዱስ ጥናት" },
    { id: "youth", labelEn: "Youth Gatherings", labelAm: "የወጣቶች ሕብረት" },
  ];

  return (
    <section className="bg-brand-bg py-24 sm:py-28 border-t border-slate-200/80" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white text-slate-700 border border-[#0c3527]/15 mb-4 shadow-3xs animate-fade-in">
            <ImageIcon className="h-3.5 w-3.5 text-[#c89b4a]" />
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#0c3527]">
              {language === "en" ? "Service Records & Memories" : "የአገልግሎት መዛግብት እና ትውስታዎች"}
            </span>
          </div>
          <h2 className="font-serif font-light text-3xl sm:text-4xl tracking-tight text-[#08261c]">
            {language === "en" ? "Interactive Service Gallery" : "በይነተገናኝ የአገልግሎት ማዕከለ-ስዕላት"}
          </h2>
          <p className="mt-4 font-sans font-light text-sm text-slate-500 leading-relaxed">
            {language === "en"
              ? "A historical chronicle of our gatherings, community outreach, and fellowship activities. Filter by date, scripture, or ministry to explore recent service recaps and impact."
              : "የእሁድ አምልኮዎች፣ የማህበረሰብ ተደራሽነት እና የወንድማማችነት ህብረቶች የታሪክ ሰነድ። የቅርብ ጊዜ የአገልግሎት ማጠቃለያዎችን እና በጎ ተጽዕኖዎችን ለመመርመር በቀን፣ በጥቅስ ወይም በአገልግሎት ዘርፍ ይፈልጉ።"}
          </p>
        </div>

        {/* Search, Date Filters, and Category Filters Board */}
        <div className="bg-white border border-slate-200 shadow-xs rounded-xl p-6 mb-12 max-w-5xl mx-auto" id="gallery-filters-board">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Real-time search bar */}
            <div className="lg:col-span-4 relative" id="search-input-container">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === "en" ? "Search services, scriptures..." : "አገልግሎቶችን፣ ጥቅሶችን ይፈልጉ..."}
                className="w-full pl-9 pr-4 py-2.5 rounded-md border border-slate-200 bg-slate-50/50 text-slate-800 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0c3527] transition-all placeholder:text-slate-400"
                id="gallery-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <span className="text-xs font-semibold">✕</span>
                </button>
              )}
            </div>

            {/* Date Filters (Timeline) */}
            <div className="lg:col-span-8 flex flex-col gap-2" id="timeline-filters">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 flex items-center gap-1 shrink-0">
                  <Calendar className="h-3 w-3" />
                  {language === "en" ? "Timeline:" : "ጊዜ፡"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeDateFilters.map((df) => (
                    <button
                      key={df.id}
                      onClick={() => setSelectedDateFilter(df.id)}
                      className={`px-3 py-1.5 rounded-sm font-sans text-xs transition duration-150 cursor-pointer ${
                        selectedDateFilter === df.id
                          ? "bg-[#0c3527] text-white font-medium shadow-xs"
                          : "bg-slate-50 text-slate-600 hover:bg-[#0c3527]/5 border border-slate-200/60"
                      }`}
                      id={`date-filter-${df.id}`}
                    >
                      {language === "en" ? df.labelEn : df.labelAm}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-slate-100 my-4" />

          {/* Category Filter Badges */}
          <div className="flex flex-wrap items-center gap-3" id="category-filters">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 flex items-center gap-1 shrink-0">
              <Layers className="h-3 w-3" />
              {language === "en" ? "Ministries:" : "የአገልግሎት ዘርፎች፡"}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeCategoryFilters.map((cf) => (
                <button
                  key={cf.id}
                  onClick={() => setSelectedCategoryFilter(cf.id)}
                  className={`px-3.5 py-1.5 rounded-full font-sans text-xs transition duration-150 cursor-pointer ${
                    selectedCategoryFilter === cf.id
                      ? "bg-[#0c3527] text-white font-medium shadow-xs"
                      : "bg-slate-100/60 text-slate-600 hover:bg-[#0c3527]/5 border border-transparent"
                  }`}
                  id={`category-filter-${cf.id}`}
                >
                  {language === "en" ? cf.labelEn : cf.labelAm}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Gallery Dynamic Layout */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16" id="gallery-container-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onViewActivities?.(item.id)}
                  className="group relative rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer"
                  id={`gallery-item-${item.id}`}
                >
                  {/* Photo Container */}
                  <div className="relative aspect-3/2 overflow-hidden bg-slate-50">
                    <img
                      src={item.imagePath}
                      alt={language === "en" ? item.titleEn : item.titleAm}
                      className="h-full w-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    
                    {/* Floating Date Overlay */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#0c3527]/95 to-[#134937]/95 text-white backdrop-blur-xs rounded-sm px-3 py-1.5 shadow-sm font-mono flex flex-col items-center justify-center min-w-[54px] border border-amber-300/30">
                      <span className="text-[10px] uppercase font-bold text-amber-200">
                        {item.date.split("-")[1] === "07" ? (language === "en" ? "JUL" : "ሐም") : (language === "en" ? "JUN" : "ሰኔ")}
                      </span>
                      <span className="text-sm font-bold tracking-tight">
                        {item.date.split("-")[2]}
                      </span>
                    </div>

                    {/* Floating Category Badge */}
                    <span className="absolute bottom-4 left-4 rounded-sm bg-white text-[#0c3527] border border-[#0c3527]/15 font-mono text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 shadow-xs z-10">
                      {language === "en" ? item.categoryEn : item.categoryAm}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      {/* Meta info */}
                      <div className="flex items-center text-slate-400 font-mono text-[9px] uppercase tracking-wider mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-slate-400" />
                          {language === "en" ? item.formattedDateEn : item.formattedDateAm}
                        </span>
                      </div>

                      <h3 className="font-serif font-light text-lg sm:text-xl text-slate-900 tracking-tight mb-2 group-hover:text-[#0c3527] transition duration-150">
                        {language === "en" ? item.titleEn : item.titleAm}
                      </h3>
                      
                      <p className="font-sans font-light text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">
                        {language === "en" ? item.descEn : item.descAm}
                      </p>
                    </div>

                    {/* Action Footer */}
                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto">
                      <span className="text-[10px] font-mono uppercase text-[#0c3527] font-bold">
                        {language === "en" ? "Read full recap" : "ሙሉ ማጠቃለያ አንብብ"}
                      </span>
                      <span className="text-[#0c3527] group-hover:translate-x-1 transition-transform duration-200">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 max-w-lg mx-auto bg-white border border-slate-200 rounded-xl px-6 mb-16" id="gallery-empty-state">
            <ImageIcon className="h-10 w-10 text-slate-300 mx-auto mb-4" />
            <h3 className="font-serif text-lg text-slate-800 font-medium">
              {language === "en" ? "No service logs found" : "ምንም የአገልግሎት መዛግብት አልተገኙም"}
            </h3>
            <p className="font-sans text-xs text-slate-500 mt-2">
              {language === "en" 
                ? "Try resetting your search query or selecting a different timeline option to explore our services."
                : "እባክዎን የፍለጋ ቃልዎን ያስተካክሉ ወይም ሌላ የጊዜ ሰሌዳ አማራጭን በመምረጥ አገልግሎቶቻችንን ያስሱ።"}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDateFilter("all");
                setSelectedCategoryFilter("all");
              }}
              className="mt-6 px-4 py-2 bg-[#0c3527] text-white rounded-sm text-xs font-semibold cursor-pointer hover:bg-[#134937] transition"
              id="gallery-reset-search-btn"
            >
              {language === "en" ? "Clear All Filters" : "ሁሉንም ማጣሪያዎች አጽዳ"}
            </button>
          </div>
        )}

        {/* Redirect prompt for fellowship gallery */}
        {onViewActivities && (
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto p-6 rounded-xl border border-[#0c3527]/15 bg-white text-center shadow-xs" id="schedule-redirect-footer">
            <h4 className="font-serif font-light text-base text-[#08261c] mb-1">
              {language === "en" ? "Looking for all Service Chronicles?" : "ሁሉንም የአገልግሎት ታሪኮችን መመልከት ይፈልጋሉ?"}
            </h4>
            <p className="font-sans text-xs font-light text-slate-500 max-w-lg mb-4">
              {language === "en"
                ? "Visit our expanded Fellowship Gallery to filter through all recent events, read focus scriptures, and view full highlights."
                : "ሁሉንም የቅርብ ጊዜ ክስተቶች ለማጣራት፣ የትኩረት ጥቅሶችን ለማንበብ እና ሙሉ ዋና ዋና ነጥቦችን ለመመልከት የተስፋፋውን የሕብረት ማዕከለ-ስዕላት ይጎብኙ።"}
            </p>
            <button
              onClick={() => onViewActivities?.()}
              className="group px-6 py-2.5 rounded-sm bg-gradient-to-r from-[#0c3527] via-[#134937] to-[#0c3527] hover:from-[#134937] hover:to-[#1a5e47] text-white text-xs font-semibold tracking-wide transition duration-150 flex items-center gap-2 cursor-pointer shadow-xs"
              id="gallery-schedules-redirect-btn"
            >
              <span>{language === "en" ? "Go to Fellowship Gallery" : "ወደ ሕብረት ማዕከለ-ስዕላት ይሂዱ"}</span>
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </button>
          </div>
        )}
      </div>

    </section>
  );
}
