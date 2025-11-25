// app/research-groups/branco-dos-santos/page.tsx
import Link from "next/link";

export default function BrancoDosSantosPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">Molecular Microbial Physiology (Branco dos Santos)</h1>
        <p className="lead">
          The group investigates microbial physiology and metabolism in quantitative terms, in the
          context of systems biology and biotechnology.
        </p>

        <div className="grid" style={{ marginTop: "1.6rem", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>What we do</h2>
          <p style={{ fontSize: "0.95rem" }}>
              We study how microbes allocate resources and adapt their metabolic programs under different
              environmental and biotechnological conditions.
            </p>
          </div>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>How we do it</h2>
            <p style={{ fontSize: "0.95rem" }}>
              We combine experimental microbiology with data-driven and modeling approaches, collaborating
              across the Bacterial Cell Biology & Physiology groups at SILS.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Team</h2>
          <div className="grid people-grid" style={{ marginTop: "1rem" }}>
            <article className="card">
              <h3>Dr. Filipe Branco dos Santos</h3>
              <p style={{ marginTop: 4, color: "#64748b" }}>Group leader</p>
              <p style={{ marginTop: 8 }}>
                <a href="mailto:F.BrancodosSantos@uva.nl">F.BrancodosSantos@uva.nl</a>
              </p>
            </article>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Publications</h2>
          <p className="lead">See the UvA profile for publications and activities.</p>
          <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a className="btn btn-outline" href="https://www.uva.nl/en/profile/b/r/f.brancodossantos/f.brancodossantos.html" target="_blank" rel="noreferrer">UvA profile</a>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <Link href="/research-groups" className="btn btn-outline">Back to all research groups</Link>
        </div>
      </div>
    </section>
  );
}
