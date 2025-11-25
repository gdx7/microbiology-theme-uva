// app/research-groups/wortel/page.tsx
import Link from "next/link";

export default function WortelLabPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">Wortel Lab</h1>
        <p className="lead">
          The lab explores evolutionary and systems biology of microbes, from metabolic strategies
          to antibiotic resistance dynamics and gut microbiome function.
        </p>

        <div className="grid" style={{ marginTop: "1.6rem", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>What we do</h2>
            <p style={{ fontSize: "0.95rem" }}>
              We study how microbial populations adapt and allocate resources, and how constraints
              shape growth, fitness and coexistence across environments.
            </p>
          </div>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>How we do it</h2>
            <p style={{ fontSize: "0.95rem" }}>
              We combine quantitative experiments with computational modeling and data-driven analysis,
              and collaborate widely within SILS and beyond.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Team</h2>
          <div className="grid people-grid" style={{ marginTop: "1rem" }}>
            <article className="card">
              <h3>Dr. Meike Wortel</h3>
              <p style={{ marginTop: 4, color: "#64748b" }}>Group leader</p>
              <p style={{ marginTop: 8 }}>
                <a href="mailto:m.t.wortel@uva.nl">m.t.wortel@uva.nl</a>
              </p>
            </article>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Publications & lab site</h2>
          <p className="lead">See the UvA profile and lab website for research and publications.</p>
          <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a className="btn btn-outline" href="https://www.uva.nl/profiel/w/o/m.t.wortel/m.t.wortel.html" target="_blank" rel="noreferrer">UvA profile</a>
            <a className="btn btn-outline" href="https://www.meikewortel.com" target="_blank" rel="noreferrer">Lab website</a>
            <a className="btn btn-outline" href="https://twitter.com/meikewortel" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <Link href="/research-groups" className="btn btn-outline">Back to all research groups</Link>
        </div>
      </div>
    </section>
  );
}
