import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Microbiology Theme · SILS · University of Amsterdam",
  description: "Microbiology Theme embedded within SILS (Swammerdam Institute for Life Sciences), University of Amsterdam.",
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research-groups", label: "Research groups" },
  { href: "/people", label: "People" },
  { href: "/facilities", label: "Technology platforms" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ borderBottom: "1px solid var(--line)", background: "#fff" }}>
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image src="/logos/uva-logo-placeholder.png" alt="University of Amsterdam logo" width={28} height={28} />
              <strong>Microbiology · SILS (UvA)</strong>
            </div>
            <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{ borderTop: "1px solid var(--line)", background: "#fff" }}>
          <div className="container" style={{ color: "var(--muted)", fontSize: ".95rem" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
              <Image src="/logos/sils-logo-placeholder.png" alt="SILS logo" width={28} height={28} />
              <span>Swammerdam Institute for Life Sciences · University of Amsterdam</span>
            </div>
            <div>Science Park 904 · 1098 XH Amsterdam · The Netherlands</div>
            <div>Contact: <a href="mailto:microbiology@uva.nl">microbiology@uva.nl</a></div>
            <div style={{ fontSize: ".85rem" }}>© {new Date().getFullYear()} Microbiology Theme — SILS (UvA)</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
