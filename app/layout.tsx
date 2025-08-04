import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IT Semantic - Ihr IT-Partner für digitale Transformation",
  description: "Wir unterstützen innovative Unternehmen dabei, sichere, skalierbare IT-Lösungen mit Daten, KI und Cloud-Technologien zu gestalten und umzusetzen.",
  keywords: "IT-Beratung, Digitale Transformation, KI, Machine Learning, Cloud-Lösungen, Daten Analytics, IT-Strategie, IT-Sicherheit",
  authors: [{ name: "IT Semantic" }],
  openGraph: {
    title: "IT Semantic - Ihr IT-Partner für digitale Transformation",
    description: "Wir unterstützen innovative Unternehmen dabei, sichere, skalierbare IT-Lösungen mit Daten, KI und Cloud-Technologien zu gestalten und umzusetzen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
