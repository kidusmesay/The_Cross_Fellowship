/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Calendar,
  BookOpen,
  Search,
  X,
  ChevronRight,
  Sparkles,
  Camera,
  Layers,
  Award
} from "lucide-react";
import { Language, translations, galleryItems, GalleryItem } from "../types";

// Import the generated images
import worshipImg from "../assets/images/worship_team_photo_1781712491371.jpg";
import missionImg from "../assets/images/mission_team_photo_1781712507579.jpg";
import bibleStudyImg from "../assets/images/bible_study_group_1784647578299.jpg";
import youthImg from "../assets/images/youth_fellowship_1784647593564.jpg";
import prayerImg from "../assets/images/prayer_group_fellowship_1784648210064.jpg";
import coffeeImg from "../assets/images/fellowship_coffee_tea_1784648224038.jpg";

interface WeeklyActivitiesProps {
  language: Language;
  onBackToHome: () => void;
  onOpenContact: (interest: "worship" | "missions" | "both" | "other") => void;
  initialSelectedId?: string | null;
  onClearInitialId?: () => void;
}

type DateFilter = "all" | "july-2026" | "june-2026";
type CategoryFilter = "all" | "worship" | "outreach" | "bible" | "youth";

export default function WeeklyActivities({
  language,
  onBackToHome,
  onOpenContact,
  initialSelectedId,
  onClearInitialId,
}: WeeklyActivitiesProps) {
  const t = translations[language];

  // Load the centralized gallery items
  const allItems = useMemo(() => {
    return galleryItems(worshipImg, missionImg, bibleStudyImg, youthImg, prayerImg, coffeeImg);
  }, []);

  // UI state for search, filters, layout and detail view
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDateFilter, setSelectedDateFilter] = useState<DateFilter>("all");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<CategoryFilter>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Auto-open requested item if coming from Home redirection
  useEffect(() => {
    if (initialSelectedId) {
      const match = allItems.find((item) => item.id === initialSelectedId);
      if (match) {
        setSelectedItem(match);
      }
      onClearInitialId?.();
    }
  }, [initialSelectedId]);

  // Dynamic filter logic
  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      // 1. Search Query matching
      const matchesSearch =
        item.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.titleAm.includes(searchQuery) ||
        item.descEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.descAm.includes(searchQuery) ||
        item.scriptureRefEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.scriptureRefAm.includes(searchQuery) ||
        item.categoryEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryAm.includes(searchQuery);

      // 2. Date Timeline matching
      let matchesDate = true;
      if (selectedDateFilter === "july-2026") {
        matchesDate = item.date.startsWith("2026-07");
      } else if (selectedDateFilter === "june-2026") {
        matchesDate = item.date.startsWith("2026-06");
      }

      // 3. Category matching
      let matchesCategory = true;
      if (selectedCategoryFilter === "worship") {
        matchesCategory = item.id === "gal-1";
      } else if (selectedCategoryFilter === "outreach") {
        matchesCategory = item.id === "gal-2";
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
    { id: "all", labelEn: "All Ministries", labelAm: "ሁሉም አገልግሎቶች" },
    { id: "worship", labelEn: "Worship & Praise", labelAm: "አምልኮና ምስጋና" },
    { id: "outreach", labelEn: "Outreach & Mission", labelAm: "ማህበረሰብ አገልግሎት" },
    { id: "bible", labelEn: "Bible Study", labelAm: "መጽሐፍ ቅዱስ ጥናት" },
    { id: "youth", labelEn: "Youth Gatherings", labelAm: "የወጣቶች ሕብረት" },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-slate-800 pb-24 pt-24 sm:pt-28" id="fellowship-gallery-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Breadcrumb Row */}
        <div className="max-w-5xl mx-auto mb-8">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white border border-slate-200/85 text-slate-600 hover:text-slate-950 transition duration-150 cursor-pointer shadow-2xs"
            id="back-home-btn"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span className="text-xs font-semibold">
              {language === "en" ? "Back to Home" : "ወደ ዋናው ገጽ ይመለሱ"}
            </span>
          </button>
        </div>

        {/* Elegant Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white text-slate-700 border border-slate-200/80 mb-4 shadow-xs animate-fade-in">
            <Camera className="h-3.5 w-3.5 text-slate-500" />
            <span className="font-mono text-[9px] uppercase font-bold tracking-widest">
              {language === "en" ? "Historical Service Records" : "የታሪክ አገልግሎት መዛግብት"}
            </span>
          </div>
          <h1 className="font-serif font-light text-4xl sm:text-5xl tracking-tight text-slate-900">
            {language === "en" ? "Fellowship Gallery" : "የሕብረት ማዕከለ-ስዕላት"}
          </h1>
          <p className="mt-4 font-sans font-light text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {language === "en"
              ? "A chronologically documented archive of our bilingual gatherings, street missions, and youth fellowship hours. Explore recaps, focus scriptures, and testimonies."
              : "የእሁድ ጠዋት አምልኮዎቻችን፣ የጎዳና ላይ የስርጭት አገልግሎቶቻችን እና የወጣቶች የህብረት ሰዓቶች በቅደም ተከተል የተቀመጡበት ማህደር። የእግዚአብሔርን ስራ፣ የትኩረት ጥቅሶችን እና ምስክርነቶችን ያስሱ።"}
          </p>
        </div>

        {/* Search, Date Filters, and Category Filters Board */}
        <div className="bg-white border border-slate-200 shadow-xs rounded-xl p-6 mb-12 max-w-5xl mx-auto" id="gallery-explorer-board">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Real-time search bar */}
            <div className="lg:col-span-4 relative" id="explorer-search-input-container">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === "en" ? "Search memories, scriptures, titles..." : "ትውስታዎችን፣ ጥቅሶችን፣ አርዕስቶችን ይፈልጉ..."}
                className="w-full pl-9 pr-4 py-2.5 rounded-md border border-slate-200 bg-slate-50/50 text-slate-800 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400"
                id="explorer-search-input"
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
            <div className="lg:col-span-8 flex flex-col gap-2" id="explorer-timeline-filters">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 flex items-center gap-1 shrink-0">
                  <Calendar className="h-3 w-3" />
                  {language === "en" ? "Timeline Month:" : "የጊዜ ሰሌዳ ወር፡"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeDateFilters.map((df) => (
                    <button
                      key={df.id}
                      onClick={() => setSelectedDateFilter(df.id)}
                      className={`px-3 py-1.5 rounded-sm font-sans text-xs transition duration-150 cursor-pointer ${
                        selectedDateFilter === df.id
                          ? "bg-slate-800 text-white font-medium shadow-xs"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60"
                      }`}
                      id={`exp-date-filter-${df.id}`}
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
          <div className="flex flex-wrap items-center gap-3" id="explorer-category-filters">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 flex items-center gap-1 shrink-0">
              <Layers className="h-3 w-3" />
              {language === "en" ? "Service Ministry:" : "የአገልግሎት ዘርፍ፡"}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeCategoryFilters.map((cf) => (
                <button
                  key={cf.id}
                  onClick={() => setSelectedCategoryFilter(cf.id)}
                  className={`px-3.5 py-1.5 rounded-full font-sans text-xs transition duration-150 cursor-pointer ${
                    selectedCategoryFilter === cf.id
                      ? "bg-slate-800 text-white font-medium shadow-xs"
                      : "bg-slate-100/50 text-slate-600 hover:bg-slate-100 border border-transparent"
                  }`}
                  id={`exp-category-filter-${cf.id}`}
                >
                  {language === "en" ? cf.labelEn : cf.labelAm}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic Gallery Grid Layout */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16" id="explorer-gallery-grid">
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
                  onClick={() => setSelectedItem(item)}
                  className="group relative rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer"
                  id={`exp-gallery-item-${item.id}`}
                >
                  {/* Aspect-Ratio Container */}
                  <div className="relative aspect-3/2 overflow-hidden bg-slate-50">
                    <img
                      src={item.imagePath}
                      alt={language === "en" ? item.titleEn : item.titleAm}
                      className="h-full w-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-750 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    
                    {/* Floating Numeric Calendar Date Overlay */}
                    <div className="absolute top-4 left-4 bg-slate-900/95 text-white backdrop-blur-xs rounded-sm px-3 py-1.5 shadow-sm font-mono flex flex-col items-center justify-center min-w-[54px] border border-white/10">
                      <span className="text-[10px] uppercase font-bold text-slate-300">
                        {item.date.split("-")[1] === "07" ? (language === "en" ? "JUL" : "ሐም") : (language === "en" ? "JUN" : "ሰኔ")}
                      </span>
                      <span className="text-sm font-bold tracking-tight">
                        {item.date.split("-")[2]}
                      </span>
                    </div>

                    {/* Floating Service Category Label */}
                    <span className="absolute bottom-4 left-4 rounded-sm bg-white text-slate-900 border border-slate-200/80 font-mono text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 shadow-xs z-10">
                      {language === "en" ? item.categoryEn : item.categoryAm}
                    </span>
                  </div>

                  {/* Card Descriptive details */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      {/* Meta Information line */}
                      <div className="flex items-center justify-between text-slate-400 font-mono text-[9px] uppercase tracking-wider mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-slate-400" />
                          {language === "en" ? item.formattedDateEn : item.formattedDateAm}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 font-semibold">
                          <BookOpen className="h-3 w-3" />
                          {language === "en" ? item.scriptureRefEn : item.scriptureRefAm}
                        </span>
                      </div>

                      <h3 className="font-serif font-light text-lg sm:text-xl text-slate-900 tracking-tight mb-2 group-hover:text-slate-850 transition duration-155">
                        {language === "en" ? item.titleEn : item.titleAm}
                      </h3>
                      
                      <p className="font-sans font-light text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">
                        {language === "en" ? item.descEn : item.descAm}
                      </p>
                    </div>

                    {/* Action indicators */}
                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto">
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                        {language === "en" ? "Read full memory recap" : "ሙሉ ማጠቃለያውን ያንብቡ"}
                      </span>
                      <span className="text-slate-700 group-hover:translate-x-1 transition-transform duration-200">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Custom Empty State */
          <div className="text-center py-20 max-w-lg mx-auto bg-white border border-slate-200 rounded-xl px-6 mb-16" id="explorer-empty-state">
            <Camera className="h-10 w-10 text-slate-300 mx-auto mb-4" />
            <h3 className="font-serif text-lg text-slate-800 font-medium">
              {language === "en" ? "No service records found" : "ምንም የአገልግሎት መዛግብት አልተገኙም"}
            </h3>
            <p className="font-sans text-xs text-slate-500 mt-2">
              {language === "en" 
                ? "Try checking spelling, adjusting your filters, or resetting queries to explore other records."
                : "እባክዎን የፊደል አጻጻፍዎን ያረጋግጡ፣ ማጣሪያዎችዎን ያስተካክሉ፣ ወይም ወደ ሌሎች መዛግብት ለመመለስ ዳግም ያስጀምሩ።"}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDateFilter("all");
                setSelectedCategoryFilter("all");
              }}
              className="mt-6 px-4 py-2 bg-slate-800 text-white rounded-sm text-xs font-semibold cursor-pointer hover:bg-slate-700 transition"
              id="explorer-reset-btn"
            >
              {language === "en" ? "Reset All Filters" : "ሁሉንም ማጣሪያዎች አጽዳ"}
            </button>
          </div>
        )}

        {/* BOTTOM CALL TO ACTION: Memory Sharing / Connecting */}
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto p-8 rounded-xl border border-slate-200 bg-white text-center shadow-xs" id="share-photos-cta-footer">
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-slate-50 border border-slate-200 mb-4">
            <Sparkles className="h-5 w-5 text-slate-600" />
          </div>
          <h4 className="font-serif font-light text-xl text-slate-900 mb-2">
            {language === "en" ? "Want to Join Our Next Service or Outreach?" : "በቀጣዩ አገልግሎታችን ወይም የሚሲዮን ሥራችን ላይ መሳተፍ ይፈልጋሉ?"}
          </h4>
          <p className="font-sans text-xs font-light text-slate-500 max-w-xl mb-6 leading-relaxed">
            {language === "en"
              ? "The Cross Fellowship thrives on serving together in worship and local community missions. Get connected to find out about coordinates for upcoming service operations or share your testimony."
              : "የመስቀል ሕብረት በአምልኮ እና በአካባቢ ማህበረሰብ አገልግሎት ውስጥ በጋራ በመስራት ላይ ያድጋል። ለቀጣይ የአገልግሎት ተልዕኮዎች ለመሳተፍ ወይም ምስክርነትዎን ለማካፈል ዛሬውኑ ይገናኙን።"}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => onOpenContact("both")}
              className="px-6 py-2.5 rounded-sm bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold tracking-wide transition duration-150 cursor-pointer shadow-2xs"
              id="cta-join-team-btn"
            >
              {language === "en" ? "Volunteer / Join the Teams" : "በፈቃደኝነት ያገልግሉ / ቡድኖቹን ይቀላቀሉ"}
            </button>
            <button
              onClick={() => onOpenContact("other")}
              className="px-6 py-2.5 rounded-sm bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold tracking-wide transition duration-150 cursor-pointer border border-slate-200"
              id="cta-inquire-btn"
            >
              {language === "en" ? "Share a Testimony" : "ምስክርነት ያጋሩ"}
            </button>
          </div>
        </div>

      </div>

      {/* FULL RECORD MODAL VIEW */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto" id="explorer-detail-modal">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            />

            {/* Modal Body centering wrapper */}
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8 relative z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200"
              >
                {/* Hero Photo inside Modal */}
                <div className="relative aspect-16/9 sm:aspect-21/9 bg-slate-100">
                  <img
                    src={selectedItem.imagePath}
                    alt={language === "en" ? selectedItem.titleEn : selectedItem.titleAm}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Category Tag */}
                  <span className="absolute top-4 left-4 bg-slate-900 text-white font-mono text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 shadow-sm border border-white/10 rounded-sm">
                    {language === "en" ? selectedItem.categoryEn : selectedItem.categoryAm}
                  </span>

                  {/* Close floating button */}
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full shadow-md backdrop-blur-xs border border-white/10 transition cursor-pointer"
                    aria-label="Close"
                    id="modal-close-btn"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Modal Info content */}
                <div className="p-6 sm:p-8">
                  {/* Chronology info banner */}
                  <div className="flex flex-wrap items-center gap-3 text-slate-400 font-mono text-[10px] uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1.5 font-bold text-slate-500">
                      <Calendar className="h-4.5 w-4.5" />
                      {language === "en" ? selectedItem.formattedDateEn : selectedItem.formattedDateAm}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span>{selectedItem.date}</span>
                  </div>

                  {/* Headline Title */}
                  <h3 className="font-serif font-light text-2xl sm:text-3xl text-slate-900 tracking-tight mb-4">
                    {language === "en" ? selectedItem.titleEn : selectedItem.titleAm}
                  </h3>

                  {/* Focus Scripture Verse reading block */}
                  <div className="bg-slate-50 border-l-2 border-slate-800 p-4 rounded-r-md mb-6 flex gap-3.5 items-start">
                    <BookOpen className="h-5 w-5 text-slate-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-400 mb-1">
                        {language === "en" ? "Focus Scripture Reading" : "የትኩረት የመጽሐፍ ቅዱስ ንባብ"}
                      </span>
                      <strong className="block font-serif text-sm text-slate-900 font-medium mb-1">
                        {language === "en" ? selectedItem.scriptureRefEn : selectedItem.scriptureRefAm}
                      </strong>
                    </div>
                  </div>

                  {/* Detailed Description recap paragraph */}
                  <div className="prose prose-slate max-w-none text-slate-600 font-sans font-light text-sm leading-relaxed mb-6">
                    <p>{language === "en" ? selectedItem.descEn : selectedItem.descAm}</p>
                  </div>

                  {/* Captured Moments Sub-Gallery Image Holders */}
                  <div className="border-t border-slate-100 pt-6 mb-6">
                    <h4 className="font-serif font-normal text-slate-900 text-sm mb-4 flex items-center gap-2">
                      <Camera className="h-4 w-4 text-slate-700" />
                      <span>{language === "en" ? "Captured Fellowship Moments" : "የተቀረጹ የሕብረት ትውስታዎች"}</span>
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedItem.recapImages.map((imgUrl, index) => (
                        <div key={index} className="relative aspect-4/3 rounded-md overflow-hidden bg-slate-100 border border-slate-200 shadow-3xs group/recap-img">
                          <img
                            src={imgUrl}
                            alt={`Recap moment ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/recap-img:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/recap-img:bg-black/10 transition-colors duration-200" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bulleted Highlighting achievements / points */}
                  <div className="border-t border-slate-100 pt-6">
                    <h4 className="font-serif font-normal text-slate-900 text-sm mb-4 flex items-center gap-2">
                      <Award className="h-4 w-4 text-slate-700" />
                      <span>{language === "en" ? "Service Highlights & Impact" : "የአገልግሎት ዋና ዋና ነጥቦች እና በጎ ተጽዕኖ"}</span>
                    </h4>

                    <ul className="space-y-3">
                      {(language === "en" ? selectedItem.highlightsEn : selectedItem.highlightsAm).map((hl, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-slate-600 font-sans font-light text-xs leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-800 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom close CTA */}
                  <div className="border-t border-slate-100 pt-6 mt-8 flex justify-end">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="px-5 py-2 rounded-sm bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs tracking-wide transition cursor-pointer"
                      id="modal-footer-close-btn"
                    >
                      {language === "en" ? "Close Recap" : "ማጠቃለያውን ዝጋ"}
                    </button>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
