import Link from 'next/link';

export default function CaseStudies() {
  const caseStudies = [
    {
      company: 'ZEISS',
      title: 'KI-basierte Qualitätskontrolle',
      description: 'Implementierung eines Machine Learning Systems zur automatischen Defekterkennung in der Produktion.',
      result: '40% Reduktion der Ausschussrate',
      category: 'Manufacturing',
      image: '🔬',
    },
    {
      company: 'Lufthansa',
      title: 'Cloud-Migration & Skalierung',
      description: 'Migration kritischer Systeme in die Cloud mit verbesserter Performance und Kosteneffizienz.',
      result: '60% Kosteneinsparung',
      category: 'Aviation',
      image: '✈️',
    },
    {
      company: 'Sennheiser',
      title: 'IoT-Datenanalyse Platform',
      description: 'Entwicklung einer Real-time Analytics Plattform für IoT-Sensordaten in Audio-Geräten.',
      result: '3x schnellere Insights',
      category: 'Audio Technology',
      image: '🎧',
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Erfolge unserer Kunden
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Entdecken Sie, wie wir Unternehmen dabei geholfen haben, ihre digitalen Ziele zu erreichen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{study.image}</span>
                  <div>
                    <div className="font-semibold text-foreground">{study.company}</div>
                    <div className="text-sm text-secondary">{study.category}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {study.title}
                </h3>
                
                <p className="text-secondary mb-4 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg p-4 mb-4">
                  <div className="text-sm text-secondary mb-1">Ergebnis</div>
                  <div className="font-semibold text-primary">{study.result}</div>
                </div>
                
                <button className="text-primary hover:text-primary-dark font-medium text-sm transition-colors">
                  Fallstudie lesen →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Alle Fallstudien ansehen
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}