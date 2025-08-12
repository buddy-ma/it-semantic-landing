"use client";

import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "./LanguageProvider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonials.quotes.quote1"),
      author: t("testimonials.authors.author1"),
      role: t("testimonials.roles.role1"),
      company: t("testimonials.companies.company1"),
      rating: 5,
    },
    {
      quote: t("testimonials.quotes.quote2"),
      author: t("testimonials.authors.author2"),
      role: t("testimonials.roles.role2"),
      company: t("testimonials.companies.company2"),
      rating: 5,
    },
    {
      quote: t("testimonials.quotes.quote3"),
      author: t("testimonials.authors.author3"),
      role: t("testimonials.roles.role3"),
      company: t("testimonials.companies.company3"),
      rating: 5,
    },
  ];

  const performanceStats = [
    { value: "30%", label: t("testimonials.stats.stat1") },
    { value: "40%", label: t("testimonials.stats.stat2") },
    { value: "300%", label: t("testimonials.stats.stat3") },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <svg
        key={i}
        className="w-6 h-6 text-red-500 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Two-line heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-black mb-2"
            data-aos="fade-up"
          >
            {t("testimonials.heading.line1")}
          </h2>
          <h3
            className="text-3xl sm:text-4xl font-bold text-primary mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("testimonials.heading.line2")}
          </h3>
        </div>

        {/* Swiper Testimonials with Stacked Cards Effect */}
        <div className="relative mb-16">
          <div className="max-w-5xl mx-auto">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 400000,
                disableOnInteraction: false,
              }}
              cardsEffect={{
                slideShadows: false,
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="swiperSlide shadow-xl bg-white/70 blur-xs dark:bg-slate-800/10 rounded-3xl p-8 sm:p-12 border border-slate-100 dark:border-slate-700 min-h-[400px] flex flex-col justify-center overflow-auto">
                    <div className="text-center">
                      {/* Star rating */}
                      <div className="flex justify-center mb-8">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 mb-12 leading-relaxed font-medium">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author information */}
                      <div className="flex items-center justify-center space-x-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">
                            {testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-800 dark:text-gray-200 text-xl">
                            {testimonial.author}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 text-lg">
                            {testimonial.role} @{testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Performance statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {performanceStats.map((stat, index) => (
            <div key={index} className="text-center rounded-2xl p-6">
              <div className="text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-200"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {t("testimonials.cta")}
          </button>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 z-0" style={{ overflowX: "clip" }}>
        <div className="background-gradient">
          <div className="background-gradient-pattern"></div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          width: 100%;
          height: 500px;
        }

        .testimonials-swiper .swiper-slide {
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-slide-visible .swiperSlide {
          background: white;
          backdrop-filter: none;
          filter: blur(0px);
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
        }
      `}</style>
    </section>
  );
}
