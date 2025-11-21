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
        {/* Global animated DNA background – appears on ALL pages */}
        <div className="dna-bg">
          <svg
            className="dna-helix-svg"
            viewBox="0 0 1400 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* gradients for the helical backbones */}
              <linearGradient
                id="helixGrad1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(56,189,248,0.0)" />
                <stop offset="20%" stopColor="rgba(56,189,248,0.7)" />
                <stop offset="50%" stopColor="rgba(129,140,248,0.9)" />
                <stop offset="80%" stopColor="rgba(236,72,153,0.7)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0.0)" />
              </linearGradient>

              <linearGradient
                id="helixGrad2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(14,165,233,0.0)" />
                <stop offset="20%" stopColor="rgba(14,165,233,0.7)" />
                <stop offset="50%" stopColor="rgba(59,130,246,0.85)" />
                <stop offset="80%" stopColor="rgba(16,185,129,0.7)" />
                <stop offset="100%" stopColor="rgba(14,165,233,0.0)" />
              </linearGradient>

              <linearGradient
                id="helixGrad3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(79,70,229,0.0)" />
                <stop offset="20%" stopColor="rgba(79,70,229,0.75)" />
                <stop offset="50%" stopColor="rgba(236,72,153,0.7)" />
                <stop offset="80%" stopColor="rgba(37,99,235,0.85)" />
                <stop offset="100%" stopColor="rgba(79,70,229,0.0)" />
              </linearGradient>
            </defs>

            {/* UPPER HELIX LAYER */}
            <g className="dna-layer dna-layer-1">
              <path
                className="dna-helix-backbone dna-helix-backbone-1"
                stroke="url(#helixGrad1)"
                d="
                  M 0 140
                  C 220 40, 420 260, 640 150
                  C 860 50, 1080 240, 1300 150
                  C 1350 130, 1380 150, 1400 160
                "
              />
              <path
                className="dna-helix-backbone dna-helix-backbone-1"
                stroke="url(#helixGrad1)"
                d="
                  M 0 175
                  C 220 280, 420 80, 640 190
                  C 860 280, 1080 100, 1300 190
                  C 1350 220, 1380 180, 1400 200
                "
              />
            </g>

            {/* SECOND HELIX LAYER */}
            <g className="dna-layer dna-layer-2">
              <path
                className="dna-helix-backbone dna-helix-backbone-2"
                stroke="url(#helixGrad2)"
                d="
                  M 0 260
                  C 200 170, 420 360, 640 250
                  C 880 180, 1100 340, 1320 280
                  C 1360 270, 1385 295, 1400 290
                "
              />
              <path
                className="dna-helix-backbone dna-helix-backbone-2"
                stroke="url(#helixGrad2)"
                d="
                  M 0 295
                  C 200 390, 420 200, 640 295
                  C 880 390, 1100 210, 1320 310
                  C 1360 335, 1385 285, 1400 305
                "
              />
            </g>

            {/* THIRD HELIX LAYER */}
            <g className="dna-layer dna-layer-3">
              <path
                className="dna-helix-backbone dna-helix-backbone-3"
                stroke="url(#helixGrad3)"
                d="
                  M 0 380
                  C 210 290, 430 470, 650 365
                  C 900 280, 1130 450, 1350 390
                  C 1380 380, 1395 400, 1400 395
                "
              />
              <path
                className="dna-helix-backbone dna-helix-backbone-3"
                stroke="url(#helixGrad3)"
                d="
                  M 0 415
                  C 210 510, 430 320, 650 415
                  C 900 510, 1130 330, 1350 420
                  C 1380 435, 1395 385, 1400 410
                "
              />
            </g>

            {/* LOWER, MORE ABSTRACT LAYER 1 */}
            <g className="dna-layer dna-layer-4">
              <path
                className="dna-helix-backbone dna-helix-backbone-2"
                stroke="url(#helixGrad2)"
                d="
                  M 0 520
                  C 240 430, 460 610, 690 500
                  C 940 400, 1180 580, 1360 520
                  C 1385 510, 1395 535, 1400 530
                "
              />
            </g>

            {/* LOWER, MORE ABSTRACT LAYER 2 */}
            <g className="dna-layer dna-layer-3">
              <path
                className="dna-helix-backbone dna-helix-backbone-1"
                stroke="url(#helixGrad1)"
                d="
                  M 0 630
                  C 260 560, 500 720, 760 610
                  C 1020 510, 1240 690, 1380 640
                  C 1395 635, 1400 645, 1400 650
                "
              />
            </g>
          </svg>
        </div>

        {/* Glassy header with NEW logo + navigation */}
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

        <main>{children}</main>

        <footer>
          <div className="container">
            Microbiology theme · Swammerdam Institute of Life Sciences (SILS),
            University of Amsterdam
          </div>
        </footer>
      </body>
    </html>
  );
}
