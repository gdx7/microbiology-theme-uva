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
    }));

  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">People</p>
        <h1 className="section-title">Principal investigators</h1>
        <p className="lead">
          The Microbiology theme brings together principal investigators with
          complementary expertise in microbial food safety, microbiomes,
          bacterial cell biology and physiology, microbiome engineering and
          biomolecular mass spectrometry.
        </p>

        <div className="people-list" style={{ marginTop: "1.4rem" }}>
          {pis.map((pi, idx) => (
            <article key={`${pi.name}-${idx}`} className="card people-card">
              <h3>{pi.name}</h3>
              <small>{pi.role}</small>
              <p style={{ marginTop: "0.4rem" }}>{pi.group}</p>
              {pi.email && (
                <p style={{ marginTop: "0.3rem", fontSize: "0.9rem" }}>
                  <a href={`mailto:${pi.email}`}>{pi.email}</a>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
