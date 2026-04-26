'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Locale, translations } from '@/lib/i18n';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ru');

  useEffect(() => {
    const value = localStorage.getItem('placehub_locale');
    if (value === 'ru' || value === 'en') {
      setLocale(value);
    }
  }, []);

  const handleSetLocale = (value: Locale) => {
    setLocale(value);
    localStorage.setItem('placehub_locale', value);
  };

  const contextValue = useMemo(() => ({ locale, setLocale: handleSetLocale }), [locale]);

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  const t = translations[context.locale];

  return { ...context, t };
}
