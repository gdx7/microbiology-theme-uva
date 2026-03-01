// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microbiology Theme · SILS · University of Amsterdam",
  description:
    "Microbiology theme embedded within the Swammerdam Institute of Life Sciences (SILS) at the University of Amsterdam.",
};

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Research groups', href: '/research-groups' },
  { name: 'People', href: '/people' },
  { name: 'Contact', href: '/contact' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-academic-50 text-academic-900 selection:bg-academic-200 selection:text-academic-900">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:p-4 focus:bg-academic-900 focus:text-white focus:outline-none">
          Skip to main content
        </a>

        {/* Classy, modern, full-width header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-academic-200/50 shadow-sm transition-all duration-300">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-4 group"
            >
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Microbiology theme logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="44px"
                  priority
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-academic-900 group-hover:text-uva-red transition-colors duration-300">
                Microbiology @ SILS
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Research groups', href: '/research-groups' },
                { name: 'News', href: '/news' },
                { name: 'People', href: '/people' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[13px] font-bold tracking-[0.15em] uppercase text-academic-600 hover:text-academic-900 transition-colors duration-300 py-2 group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-uva-red group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main id="main-content" className="min-h-screen pt-20">
          {children}
        </main>

        <footer className="bg-white text-academic-600 py-12 mt-auto border-t border-academic-200 text-sm font-light">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <a href="https://www.uva.nl/en/about-the-uva/organisation/faculties/faculty-of-science/faculty-of-science.html" target="_blank" rel="noopener noreferrer" className="hover:text-academic-900 transition-colors">UvA Faculty of Science</a>
                <span className="text-academic-300">|</span>
                <a href="https://sils.uva.nl" target="_blank" rel="noopener noreferrer" className="hover:text-academic-900 transition-colors">SILS Website</a>
              </div>
              <div className="text-center md:text-right">
                Designed by Gaurav, Claude AI and Gemini<br />
                &copy; {new Date().getFullYear()} University of Amsterdam
              </div>
            </div>
          </div>
        </footer>
      </body >
    </html >
  );
}
