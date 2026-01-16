// app/people/page.tsx
import { researchGroups } from "@/data/researchGroups";

export default function PeoplePage() {
  const groups = researchGroups as any[];

  // Collect PIs from groups
  const pis = groups
    .filter((g: any) => g.pi)
    .map((g: any) => ({
      name: g.pi,
      group: g.name,
      role: g.role || "Principal Investigator",
      email: g.contactEmail,
    }))
    // optional: sort alphabetically by name
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="section page-with-watermark">
      <div className="container">
        <p className="section-kicker">People</p>
        <h1 className="section-title">Principal investigators</h1>
        <p className="lead">
          The Microbiology theme brings together principal investigators with
          complementary expertise in microbial food safety, microbiomes,
          bacterial cell biology and physiology, microbiome engineering and
          biomolecular mass spectrometry.
        </p>

        {/* 3-column card grid on desktop, 1–2 cols on smaller screens via .people-grid in globals.css */}
        <div className="grid people-grid">
          {pis.map((pi, idx) => (
            <article key={`${pi.name}-${idx}`} className="card">
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{pi.name}</h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                {pi.role}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-soft)",
                  marginBottom: "0.75rem",
                }}
              >
                {pi.group}
              </p>
              {pi.email && (
                <p
                  style={{
                    fontSize: "0.9375rem",
                    wordBreak: "break-word",
                  }}
                >
                  <a href={`mailto:${pi.email}`} style={{ fontWeight: 500 }}>{pi.email}</a>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
