"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: t("testimonials.quotes.quote1"),
      author: t("testimonials.authors.author1"),
      role: t("testimonials.roles.role1"),
      company: t("testimonials.companies.company1"),
    },
    {
      quote: t("testimonials.quotes.quote2"),
      author: t("testimonials.authors.author2"),
      role: t("testimonials.roles.role2"),
      company: t("testimonials.companies.company2"),
    },
    {
      quote: t("testimonials.quotes.quote3"),
      author: t("testimonials.authors.author3"),
      role: t("testimonials.roles.role3"),
      company: t("testimonials.companies.company3"),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            data-aos="fade-up"
          >
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="relative">
          <div
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-center">
              <svg
                className="w-12 h-12 text-primary/20 mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>

              <blockquote className="text-xl sm:text-2xl text-foreground mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="font-semibold text-foreground text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-secondary">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="text-primary font-medium">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? "bg-primary"
                    : "bg-secondary/30"
                }`}
                aria-label={`Testimonial ${index + 1} anzeigen`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="absolute inset-0 z-0" style={{ overflowX: "clip" }}>
        <div className="background-gradient">
          <div className="background-gradient-pattern"></div>
        </div>
      </div>
    </section>
  );
}
