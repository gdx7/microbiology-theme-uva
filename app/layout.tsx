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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* Clean header with logo + navigation */}
        <header>
          <div className="container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
              }}
            >
              <Image
                src="/logo.png"
                alt="Microbiology theme logo"
                width={72}
                height={72}
                priority
              />
              <div>
                <div className="site-title">Microbiology Theme</div>
                <div className="site-subtitle">
                  Swammerdam Institute of Life Sciences · University of Amsterdam
                </div>
              </div>
            </div>

            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/research-groups">Research groups</Link>
              <Link href="/people">People</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main id="main-content">{children}</main>

        <footer>
          <div className="container">
            <div className="footer-simple">
              <div className="footer-links">
                <a href="https://www.uva.nl/en/about-the-uva/organisation/faculties/faculty-of-science/faculty-of-science.html" target="_blank" rel="noopener noreferrer">UvA Faculty of Science</a>
                <span className="footer-divider">|</span>
                <a href="https://sils.uva.nl" target="_blank" rel="noopener noreferrer">SILS Website</a>
              </div>
            </div>

            <div className="footer-bottom">
              Designed by Gaurav, Claude AI and Gemini | &copy; {new Date().getFullYear()} University of Amsterdam. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
