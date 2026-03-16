"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSwitcher() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);

  // Currently only English is supported
  // To add more languages, extend this and configure next-intl routing
  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    // Future: { code: "fr", label: "Français", flag: "🇫🇷" },
  ] as const;

  const currentLang = languages[0]; // Always English for now

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-xs font-medium tracking-[0.15em] uppercase text-brand-text-muted hover:text-brand-red transition-colors"
        aria-label={t("language")}
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-brand-dark border border-white/10 rounded-sm shadow-lg z-50 min-w-[140px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  // Currently a no-op since only English is available
                  // Future: router.push(`/${lang.code}${pathname}`)
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-brand-text-muted hover:text-white hover:bg-brand-red/10 transition-colors flex items-center gap-2"
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
