"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "de" | "en";

type TranslationKey = keyof typeof translations.de;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation objects
const translations = {
  de: {
    // Header
    "nav.services": "Leistungen",
    "nav.caseStudies": "Fallstudien",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "header.cta": "Kostenloses Erstgespräch",
    "header.ctaShort": "Erstgespräch",
    "header.menuOpen": "Hauptmenü öffnen",

    // Hero Section
    "hero.welcome": "Willkommen bei IT Semantic",
    "hero.titlePart1": "Wir verändern",
    "hero.titlePart2": "die Art, wie Menschen sich vernetzen.",
    "hero.subtitle":
      "Anime aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.",
    "hero.cta": "Kostenloses Erstgespräch",
    "hero.ctaSecondary": "Unsere Leistungen",
    "hero.image1Alt": "Team-Zusammenarbeit",
    "hero.image2Alt": "Moderner Arbeitsplatz",
    "hero.stats.projects": "150+",
    "hero.stats.projectsLabel": "Abgeschlossene Projekte",
    "hero.stats.users": "2,5M+",
    "hero.stats.usersLabel": "Aktive Nutzer",
    "hero.testimonial.title": "Schneller & Einfacher Prozess",
    "hero.testimonial.author": "Sarah Johnson",
    "hero.rating.score": "4,9",
    "hero.rating.reviews": "5.000+ Bewertungen",

    // Services
    "services.title": "Unsere Leistungen",
    "services.subtitle":
      "Wir bieten umfassende IT-Beratung und -Umsetzung für Ihre digitale Transformation",
    "services.ai.title": "KI & Machine Learning",
    "services.ai.description":
      "Intelligente Algorithmen und ML-Modelle für datengetriebene Entscheidungen und Automatisierung.",
    "services.ai.features.predictive": "Predictive Analytics",
    "services.ai.features.vision": "Computer Vision",
    "services.ai.features.nlp": "NLP-Lösungen",
    "services.ai.features.mlops": "MLOps",
    "services.cloud.title": "Cloud-Lösungen",
    "services.cloud.description":
      "Skalierbare, sichere Cloud-Infrastrukturen für moderne Unternehmensanwendungen.",
    "services.cloud.features.multiCloud": "Multi-Cloud-Strategien",
    "services.cloud.features.containers": "Container-Orchestrierung",
    "services.cloud.features.serverless": "Serverless Computing",
    "services.cloud.features.migration": "Cloud Migration",
    "services.data.title": "Daten & Analytics",
    "services.data.description":
      "Umfassende Datenstrategien von der Erfassung bis zur Visualisierung und Analyse.",
    "services.data.features.warehousing": "Data Warehousing",
    "services.data.features.realtime": "Real-time Analytics",
    "services.data.features.bi": "Business Intelligence",
    "services.data.features.governance": "Data Governance",
    "services.strategy.title": "IT-Strategie & Architektur",
    "services.strategy.description":
      "Strategische IT-Planung und moderne Systemarchitekturen für nachhaltiges Wachstum.",
    "services.strategy.features.architecture": "Enterprise Architecture",
    "services.strategy.features.roadmaps": "Technology Roadmaps",
    "services.strategy.features.digital": "Digital Strategy",
    "services.strategy.features.integration": "System Integration",
    "services.security.title": "IT-Sicherheit & Compliance",
    "services.security.description":
      "Ganzheitliche Sicherheitskonzepte und Compliance-Management für Ihr Unternehmen.",
    "services.security.features.assessment": "Security Assessment",
    "services.security.features.gdpr": "GDPR Compliance",
    "services.security.features.zeroTrust": "Zero Trust Architecture",
    "services.security.features.incident": "Incident Response",
    "services.devops.title": "DevOps & Automation",
    "services.devops.description":
      "Optimierte Entwicklungsprozesse und Automatisierung für schnellere Time-to-Market.",
    "services.devops.features.cicd": "CI/CD Pipelines",
    "services.devops.features.iac": "Infrastructure as Code",
    "services.devops.features.monitoring": "Monitoring & Logging",
    "services.devops.features.release": "Release Management",

    // Case Studies
    "caseStudies.title": "Erfolgsgeschichten",
    "caseStudies.subtitle":
      "Entdecken Sie, wie wir Unternehmen bei ihrer digitalen Transformation unterstützt haben",

    // Why Us
    "whyUs.title": "Warum IT Semantic?",
    "whyUs.subtitle":
      "Wir kombinieren technische Expertise mit strategischem Denken für nachhaltige Lösungen",

    // Testimonials
    "testimonials.title": "Was unsere Kunden sagen",
    "testimonials.subtitle":
      "Erfahren Sie, wie wir anderen Unternehmen geholfen haben",
    "testimonials.quotes.quote1":
      "IT Semantic hat uns dabei geholfen, unsere Datenanalyse-Prozesse zu revolutionieren. Die KI-Lösungen haben unsere Effizienz um 300% gesteigert.",
    "testimonials.quotes.quote2":
      "Die Cloud-Migration war nahtlos und professionell. Unser System läuft jetzt stabiler denn je und die Kosten sind um 40% gesunken.",
    "testimonials.quotes.quote3":
      "Das Team von IT Semantic versteht nicht nur Technologie, sondern auch unser Business. Die Lösungen sind praxisnah und zukunftssicher.",
    "testimonials.authors.author1": "Dr. Sarah Mueller",
    "testimonials.authors.author2": "Michael Weber",
    "testimonials.authors.author3": "Lisa Schmidt",
    "testimonials.roles.role1": "CTO",
    "testimonials.roles.role2": "IT-Leiter",
    "testimonials.roles.role3": "Head of Digital Innovation",
    "testimonials.companies.company1": "TechCorp GmbH",
    "testimonials.companies.company2": "InnovateTech AG",
    "testimonials.companies.company3": "FutureWorks Ltd.",

    // CTA
    "cta.title": "Lassen Sie uns über Ihr Projekt sprechen",
    "cta.subtitle":
      "In einem unverbindlichen Erstgespräch zeigen wir Ihnen, wie Technologie Ihr Geschäft voranbringen kann.",
    "cta.button": "Kostenloses Erstgespräch vereinbaren",
    "cta.trust.duration": "15 min",
    "cta.trust.durationLabel": "Erstgespräch",
    "cta.trust.commitment": "100%",
    "cta.trust.commitmentLabel": "Unverbindlich",
    "cta.trust.response": "24h",
    "cta.trust.responseLabel": "Rückmeldung",

    // Footer
    "footer.company": "Unternehmen",
    "footer.services": "Leistungen",
    "footer.contact": "Kontakt",
    "footer.legal": "Rechtliches",
    "footer.privacy": "Datenschutz",
    "footer.imprint": "Impressum",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.description":
      "Ihr vertrauensvoller Partner für digitale Transformation und innovative IT-Lösungen.",
    "footer.address": "Musterstraße 123, 10115 Berlin",
    "footer.phone": "+49 30 123 456 78",
    "footer.email": "kontakt@it-semantic.de",
    "footer.resources": "Ressourcen",
    "footer.links.home": "Startseite",
    "footer.links.about": "Über uns",
    "footer.links.careers": "Karriere",
    "footer.links.contact": "Kontakt",
    "footer.links.blog": "Blog",
    "footer.links.industries": "Branchen",
    "footer.links.caseStudies": "Fallstudien",
    "footer.links.resources": "Ressourcen",
    "footer.links.cloud": "Cloud-Lösungen",
    "footer.links.data": "Data & Analytics",
    "footer.links.ai": "KI & Machine Learning",
    "footer.links.strategy": "IT-Strategie",
    "footer.links.security": "IT-Sicherheit",
    "footer.links.privacy": "Datenschutz",
    "footer.links.imprint": "Impressum",
    "footer.links.terms": "AGB",
  },
  en: {
    // Header
    "nav.services": "Services",
    "nav.caseStudies": "Case Studies",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "header.cta": "Free Consultation",
    "header.ctaShort": "Consultation",
    "header.menuOpen": "Open main menu",

    // Hero Section
    "hero.welcome": "Welcome to IT Semantic",
    "hero.titlePart1": "We're changing",
    "hero.titlePart2": "the way people connect.",
    "hero.subtitle":
      "Anime aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.",
    "hero.cta": "Free Consultation",
    "hero.ctaSecondary": "Our Services",
    "hero.image1Alt": "Team collaboration",
    "hero.image2Alt": "Modern workspace",
    "hero.stats.projects": "150+",
    "hero.stats.projectsLabel": "Projects Completed",
    "hero.stats.users": "2.5M+",
    "hero.stats.usersLabel": "Active Users",
    "hero.testimonial.title": "Fast & Easy Process",
    "hero.testimonial.author": "Sarah Johnson",
    "hero.rating.score": "4.9",
    "hero.rating.reviews": "5,000+ Reviews",

    // Services
    "services.title": "Our Services",
    "services.subtitle":
      "We provide comprehensive IT consulting and implementation for your digital transformation",
    "services.ai.title": "AI & Machine Learning",
    "services.ai.description":
      "Intelligent algorithms and ML models for data-driven decision-making and automation.",
    "services.ai.features.predictive": "Predictive Analytics",
    "services.ai.features.vision": "Computer Vision",
    "services.ai.features.nlp": "NLP Solutions",
    "services.ai.features.mlops": "MLOps",
    "services.cloud.title": "Cloud Solutions",
    "services.cloud.description":
      "Scalable, secure cloud infrastructures for modern enterprise applications.",
    "services.cloud.features.multiCloud": "Multi-Cloud Strategies",
    "services.cloud.features.containers": "Container Orchestration",
    "services.cloud.features.serverless": "Serverless Computing",
    "services.cloud.features.migration": "Cloud Migration",
    "services.data.title": "Data & Analytics",
    "services.data.description":
      "Comprehensive data strategies from collection to visualization and analysis.",
    "services.data.features.warehousing": "Data Warehousing",
    "services.data.features.realtime": "Real-time Analytics",
    "services.data.features.bi": "Business Intelligence",
    "services.data.features.governance": "Data Governance",
    "services.strategy.title": "IT Strategy & Architecture",
    "services.strategy.description":
      "Strategic IT planning and modern system architectures for sustainable growth.",
    "services.strategy.features.architecture": "Enterprise Architecture",
    "services.strategy.features.roadmaps": "Technology Roadmaps",
    "services.strategy.features.digital": "Digital Strategy",
    "services.strategy.features.integration": "System Integration",
    "services.security.title": "IT Security & Compliance",
    "services.security.description":
      "Comprehensive security concepts and compliance management for your company.",
    "services.security.features.assessment": "Security Assessment",
    "services.security.features.gdpr": "GDPR Compliance",
    "services.security.features.zeroTrust": "Zero Trust Architecture",
    "services.security.features.incident": "Incident Response",
    "services.devops.title": "DevOps & Automation",
    "services.devops.description":
      "Optimized development processes and automation for faster time-to-market.",
    "services.devops.features.cicd": "CI/CD Pipelines",
    "services.devops.features.iac": "Infrastructure as Code",
    "services.devops.features.monitoring": "Monitoring & Logging",
    "services.devops.features.release": "Release Management",

    // Case Studies
    "caseStudies.title": "Success Stories",
    "caseStudies.subtitle":
      "Discover how we have supported companies in their digital transformation",

    // Why Us
    "whyUs.title": "Why IT Semantic?",
    "whyUs.subtitle":
      "We combine technical expertise with strategic thinking for sustainable solutions",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Learn how we have helped other companies",
    "testimonials.quotes.quote1":
      "IT Semantic helped us revolutionize our data analysis processes. The AI solutions have increased our efficiency by 300%.",
    "testimonials.quotes.quote2":
      "The cloud migration was seamless and professional. Our system is now more stable than ever and costs have decreased by 40%.",
    "testimonials.quotes.quote3":
      "The IT Semantic team not only understands technology but also our business. The solutions are practical and future-proof.",
    "testimonials.authors.author1": "Dr. Sarah Mueller",
    "testimonials.authors.author2": "Michael Weber",
    "testimonials.authors.author3": "Lisa Schmidt",
    "testimonials.roles.role1": "CTO",
    "testimonials.roles.role2": "IT Manager",
    "testimonials.roles.role3": "Head of Digital Innovation",
    "testimonials.companies.company1": "TechCorp GmbH",
    "testimonials.companies.company2": "InnovateTech AG",
    "testimonials.companies.company3": "FutureWorks Ltd.",

    // CTA
    "cta.title": "Let's Talk About Your Project",
    "cta.subtitle":
      "In a non-binding initial consultation, we'll show you how technology can advance your business.",
    "cta.button": "Schedule Free Consultation",
    "cta.trust.duration": "15 min",
    "cta.trust.durationLabel": "Initial Consultation",
    "cta.trust.commitment": "100%",
    "cta.trust.commitmentLabel": "Non-binding",
    "cta.trust.response": "24h",
    "cta.trust.responseLabel": "Response Time",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.imprint": "Imprint",
    "footer.rights": "All rights reserved.",
    "footer.description":
      "Your trusted partner for digital transformation and innovative IT solutions.",
    "footer.address": "Sample Street 123, 10115 Berlin",
    "footer.phone": "+49 30 123 456 78",
    "footer.email": "contact@it-semantic.de",
    "footer.resources": "Resources",
    "footer.links.home": "Home",
    "footer.links.about": "About Us",
    "footer.links.careers": "Careers",
    "footer.links.contact": "Contact",
    "footer.links.blog": "Blog",
    "footer.links.industries": "Industries",
    "footer.links.caseStudies": "Case Studies",
    "footer.links.resources": "Resources",
    "footer.links.cloud": "Cloud Solutions",
    "footer.links.data": "Data & Analytics",
    "footer.links.ai": "AI & Machine Learning",
    "footer.links.strategy": "IT Strategy",
    "footer.links.security": "IT Security",
    "footer.links.privacy": "Privacy Policy",
    "footer.links.imprint": "Imprint",
    "footer.links.terms": "Terms & Conditions",
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
}

export function LanguageProvider({
  children,
  defaultLanguage = "de",
  storageKey = "it-semantic-language",
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const storedLanguage = localStorage.getItem(storageKey) as Language;
      if (
        storedLanguage &&
        (storedLanguage === "de" || storedLanguage === "en")
      ) {
        setLanguageState(storedLanguage);
      }
    } catch (error) {
      console.warn("Failed to load language from localStorage:", error);
    }
  }, [storageKey]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    try {
      localStorage.setItem(storageKey, lang);
      // Update document lang attribute
      document.documentElement.lang = lang;
    } catch (error) {
      console.warn("Failed to save language to localStorage:", error);
    }
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{
          language: defaultLanguage,
          setLanguage: () => {},
          t: (key) => key as string,
        }}
      >
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
