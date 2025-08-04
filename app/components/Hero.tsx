import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-muted via-white to-muted pt-16 pb-20 sm:pt-24 sm:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ihr IT-Partner für{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              digitale Transformation
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-secondary max-w-4xl mx-auto mb-10 leading-relaxed">
            Wir unterstützen innovative Unternehmen dabei, sichere, skalierbare IT-Lösungen 
            mit Daten, KI und Cloud-Technologien zu gestalten und umzusetzen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              Kostenloses Erstgespräch buchen
            </Link>
            <Link
              href="#services"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all w-full sm:w-auto"
            >
              Unser Vorgehen ansehen
            </Link>
          </div>
        </div>

        {/* Stats or key metrics */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-secondary">Erfolgreiche Projekte</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-secondary">Jahre Erfahrung</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-secondary">Kundenzufriedenheit</div>
          </div>
        </div>
      </div>
    </section>
  );
}