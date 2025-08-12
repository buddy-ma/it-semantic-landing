"use client";

import { useLanguage } from "./LanguageProvider";

export default function Services() {
  const { t } = useLanguage();
  const services = [
    {
      title: t("services.ai.title"),
      description: t("services.ai.description"),
      icon: "🤖",
      features: [
        t("services.ai.features.predictive"),
        t("services.ai.features.vision"),
        t("services.ai.features.nlp"),
        t("services.ai.features.mlops"),
      ],
    },
    {
      title: t("services.cloud.title"),
      description: t("services.cloud.description"),
      icon: "☁️",
      features: [
        t("services.cloud.features.multiCloud"),
        t("services.cloud.features.containers"),
        t("services.cloud.features.serverless"),
        t("services.cloud.features.migration"),
      ],
    },
    {
      title: t("services.data.title"),
      description: t("services.data.description"),
      icon: "📊",
      features: [
        t("services.data.features.warehousing"),
        t("services.data.features.realtime"),
        t("services.data.features.bi"),
        t("services.data.features.governance"),
      ],
    },
    {
      title: t("services.strategy.title"),
      description: t("services.strategy.description"),
      icon: "🏗️",
      features: [
        t("services.strategy.features.architecture"),
        t("services.strategy.features.roadmaps"),
        t("services.strategy.features.digital"),
        t("services.strategy.features.integration"),
      ],
    },
    {
      title: t("services.security.title"),
      description: t("services.security.description"),
      icon: "🔒",
      features: [
        t("services.security.features.assessment"),
        t("services.security.features.gdpr"),
        t("services.security.features.zeroTrust"),
        t("services.security.features.incident"),
      ],
    },
    {
      title: t("services.devops.title"),
      description: t("services.devops.description"),
      icon: "⚙️",
      features: [
        t("services.devops.features.cicd"),
        t("services.devops.features.iac"),
        t("services.devops.features.monitoring"),
        t("services.devops.features.release"),
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            data-aos="fade-up"
          >
            {t("services.title")}
          </h2>
          <p
            className="text-xl text-secondary max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-secondary"
                  >
                    <svg
                      className="w-4 h-4 text-primary mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
