"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation, type Locale } from "@/i18n";

const languages: { code: Locale; labelKey: string }[] = [
  { code: "en", labelKey: "langSwitcher.en" },
  { code: "ko", labelKey: "langSwitcher.ko" },
  { code: "vi", labelKey: "langSwitcher.vi" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { locale, setLocale, t } = useTranslation();

  // Focus the active language item when dropdown opens
  useEffect(() => {
    if (open) {
      const activeIndex = languages.findIndex((l) => l.code === locale);
      setFocusedIndex(activeIndex);
      // Defer focus to allow the animation to render the element
      requestAnimationFrame(() => {
        itemRefs.current[activeIndex]?.focus();
      });
    } else {
      setFocusedIndex(-1);
    }
  }, [open, locale]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const closeAndReturnFocus = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Keyboard navigation within the dropdown
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          const next = (focusedIndex + 1) % languages.length;
          setFocusedIndex(next);
          itemRefs.current[next]?.focus();
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          const prev =
            (focusedIndex - 1 + languages.length) % languages.length;
          setFocusedIndex(prev);
          itemRefs.current[prev]?.focus();
          break;
        }
        case "Home": {
          e.preventDefault();
          setFocusedIndex(0);
          itemRefs.current[0]?.focus();
          break;
        }
        case "End": {
          e.preventDefault();
          const last = languages.length - 1;
          setFocusedIndex(last);
          itemRefs.current[last]?.focus();
          break;
        }
        case "Escape": {
          e.preventDefault();
          closeAndReturnFocus();
          break;
        }
        case "Tab": {
          // Close dropdown on Tab to allow natural tab flow out
          closeAndReturnFocus();
          break;
        }
      }
    },
    [focusedIndex, closeAndReturnFocus],
  );

  // Handle trigger button keyboard interaction
  const handleTriggerKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setOpen(true);
      }
    },
    [],
  );

  return (
    <div ref={ref} className="relative">
      <button
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        onKeyDown={handleTriggerKeyDown}
        className="flex items-center justify-center w-9 h-9 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all"
        aria-label={t("langSwitcher.label")}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <i className="fa-solid fa-globe text-base" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            aria-label={t("langSwitcher.label")}
            aria-activedescendant={
              focusedIndex >= 0
                ? `lang-option-${languages[focusedIndex].code}`
                : undefined
            }
            onKeyDown={handleKeyDown}
            className="absolute right-0 top-full mt-2 w-40 bg-navy/95 backdrop-blur-lg border border-white/10 shadow-xl overflow-hidden z-50"
          >
            {languages.map((lang, index) => {
              const isActive = locale === lang.code;
              return (
                <button
                  key={lang.code}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  id={`lang-option-${lang.code}`}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setLocale(lang.code);
                    closeAndReturnFocus();
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "text-steel-light bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="flex-1 text-left">{t(lang.labelKey)}</span>
                  {isActive && (
                    <i
                      className="fa-solid fa-check text-xs text-steel-light"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
