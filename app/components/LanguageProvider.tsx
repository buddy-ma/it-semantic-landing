'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation objects
const translations = {
  de: {
    // Header
    'nav.services': 'Leistungen',
    'nav.caseStudies': 'Fallstudien',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'header.cta': 'Kostenloses Erstgespräch',
    'header.ctaShort': 'Erstgespräch',
    'header.menuOpen': 'Hauptmenü öffnen',
    
    // Hero Section
    'hero.title': 'Ihr IT-Partner für digitale Transformation',
    'hero.subtitle': 'Wir unterstützen innovative Unternehmen dabei, sichere, skalierbare IT-Lösungen mit Daten, KI und Cloud-Technologien zu gestalten und umzusetzen.',
    'hero.cta': 'Kostenloses Erstgespräch buchen',
    'hero.ctaSecondary': 'Unsere Leistungen',
    
    // Services
    'services.title': 'Unsere Leistungen',
    'services.subtitle': 'Wir bieten umfassende IT-Beratung und -Umsetzung für Ihre digitale Transformation',
    
    // Case Studies
    'caseStudies.title': 'Erfolgsgeschichten',
    'caseStudies.subtitle': 'Entdecken Sie, wie wir Unternehmen bei ihrer digitalen Transformation unterstützt haben',
    
    // Why Us
    'whyUs.title': 'Warum IT Semantic?',
    'whyUs.subtitle': 'Wir kombinieren technische Expertise mit strategischem Denken für nachhaltige Lösungen',
    
    // Testimonials
    'testimonials.title': 'Was unsere Kunden sagen',
    'testimonials.subtitle': 'Erfahren Sie, wie wir anderen Unternehmen geholfen haben',
    
    // CTA
    'cta.title': 'Lassen Sie uns über Ihr Projekt sprechen',
    'cta.subtitle': 'In einem unverbindlichen Erstgespräch zeigen wir Ihnen, wie Technologie Ihr Geschäft voranbringen kann.',
    'cta.button': 'Kostenloses Erstgespräch vereinbaren',
    
    // Footer
    'footer.company': 'Unternehmen',
    'footer.services': 'Leistungen',
    'footer.contact': 'Kontakt',
    'footer.legal': 'Rechtliches',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.caseStudies': 'Case Studies',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'header.cta': 'Free Consultation',
    'header.ctaShort': 'Consultation',
    'header.menuOpen': 'Open main menu',
    
    // Hero Section
    'hero.title': 'Your IT Partner for Digital Transformation',
    'hero.subtitle': 'We support innovative companies in designing and implementing secure, scalable IT solutions with data, AI, and cloud technologies.',
    'hero.cta': 'Book Free Consultation',
    'hero.ctaSecondary': 'Our Services',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We provide comprehensive IT consulting and implementation for your digital transformation',
    
    // Case Studies
    'caseStudies.title': 'Success Stories',
    'caseStudies.subtitle': 'Discover how we have supported companies in their digital transformation',
    
    // Why Us
    'whyUs.title': 'Why IT Semantic?',
    'whyUs.subtitle': 'We combine technical expertise with strategic thinking for sustainable solutions',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Learn how we have helped other companies',
    
    // CTA
    'cta.title': 'Let\'s Talk About Your Project',
    'cta.subtitle': 'In a non-binding initial consultation, we\'ll show you how technology can advance your business.',
    'cta.button': 'Schedule Free Consultation',
    
    // Footer
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Imprint',
    'footer.rights': 'All rights reserved.',
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
}

export function LanguageProvider({
  children,
  defaultLanguage = 'de',
  storageKey = 'it-semantic-language',
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    try {
      const storedLanguage = localStorage.getItem(storageKey) as Language;
      if (storedLanguage && (storedLanguage === 'de' || storedLanguage === 'en')) {
        setLanguageState(storedLanguage);
      }
    } catch (error) {
      console.warn('Failed to load language from localStorage:', error);
    }
  }, [storageKey]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    try {
      localStorage.setItem(storageKey, lang);
      // Update document lang attribute
      document.documentElement.lang = lang;
    } catch (error) {
      console.warn('Failed to save language to localStorage:', error);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: defaultLanguage, setLanguage: () => {}, t: (key) => key }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}