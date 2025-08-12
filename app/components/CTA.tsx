"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function CTA() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
          data-aos="fade-up"
        >
          {t("cta.title")}
        </h2>

        <p
          className="text-xl text-blue-100 mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("cta.subtitle")}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            href="#contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
          >
            {t("cta.button")}
          </Link>

          <Link
            href="tel:+49-30-12345678"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all w-full sm:w-auto"
          >
            +49 30 123 456 78
          </Link>
        </div>

        {/* Trust indicators */}
        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white mb-1">{t("cta.trust.duration")}</div>
            <div className="text-sm">{t("cta.trust.durationLabel")}</div>
          </div>
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white mb-1">{t("cta.trust.commitment")}</div>
            <div className="text-sm">{t("cta.trust.commitmentLabel")}</div>
          </div>
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white mb-1">{t("cta.trust.response")}</div>
            <div className="text-sm">{t("cta.trust.responseLabel")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
