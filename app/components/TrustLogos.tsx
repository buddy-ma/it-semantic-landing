import Image from "next/image";

export default function TrustLogos() {
  const companies = [
    { name: "Fiege", logo: "/logos/fiege.png" },
    { name: "Gewobag", logo: "/logos/gewobag.png" },
    { name: "Igloo", logo: "/logos/igloo.png" },
    { name: "BOSA", logo: "/logos/logo-bosa-300x136.png" },
    { name: "Tert", logo: "/logos/tert-300x40.png" },
    { name: "IT Semantic", logo: "/logos/logo_it-sem-25.png" },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-16 w-full opacity-60 hover:opacity-100 transition-opacity"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
