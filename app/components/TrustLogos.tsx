export default function TrustLogos() {
  const companies = [
    { name: 'ZEISS', logo: 'ZEISS' },
    { name: 'Lufthansa', logo: 'Lufthansa' },
    { name: 'Sennheiser', logo: 'Sennheiser' },
    { name: 'tesa', logo: 'tesa' },
    { name: 'Merck', logo: 'Merck' },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 -mt-16 pt-32 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Vertrauen weltweit etablierter Marken
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-16 w-full opacity-60 hover:opacity-100 transition-opacity"
            >
              {/* Placeholder for actual logos - in production, use proper logo images */}
              <div className="text-2xl font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600">
                {company.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}