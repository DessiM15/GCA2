"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import en from "./locales/en";
import ko from "./locales/ko";
import vi from "./locales/vi";

export type Locale = "en" | "ko" | "vi";

const dictionaries: Record<Locale, Record<string, string>> = { en, ko, vi };

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, fallback?: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Read saved locale from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale") as Locale | null;
      if (saved && dictionaries[saved]) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch {
      // localStorage unavailable
    }
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: string, fallback?: string): string => {
      return dictionaries[locale][key] || dictionaries.en[key] || fallback || key;
    },
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
