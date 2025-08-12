"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t, language } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Blurry gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white/90 to-purple-50/80 dark:from-slate-900/90 dark:via-slate-800/90 dark:to-slate-900/90 backdrop-blur-3xl"></div>

      {/* Additional floating gradient elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>

      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <div className="flex-1 lg:pr-12 text-center lg:text-left">
            <div className="mb-6" data-aos="fade-right" data-aos-delay="100">
              <span className="inline-flex items-center px-4 py-2 bg-primary outline-5 outline-blue-500/50 text-white rounded-full text-sm font-medium ">
                <span className="mr-3 text-2xl">👋</span>
                {t("hero.welcome")}
              </span>
            </div>

            <h1
              className="text-5xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <span className="text-primary">{t("hero.titlePart1")}</span>
              <br />
              <span>{t("hero.titlePart2")}</span>
            </h1>

            <p
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {t("hero.subtitle")}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <Link
                href="#contact"
                className="group bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary hover:to-purple-700 px-10 py-5 rounded-3xl text-xl font-semibold transition-all transform hover:scale-105 hover:shadow-2xl w-full sm:w-auto flex items-center justify-center space-x-3"
              >
                <span>{t("hero.cta")}</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform"
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
                className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:text-primary px-10 py-5 rounded-3xl text-xl font-semibold transition-all w-full sm:w-auto flex items-center justify-center space-x-3"
              >
                <span>{t("hero.ctaSecondary")}</span>
                <svg
                  className="w-6 h-6 group-hover:translate-y-2 transition-transform"
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
          </div>

          {/* Right Visual - Redesigned with main images and stats */}
          <div
            className="flex-1 mt-16 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative max-w-2xl mx-auto">
              {/* Main large image card */}
              <div className="relative mb-6 transition-all duration-500 hover:scale-105">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/hero/1.jpg"
                    alt={t("hero.image1Alt")}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Floating stats box on top right */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-purple-600 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold">
                        {t("hero.stats.projects")}
                      </div>
                      <div className="text-sm opacity-90">
                        {t("hero.stats.projectsLabel")}
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom row with smaller image and rating section */}
              <div className="grid grid-cols-2 gap-4">
                {/* Smaller image card */}
                <div className="transition-all duration-500 hover:scale-105">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl h-64">
                    <Image
                      src="/hero/2.jpg"
                      alt={t("hero.image2Alt")}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Floating text overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                      <div className="text-sm font-semibold text-gray-800">
                        {t("hero.testimonial.title")}
                      </div>
                      <div className="text-xs text-gray-600">
                        {t("hero.testimonial.author")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating and stats section */}
                <div className="space-y-4">
                  {/* Star rating card */}
                  <div className="bg-white rounded-3xl shadow-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-gray-800 mb-2">
                      {t("hero.rating.score")}
                    </div>
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("hero.rating.reviews")}
                    </div>
                  </div>

                  {/* Trust indicator */}
                  <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-3xl shadow-2xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">
                      {t("hero.stats.users")}
                    </div>
                    <div className="text-sm opacity-90">
                      {t("hero.stats.usersLabel")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-dashed border-primary rounded-full animate-spin"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-20 -left-6 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1.5 h-4 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
