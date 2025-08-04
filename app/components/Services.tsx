'use client';

import { useLanguage } from './LanguageProvider';

export default function Services() {
  const { t } = useLanguage();
  const services = [
    {
      title: 'KI & Machine Learning',
      description: 'Intelligente Algorithmen und ML-Modelle für datengetriebene Entscheidungen und Automatisierung.',
      icon: '🤖',
      features: ['Predictive Analytics', 'Computer Vision', 'NLP-Lösungen', 'MLOps'],
    },
    {
      title: 'Cloud-Lösungen',
      description: 'Skalierbare, sichere Cloud-Infrastrukturen für moderne Unternehmensanwendungen.',
      icon: '☁️',
      features: ['Multi-Cloud-Strategien', 'Container-Orchestrierung', 'Serverless Computing', 'Cloud Migration'],
    },
    {
      title: 'Daten & Analytics',
      description: 'Umfassende Datenstrategien von der Erfassung bis zur Visualisierung und Analyse.',
      icon: '📊',
      features: ['Data Warehousing', 'Real-time Analytics', 'Business Intelligence', 'Data Governance'],
    },
    {
      title: 'IT-Strategie & Architektur',
      description: 'Strategische IT-Planung und moderne Systemarchitekturen für nachhaltiges Wachstum.',
      icon: '🏗️',
      features: ['Enterprise Architecture', 'Technology Roadmaps', 'Digital Strategy', 'System Integration'],
    },
    {
      title: 'IT-Sicherheit & Compliance',
      description: 'Ganzheitliche Sicherheitskonzepte und Compliance-Management für Ihr Unternehmen.',
      icon: '🔒',
      features: ['Security Assessment', 'GDPR Compliance', 'Zero Trust Architecture', 'Incident Response'],
    },
    {
      title: 'DevOps & Automation',
      description: 'Optimierte Entwicklungsprozesse und Automatisierung für schnellere Time-to-Market.',
      icon: '⚙️',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Release Management'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-secondary">
                    <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Alle Leistungen ansehen
          </button>
        </div>
      </div>
    </section>
  );
}