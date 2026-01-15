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
      <head>
        {/* Netlify Identity Widget for CMS authentication */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
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
            <div className="footer-grid">
              <div className="footer-column">
                <h4>Microbiology Theme</h4>
                <p>
                  Swammerdam Institute for Life Sciences (SILS)
                  <br />
                  University of Amsterdam
                </p>
              </div>

              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/research-groups">Research Groups</Link></li>
                  <li><Link href="/people">People</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Research</h4>
                <ul>
                  <li><Link href="/research-groups#molecular-biology-microbial-food-safety">MBMFS</Link></li>
                  <li><Link href="/research-groups#bacterial-cell-biology">BCBP</Link></li>
                  <li><Link href="/research-groups#microbiome-engineering">Microbiome Engineering</Link></li>
                  <li><Link href="/research-groups#core-facilities">Core Facilities</Link></li>
                  <li><Link href="/research-groups#cross-theme-expertise">Cross-theme Expertise</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <ul>
                  <li><a href="https://www.uva.nl/en/about-the-uva/organisation/faculties/faculty-of-science/faculty-of-science.html" target="_blank" rel="noopener noreferrer">UvA Faculty of Science</a></li>
                  <li><a href="https://sils.uva.nl" target="_blank" rel="noopener noreferrer">SILS Website</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} University of Amsterdam. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
