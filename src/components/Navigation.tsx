"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="Inici - Laia Bobé"
              className="flex items-center"
            >
              <Image
                src="/images/logoBlau.png"
                alt="Laia Bobé"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-700 hover:text-coral-500 transition-colors"
            >
              Sobre mi
            </Link>
            {/* <Link
              href="#services"
              className="text-gray-700 hover:text-coral-500 transition-colors"
            >
              Formacions
            </Link> */}
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-coral-500 transition-colors"
            >
              Testimonis
            </Link>
            {/* <Link
              href="/blog"
              className="text-gray-700 hover:text-coral-500 transition-colors"
            >
              Blog
            </Link> */}
            <Link
              href="#contact"
              className="text-gray-700 hover:text-coral-500 transition-colors"
            >
              Contacte
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-coral-500 focus:outline-none"
              aria-label={isOpen ? "Tanca el menú" : "Obre el menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="#about"
                className="text-gray-700 hover:text-coral-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Sobre mi
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-coral-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Formacions
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-coral-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimonis
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-coral-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="mailto:contactar@laiabobe.com"
                className="text-gray-700 hover:text-coral-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contacte
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
