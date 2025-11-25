// app/research-groups/el-aidy/page.tsx
import Link from "next/link";

export default function ElAidyPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">Microbiome Engineering (El Aidy Lab)</h1>
        <p className="lead">
          We bridge clinical reality and experimental innovation to study how the gut microbiome
          functions in health and disease, and how we can engineer it for better outcomes.
        </p>

        <div className="grid" style={{ marginTop: "1.6rem", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>What we do</h2>
            <p style={{ fontSize: "0.95rem" }}>
              We investigate host–microbiome crosstalk across life stages and diseases, developing
              strategies to modulate microbial communities and metabolites to benefit the host.
            </p>
          </div>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>How we do it</h2>
            <p style={{ fontSize: "0.95rem" }}>
              Using microbiome engineering, ex vivo/in vitro models and multi-omics read-outs, the lab
              links mechanistic insight to translational opportunities in collaboration with clinical partners.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Team</h2>
          <div className="grid people-grid" style={{ marginTop: "1rem" }}>
            <article className="card">
              <h3>Prof. dr. Sahar El Aidy</h3>
              <p style={{ marginTop: 4, color: "#64748b" }}>Professor & Chair, Microbiome Engineering</p>
              <p style={{ marginTop: 8 }}>
                <a href="mailto:s.elaidy@uva.nl">s.elaidy@uva.nl</a>
              </p>
            </article>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Publications</h2>
          <p className="lead">See the lab site and UvA profile for publications.</p>
          <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a className="btn btn-outline" href="https://www.elaidylab.org/" target="_blank" rel="noreferrer">El Aidy Lab website</a>
            <a className="btn btn-outline" href="https://www.uva.nl/en/profile/e/l/s.el-aidy/s.el-aidy.html" target="_blank" rel="noreferrer">UvA profile</a>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <Link href="/research-groups" className="btn btn-outline">Back to all research groups</Link>
        </div>
      </div>
    </section>
  );
}
