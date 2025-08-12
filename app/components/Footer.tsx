"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  
  const companyLinks = [
    { name: t("footer.links.home"), href: "#home" },
    { name: t("footer.links.about"), href: "#about" },
    { name: t("footer.links.careers"), href: "#careers" },
    { name: t("footer.links.contact"), href: "#contact" },
  ];

  const resourceLinks = [
    { name: t("footer.links.blog"), href: "#blog" },
    { name: t("footer.links.industries"), href: "#industries" },
    { name: t("footer.links.caseStudies"), href: "#case-studies" },
    { name: t("footer.links.resources"), href: "#resources" },
  ];

  const serviceLinks = [
    { name: t("footer.links.cloud"), href: "#cloud" },
    { name: t("footer.links.data"), href: "#data" },
    { name: t("footer.links.ai"), href: "#ai" },
    { name: t("footer.links.strategy"), href: "#strategy" },
    { name: t("footer.links.security"), href: "#security" },
  ];

  const legalLinks = [
    { name: t("footer.links.privacy"), href: "#privacy" },
    { name: t("footer.links.imprint"), href: "#imprint" },
    { name: t("footer.links.terms"), href: "#terms" },
  ];

  return (
    <footer id="contact" className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1" data-aos="fade-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IT</span>
              </div>
              <span className="text-xl font-bold">Semantic</span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {t("footer.description")}
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {t("footer.address")}
              </div>

              <div className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {t("footer.phone")}
              </div>

              <div className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {t("footer.email")}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-lg font-semibold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 IT Semantic. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
