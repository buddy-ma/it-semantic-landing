"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.caseStudies"), href: "#case-studies" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 shadow-sm max-w-7xl mx-auto"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IT</span>
              </div>
              <span
                className={`text-xl font-bold transition-colors text-slate-900 dark:text-slate-100`}
              >
                Semantic
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors text-slate-600 dark:text-slate-300 hover:text-primary`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle, Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex items-center space-x-2 text-sm">
              <button
                onClick={() => setLanguage("de")}
                className={`font-medium transition-colors text-slate-600 dark:text-slate-300 hover:text-primary`}
              >
                DE
              </button>
              <span
                className={`transition-colors text-slate-500 dark:text-slate-400`}
              >
                |
              </span>
              <button
                onClick={() => setLanguage("en")}
                className={`font-medium transition-colors text-slate-600 dark:text-slate-300 hover:text-primary`}
              >
                EN
              </button>
            </div>
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {t("header.cta")}
            </Link>
          </div>

          {/* Tablet/Mobile CTA and Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Theme Toggle for tablet/mobile */}
            <ThemeToggle />

            {/* CTA Button for tablet */}
            <Link
              href="#contact"
              className="hidden md:block bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {t("header.ctaShort")}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors text-slate-600 dark:text-slate-300 hover:text-primary`}
              aria-expanded="false"
            >
              <span className="sr-only">{t("header.menuOpen")}</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-slate-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm">
                  <button
                    onClick={() => setLanguage("de")}
                    className={`font-medium transition-colors ${
                      language === "de"
                        ? "text-primary"
                        : "text-slate-600 dark:text-slate-300 hover:text-primary"
                    }`}
                  >
                    DE
                  </button>
                  <span className="text-slate-500 dark:text-slate-400">|</span>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`font-medium transition-colors ${
                      language === "en"
                        ? "text-primary"
                        : "text-slate-600 dark:text-slate-300 hover:text-primary"
                    }`}
                  >
                    EN
                  </button>
                </div>
                <Link
                  href="#contact"
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors md:hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.cta")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
