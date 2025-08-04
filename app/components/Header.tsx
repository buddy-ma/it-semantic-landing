'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Startseite', href: '#home' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Branchen', href: '#industries' },
    { name: 'Fallstudien', href: '#case-studies' },
    { name: 'Über uns', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IT</span>
              </div>
              <span className="text-xl font-bold text-foreground">Semantic</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-primary font-medium">DE</span>
              <span className="text-secondary">|</span>
              <span className="text-secondary hover:text-primary cursor-pointer">EN</span>
            </div>
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Kostenloses Erstgespräch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-primary p-2"
              aria-expanded="false"
            >
              <span className="sr-only">Hauptmenü öffnen</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-primary font-medium">DE</span>
                  <span className="text-secondary">|</span>
                  <span className="text-secondary">EN</span>
                </div>
                <Link
                  href="#contact"
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kostenloses Erstgespräch
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}