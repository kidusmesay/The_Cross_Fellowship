/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Wings from "./components/Wings";
import ScriptureRotator from "./components/ScriptureRotator";
import Gallery from "./components/Gallery";
import WeeklyActivities from "./components/WeeklyActivities";
import ContactModal from "./components/ContactModal";
import Logo from "./components/Logo";
import { Language, translations } from "./types";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [currentPage, setCurrentPage] = useState<"home" | "activities">("home");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState<"worship" | "missions" | "both" | "other">("other");
  const [selectedGalleryId, setSelectedGalleryId] = useState<string | null>(null);

  const safeScrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      try {
        window.scrollTo(0, 0);
      } catch (err) {
        // no-op
      }
    }
  };

  const handleOpenContact = (interest: "worship" | "missions" | "both" | "other") => {
    setModalInterest(interest);
    setIsContactOpen(true);
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-brand-bg text-slate-800 selection:bg-slate-200 selection:text-slate-900 selection:font-sans">
      {/* 1. Header Navigation */}
      <Header
        language={language}
        setLanguage={setLanguage}
        onOpenContact={handleOpenContact}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Dynamic View/Page Routing Switcher */}
      {currentPage === "home" ? (
        <>
          {/* 2. Hero Section */}
          <Hero
            language={language}
            onOpenContact={handleOpenContact}
          />

          {/* 3. Wings Section (Worship Team and Mission Team Highlights) */}
          <Wings
            language={language}
            onOpenContact={handleOpenContact}
          />

          {/* 4. Scripture of the day Carousel */}
          <ScriptureRotator language={language} />

          {/* 5. Photos Gallery of Fellowship life (Teaser) */}
          <Gallery
            language={language}
            onViewActivities={(selectedId) => {
              if (selectedId) {
                setSelectedGalleryId(selectedId);
              } else {
                setSelectedGalleryId(null);
              }
              setCurrentPage("activities");
              safeScrollToTop();
            }}
          />
        </>
      ) : (
        /* Render full featured Weekly Activities & expanded gallery sub-page */
        <WeeklyActivities
          language={language}
          initialSelectedId={selectedGalleryId}
          onClearInitialId={() => setSelectedGalleryId(null)}
          onBackToHome={() => {
            setCurrentPage("home");
            safeScrollToTop();
          }}
          onOpenContact={handleOpenContact}
        />
      )}

      {/* 6. Footer Section with Matthew 18:20 scriptural quote */}
      <footer className="bg-white border-t border-slate-200/80 py-16 sm:py-20" id="app-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Symmetrical logo bottom display */}
          <div className="flex justify-center mb-8" id="footer-logo">
            <Logo iconOnly={false} className="h-10" light={false} />
          </div>

          {/* Inspirational verse */}
          <div className="max-w-2xl mx-auto mb-10" id="footer-verse-container">
            <p className="font-serif text-base sm:text-lg text-slate-700 italic leading-relaxed">
              {t.footerQuote}
            </p>
          </div>

          {/* Boundaries Divider */}
          <div className="w-16 h-px bg-slate-200 mx-auto mb-8" />

          {/* Copyright details */}
          <div className="flex items-center justify-center text-xs font-mono tracking-wider uppercase text-slate-400 max-w-4xl mx-auto">
            <span>
              &copy; {new Date().getFullYear()} {t.brandName}.
            </span>
          </div>
        </div>
      </footer>

      {/* 7. Action Connect Modal Form Backdrop Popup */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        language={language}
        initialInterest={modalInterest}
      />
    </div>
  );
}
