import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import TrustLogos from './components/TrustLogos';
import WhyUs from './components/WhyUs';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main>
        <Hero />
        <TrustLogos />
        <Services />
        <WhyUs />
        <CaseStudies />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
