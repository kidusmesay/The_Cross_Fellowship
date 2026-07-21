/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check } from "lucide-react";
import { Language, translations } from "../types";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialInterest: "worship" | "missions" | "both" | "other";
}

export default function ContactModal({
  isOpen,
  onClose,
  language,
  initialInterest,
}: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(initialInterest);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const t = translations[language];

  // Sync initial interest when it changes or when modal opens
  useEffect(() => {
    if (isOpen) {
      setInterest(initialInterest);
      setStatus("idle");
    }
  }, [isOpen, initialInterest]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate backend submission
    setTimeout(() => {
      setStatus("success");
      // Clear inputs
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="contact-modal-wrapper"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px]"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-xl bg-white p-6 shadow-xl border border-slate-200 md:p-8"
            id="contact-modal-body"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-sm p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
              id="close-modal-btn"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {status === "success" ? (
              // Success Screen
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
                id="success-message-container"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-sm bg-emerald-50 text-emerald-600">
                  <Check className="h-7 w-7 stroke-[3px]" />
                </div>
                <h3 className="mb-2 font-serif font-light text-2xl text-slate-900">
                  {language === "en" ? "Connection Sent!" : "የመገናኛ መልዕክት ተልኳል!"}
                </h3>
                <p className="max-w-xs text-sm text-slate-500 font-light leading-relaxed">
                  {t.formSuccess}
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 rounded-sm bg-slate-800 px-6 py-2.5 text-sm font-medium text-white shadow-xs hover:bg-slate-700 transition duration-200 cursor-pointer"
                  id="success-close-btn"
                >
                  {language === "en" ? "Close Window" : "መስኮቱን ዝጋ"}
                </button>
              </motion.div>
            ) : (
              // Contact Form
              <div id="contact-form-container">
                <h2 className="font-serif font-light text-2xl tracking-tight text-slate-900 pr-8">
                  {t.contactHeader}
                </h2>
                <p className="mt-2 text-sm text-slate-500 font-light leading-relaxed">
                  {t.contactSub}
                </p>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest mb-1.5">
                      {t.formName} *
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-sm border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-slate-400 focus:outline-hidden transition"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === "en" ? "e.g. Sarah Jenkins" : "ምሳሌ፡ ሳራ ጄንኪንስ"}
                      required
                      id="input-name"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest mb-1.5">
                      {t.formEmail} *
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-sm border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-slate-400 focus:outline-hidden transition"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      required
                      id="input-email"
                    />
                  </div>

                  {/* Interest field */}
                  <div>
                    <label className="block text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest mb-1.5">
                      {t.formInterest}
                    </label>
                    <select
                      className="w-full rounded-sm border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 focus:bg-white focus:border-slate-400 focus:outline-hidden transition appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095a17.6%2017.6%200%200%200%205.4-12.8c0-5-1.8-9.3-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px] bg-[right_1.25rem_center] bg-no-repeat cursor-pointer"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value as any)}
                      id="input-interest"
                    >
                      <option value="worship">{t.interestWorship}</option>
                      <option value="missions">{t.interestMissions}</option>
                      <option value="both">{t.interestBoth}</option>
                      <option value="other">{t.interestOther}</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest mb-1.5">
                      {t.formMessage} *
                    </label>
                    <textarea
                      rows={3}
                      className="w-full rounded-sm border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-slate-400 focus:outline-hidden transition resize-none"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        language === "en"
                          ? "Write your message or question here..."
                          : "መልዕክትዎን ወይም ጥያቄዎን እዚህ ይጻፉ..."
                      }
                      required
                      id="input-message"
                    />
                  </div>

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-rose-600 font-medium"
                      id="contact-modal-error"
                    >
                      {t.formError}
                    </motion.p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 w-full rounded-sm bg-slate-800 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition disabled:opacity-50 flex items-center justify-center cursor-pointer shadow-sm"
                    id="submit-modal-btn"
                  >
                    {status === "submitting" ? (
                      <div className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>
                          {language === "en" ? "Sending..." : "በመላክ ላይ..."}
                        </span>
                      </div>
                    ) : (
                      t.formSubmit
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
