// app/research-groups/kramer/page.tsx
import Link from "next/link";

export default function KramerPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">Mass Spectrometry of Biomolecules (Kramer)</h1>
        <p className="lead">
          The group combines mass spectrometry with biomolecular and organic chemistry to support
          and advance life-science research across SILS.
        </p>

        <div className="grid" style={{ marginTop: "1.6rem", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>What we do</h2>
            <p style={{ fontSize: "0.95rem" }}>
              We develop and apply advanced MS-based analyses of biomolecules, enabling discovery and
              quantitative measurements for complex biological questions.
            </p>
          </div>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>How we do it</h2>
            <p style={{ fontSize: "0.95rem" }}>
              Through close collaboration with other SILS groups, we integrate MS workflows with chemistry,
              physics, informatics and biology, and run the SILS MS core facility.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Team</h2>
          <div className="grid people-grid" style={{ marginTop: "1rem" }}>
            <article className="card">
              <h3>Dr. Gertjan Kramer</h3>
              <p style={{ marginTop: 4, color: "#64748b" }}>Group leader & Head, MS core facility</p>
              <p style={{ marginTop: 8 }}>
                <a href="mailto:g.kramer@uva.nl">g.kramer@uva.nl</a>
              </p>
            </article>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Publications & group info</h2>
          <p className="lead">See the group pages for scope and team.</p>
          <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a className="btn btn-outline" href="https://sils.uva.nl/content/research-groups/mass-spectrometry-of-biomolecules/mass-spectrometry-of-biomolecules.html" target="_blank" rel="noreferrer">Group overview</a>
            <a className="btn btn-outline" href="https://sils.uva.nl/content/research-groups/mass-spectrometry-of-biomolecules/staff/staff-msb.html" target="_blank" rel="noreferrer">Team</a>
            <a className="btn btn-outline" href="https://www.uva.nl/en/profile/k/r/g.kramer/g.kramer.html" target="_blank" rel="noreferrer">UvA profile</a>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <Link href="/research-groups" className="btn btn-outline">Back to all research groups</Link>
        </div>
      </div>
    </section>
  );
}
