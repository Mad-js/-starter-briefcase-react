import React, { createContext, useState, ReactNode, useEffect, useMemo, useCallback } from 'react';
import en from '../assets/i18n/en.json';
import es from '../assets/i18n/es.json';

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en,
  es,
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  translations: {
    [key: string]: string;
  };
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const initialLanguage = localStorage.getItem('language') ?? 'es';
  const [language, setLanguage] = useState<string>(initialLanguage);

  const changeLanguage = useCallback((lang: string) => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
  }, []);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && storedLanguage !== language) {
      setLanguage(storedLanguage);
    }
  }, [language]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage: changeLanguage,
    translations: translations[language] || {},
  }), [language, changeLanguage]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
