// app/research-groups/hamoen/page.tsx
import Link from "next/link";

export default function HamoenPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">Bacterial Cell Biology &amp; Physiology (Hamoen)</h1>
        <p className="lead">
          We study the fundamental mechanisms of bacterial cell division and cell-envelope biology,
          using <em>Bacillus subtilis</em> and related models to understand dynamic protein assemblies and antibiotic action.
        </p>

        <div className="grid" style={{ marginTop: "1.6rem", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>What we do</h2>
            <p style={{ fontSize: "0.95rem" }}>
              Our work focuses on bacterial cell division machineries, membrane organization and stress responses,
              aiming to reveal targets and concepts relevant to antimicrobial strategies.
            </p>
          </div>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>How we do it</h2>
            <p style={{ fontSize: "0.95rem" }}>
              We combine molecular genetics with advanced fluorescence microscopy and quantitative physiology in
              <em> B. subtilis</em>, supported by systems biology and collaborations within SILS.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Team</h2>
          <div className="grid people-grid" style={{ marginTop: "1rem" }}>
            <article className="card">
              <h3>Prof. dr. Leendert W. Hamoen</h3>
              <p style={{ marginTop: 4, color: "#64748b" }}>Group leader</p>
              <p style={{ marginTop: 8 }}>
                <a href="mailto:L.W.Hamoen@uva.nl">L.W.Hamoen@uva.nl</a>
              </p>
            </article>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Publications</h2>
          <p className="lead">See the UvA profile for publications and activities.</p>
          <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a className="btn btn-outline" href="https://www.uva.nl/en/profile/h/a/l.w.hamoen/l.w.hamoen.html" target="_blank" rel="noreferrer">UvA profile</a>
            <a className="btn btn-outline" href="https://orcid.org/0000-0001-9251-1403" target="_blank" rel="noreferrer">ORCID</a>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <Link href="/research-groups" className="btn btn-outline">Back to all research groups</Link>
        </div>
      </div>
    </section>
  );
}
