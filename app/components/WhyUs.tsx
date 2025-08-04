'use client';

import { useLanguage } from './LanguageProvider';

export default function WhyUs() {
  const { t } = useLanguage();
  const benefits = [
    {
      icon: '🎯',
      title: 'Erprobte Branchenerfahrung',
      description: 'Über 15 Jahre Erfahrung in verschiedenen Branchen von Automotive bis FinTech. Wir verstehen Ihre spezifischen Herausforderungen und Anforderungen.',
    },
    {
      icon: '🚀',
      title: 'Agile & interdisziplinäre Teams',
      description: 'Unsere crossfunktionalen Teams arbeiten nach agilen Methoden und bringen Expertise aus Entwicklung, Design, DevOps und Business zusammen.',
    },
    {
      icon: '🔄',
      title: '360°-Begleitung von Idee bis Umsetzung',
      description: 'Von der ersten Strategieberatung über die Entwicklung bis zum produktiven Betrieb – wir sind Ihr Partner für den gesamten Digitalisierungsprozess.',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl mb-6">
                <span className="text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional stats or certifications */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 dark:from-slate-800/50 dark:via-slate-700/50 dark:to-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">ISO 27001</div>
              <div className="text-sm text-secondary">Zertifizierte Sicherheit</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-secondary">Support verfügbar</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-secondary">Uptime Garantie</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">DSGVO</div>
              <div className="text-sm text-secondary">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}