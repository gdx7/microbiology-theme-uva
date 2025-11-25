// app/research-groups/zhang/page.tsx
import Link from "next/link";

export default function ZhangLabPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">Zhang Lab – Microbiome–Host Interfaces</h1>
        <p className="lead">
          The lab studies microbiome–host crosstalk with a focus on gut bacteria, physiology and
          microphysiological systems (organ-on-chip) to model interfaces and mechanisms.
        </p>

        <div className="grid" style={{ marginTop: "1.6rem", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>What we do</h2>
            <p style={{ fontSize: "0.95rem" }}>
              We develop experimental systems to probe microbiome interactions with epithelial tissues
              and immune players, and explore translational applications with clinical partners.
            </p>
          </div>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>How we do it</h2>
            <p style={{ fontSize: "0.95rem" }}>
              We integrate organ-on-chip models, culture methods for oxygen-sensitive microbes, and
              multi-omics readouts to reveal mechanisms of host–microbiome communication.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Team</h2>
          <div className="grid people-grid" style={{ marginTop: "1rem" }}>
            <article className="card">
              <h3>Dr. Jianbo Zhang</h3>
              <p style={{ marginTop: 4, color: "#64748b" }}>Group leader</p>
              <p style={{ marginTop: 8 }}>
                <a href="mailto:j.zhang6@uva.nl">j.zhang6@uva.nl</a>
              </p>
            </article>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Publications & links</h2>
          <p className="lead">See profiles for publications and activity.</p>
          <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a className="btn btn-outline" href="https://scholar.google.com/citations?user=L7jjMz4AAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
            <a className="btn btn-outline" href="https://orcid.org/0000-0003-3526-4586" target="_blank" rel="noreferrer">ORCID</a>
            <a className="btn btn-outline" href="https://amsterdamumc.org/en/research/researchers/jianbo-zhang.htm" target="_blank" rel="noreferrer">Amsterdam UMC profile</a>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <Link href="/research-groups" className="btn btn-outline">Back to all research groups</Link>
        </div>
      </div>
    </section>
  );
}
