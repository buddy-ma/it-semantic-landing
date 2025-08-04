"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className=" min-h-screen container max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-primary relative overflow-hidden dark:bg-slate-800/30 rounded-3xl border border-white/20 dark:border-slate-600/30 p-8 sm:p-12 lg:p-16">
            <div className="text-center z-10 relative">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/20 dark:bg-slate-700/50 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  🚀 Digitale Transformation leicht gemacht
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                {t("hero.title")}
              </h1>

              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link
                  href="#contact"
                  className="group bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-2xl w-full sm:w-auto flex items-center justify-center space-x-2"
                >
                  <span>{t("hero.cta")}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link
                  href="#services"
                  className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl text-lg font-semibold transition-all w-full sm:w-auto flex items-center justify-center space-x-2"
                >
                  <span>{t("hero.ctaSecondary")}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </Link>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/10 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-600/40 hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    500+
                  </div>
                  <div className="text-blue-200 dark:text-slate-300">
                    Erfolgreiche Projekte
                  </div>
                  <div className="text-xs text-blue-300 dark:text-slate-400 mt-1">
                    Seit 2009
                  </div>
                </div>
                <div className="bg-white/10 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-600/40 hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    15+
                  </div>
                  <div className="text-blue-200 dark:text-slate-300">
                    Jahre Erfahrung
                  </div>
                  <div className="text-xs text-blue-300 dark:text-slate-400 mt-1">
                    Bewährte Expertise
                  </div>
                </div>
                <div className="bg-white/10 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-600/40 hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    98%
                  </div>
                  <div className="text-blue-200 dark:text-slate-300">
                    Kundenzufriedenheit
                  </div>
                  <div className="text-xs text-blue-300 dark:text-slate-400 mt-1">
                    Nachgewiesene Qualität
                  </div>
                </div>
              </div>
            </div>
            {/* Main Hero Container */}
            <div className="absolute inset-0 z-0" style={{ overflowX: "clip" }}>
              <div className="background-white-pattern"></div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
