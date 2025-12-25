import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (ar: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (ar: string, en: string) => {
    return language === 'ar' ? ar : en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
