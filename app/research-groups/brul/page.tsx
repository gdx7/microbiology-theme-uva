// app/research-groups/brul/page.tsx
import Link from "next/link";

export default function BrulPIPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">Brul Group – Microbial Stress & Food Safety</h1>
        <p className="lead">
          We investigate microbial stress responses, antimicrobial resistance, spore biology and
          microbiome-related questions linked to health and food safety.
        </p>

        <div className="grid" style={{ marginTop: "1.6rem", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>What we do</h2>
            <p style={{ fontSize: "0.95rem" }}>
              Fundamental and applied microbiology to understand stress physiology, antibiotic action
              and resistance emergence in key species and consortia.
            </p>
          </div>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>How we do it</h2>
            <p style={{ fontSize: "0.95rem" }}>
              Molecular biology, quantitative physiology and model organisms (<em>E. coli</em>,
              <em> B. subtilis</em>, yeasts), in collaboration with partners across Amsterdam.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Team</h2>
          <div className="grid people-grid" style={{ marginTop: "1rem" }}>
            <article className="card">
              <h3>Prof. dr. Stanley Brul</h3>
              <p style={{ marginTop: 4, color: "#64748b" }}>Group leader</p>
              <p style={{ marginTop: 8 }}>
                <a href="mailto:s.brul@uva.nl">s.brul@uva.nl</a>
              </p>
            </article>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Publications & group info</h2>
          <p className="lead">See the MBMFS pages for scope and publications.</p>
          <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a className="btn btn-outline" href="https://sils.uva.nl/content/research-groups/molecular-biology-and-microbial-food-safety/molecular-biology--microbial-food-safety.html" target="_blank" rel="noreferrer">MBMFS overview</a>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <Link href="/research-groups" className="btn btn-outline">Back to all research groups</Link>
        </div>
      </div>
    </section>
  );
}
