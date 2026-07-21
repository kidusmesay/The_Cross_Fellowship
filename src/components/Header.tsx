/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import Logo from "./Logo";
import { Language, translations } from "../types";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenContact: (interest: "worship" | "missions" | "both" | "other") => void;
  currentPage: "home" | "activities";
  setCurrentPage: (page: "home" | "activities") => void;
}

export default function Header({ language, setLanguage, onOpenContact, currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY !== undefined ? window.scrollY : (window.pageYOffset !== undefined ? window.pageYOffset : 0);
      setIsScrolled(scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const safeScrollTo = (options: ScrollToOptions) => {
    try {
      window.scrollTo(options);
    } catch (e) {
      try {
        window.scrollTo(options.left ?? 0, options.top ?? 0);
      } catch (err) {
        // no-op
      }
    }
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const scrollY = window.scrollY !== undefined ? window.scrollY : (window.pageYOffset !== undefined ? window.pageYOffset : 0);
    
    if (currentPage !== "home") {
      setCurrentPage("home");
      // Wait for page state to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + scrollY - headerOffset;
          safeScrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + scrollY - headerOffset;

      safeScrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navigateToHome = () => {
    setIsOpen(false);
    setCurrentPage("home");
    safeScrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToActivities = () => {
    setIsOpen(false);
    setCurrentPage("activities");
    safeScrollTo({ top: 0, behavior: "smooth" });
  };

  const shouldBeSolid = isScrolled || currentPage === "activities";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        shouldBeSolid
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3"
          : "bg-transparent py-5"
      }`}
      id="main-app-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo linkage to top */}
          <button
            onClick={navigateToHome}
            className="cursor-pointer hover:opacity-90 transition duration-200 focus:outline-hidden"
            id="header-logo-container"
          >
            <Logo className="h-10 sm:h-11" light={!shouldBeSolid} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav-menu">
            <button
              onClick={navigateToHome}
              className={`font-sans text-sm font-medium transition cursor-pointer ${
                shouldBeSolid
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t.homeLink}
            </button>
            <button
              onClick={() => scrollToSection("ministries")}
              className={`font-sans text-sm font-medium transition cursor-pointer ${
                shouldBeSolid
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t.ministriesLink}
            </button>
            <button
              onClick={() => scrollToSection("scriptures")}
              className={`font-sans text-sm font-medium transition cursor-pointer ${
                shouldBeSolid
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t.scriptureLink}
            </button>
            <button
              onClick={navigateToActivities}
              className={`font-sans text-sm font-medium transition cursor-pointer ${
                shouldBeSolid
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t.galleryLink}
            </button>

            {/* Bilingual Switcher */}
            <div className={`flex items-center gap-1.5 border-l pl-6 ml-2 ${
              shouldBeSolid ? "border-slate-200" : "border-white/20"
            }`}>
              <Globe className={`h-4 w-4 ${shouldBeSolid ? "text-slate-400" : "text-white/70"}`} />
              <button
                onClick={() => setLanguage(language === "en" ? "am" : "en")}
                className={`font-sans text-xs font-semibold uppercase px-2 py-1 rounded-sm transition cursor-pointer ${
                  shouldBeSolid
                    ? "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                id="language-toggle-btn"
                title={language === "en" ? "ወደ አማርኛ ለመቀየር" : "Switch to English"}
              >
                {language === "en" ? "AM" : "EN"}
              </button>
            </div>

            {/* Call to action "Join Us" */}
            <button
              onClick={() => onOpenContact("other")}
              className={`rounded-sm px-5 py-2 text-sm font-semibold transition shadow-sm cursor-pointer ${
                shouldBeSolid
                  ? "bg-slate-800 text-white hover:bg-slate-700"
                  : "bg-white text-slate-900 hover:bg-slate-100"
              }`}
              id="cta-connect-btn"
            >
              {t.contactLink}
            </button>
          </nav>

          {/* Mobile Navigation controls */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Language switch button */}
            <button
              onClick={() => setLanguage(language === "en" ? "am" : "en")}
              className={`font-sans text-xs font-bold uppercase px-2 py-1 rounded-sm transition flex items-center gap-1 ${
                shouldBeSolid
                  ? "text-slate-600 hover:text-slate-900 bg-slate-100"
                  : "text-white hover:text-white bg-white/10"
              }`}
            >
              <Globe className="h-3 w-3" />
              <span>{language === "en" ? "AM" : "EN"}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1 transition focus:outline-hidden ${
                shouldBeSolid ? "text-slate-600 hover:text-slate-900" : "text-white hover:text-white"
              }`}
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          className="md:hidden mt-2 border-b border-slate-200 bg-white shadow-sm animate-fade-in"
          id="mobile-nav-drawer"
        >
          <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
            <button
              onClick={navigateToHome}
              className="text-left py-2 font-sans font-medium text-slate-600 hover:text-slate-950 border-b border-slate-100"
            >
              {t.homeLink}
            </button>
            <button
              onClick={() => scrollToSection("ministries")}
              className="text-left py-2 font-sans font-medium text-slate-600 hover:text-slate-950 border-b border-slate-100"
            >
              {t.ministriesLink}
            </button>
            <button
              onClick={() => scrollToSection("scriptures")}
              className="text-left py-2 font-sans font-medium text-slate-600 hover:text-slate-950 border-b border-slate-100"
            >
              {t.scriptureLink}
            </button>
            <button
              onClick={navigateToActivities}
              className="text-left py-2 font-sans font-medium text-slate-600 hover:text-slate-950 border-b border-slate-100"
            >
              {t.galleryLink}
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenContact("other");
              }}
              className="w-full rounded-sm bg-slate-800 py-3 text-center text-sm font-semibold text-white mt-2 hover:bg-slate-700 transition"
              id="mobile-cta-btn"
            >
              {t.contactLink}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
