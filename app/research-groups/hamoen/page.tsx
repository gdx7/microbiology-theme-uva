// app/research-groups/hamoen/page.tsx
import Link from "next/link";

function GroupNav({ labUrl }: { labUrl?: string }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "1rem" }}>
      <a href="#what" className="btn btn-outline">What we do</a>
      <a href="#how" className="btn btn-outline">How we do it</a>
      <a href="#team" className="btn btn-outline">Team</a>
      <a href="#publications" className="btn btn-outline">Publications</a>
      {labUrl && <a href={labUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Lab website</a>}
    </div>
  );
}

export default function HamoenPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">Bacterial Cell Biology &amp; Physiology (Hamoen)</h1>
        <p className="lead">Fundamental mechanisms of bacterial cell division and envelope biology.</p>

        <GroupNav />

        <div className="grid" style={{ marginTop: "1.6rem", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
          <div id="what">
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>What we do</h2>
            <p style={{ fontSize: "0.95rem" }}>Division machineries, membrane organisation, stress responses; antibiotic-relevant targets.</p>
          </div>
          <div id="how">
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>How we do it</h2>
            <p style={{ fontSize: "0.95rem" }}>Genetics + advanced fluorescence microscopy in <em>Bacillus subtilis</em>; quantitative physiology & systems biology.</p>
          </div>
        </div>

        <div id="team" style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Team</h2>
          <div className="grid people-grid" style={{ marginTop: "1rem" }}>
            <article className="card">
              <h3>Prof. dr. Leendert W. Hamoen</h3>
              <p style={{ marginTop: 4, color:"#64748b" }}>Group leader</p>
              <p style={{ marginTop: 8 }}><a href="mailto:L.W.Hamoen@uva.nl">L.W.Hamoen@uva.nl</a></p>
            </article>
          </div>
        </div>

        <div id="publications" style={{ marginTop: "2.2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Publications</h2>
          <p className="lead">See profiles for publications.</p>
          <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a className="btn btn-outline" href="https://www.uva.nl/en/profile/h/a/l.w.hamoen/l.w.hamoen.html" target="_blank" rel="noreferrer">UvA profile</a>
            <a className="btn btn-outline" href="https://orcid.org/000-0001-9251-1403" target="_blank" rel="noreferrer">ORCID</a>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <Link href="/research-groups" className="btn btn-outline">Back to all research groups</Link>
        </div>
      </div>
    </section>
  );
}
