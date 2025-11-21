// app/teaching/page.tsx

export default function TeachingPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Teaching</p>
        <h1 className="section-title">Teaching & education</h1>
        <p className="lead">
          Staff from the Microbiology theme contribute to several Bachelor and Master
          programmes at the University of Amsterdam, combining fundamental microbiology
          with quantitative and molecular approaches.
        </p>

        <div style={{ marginTop: "1.4rem" }}>
          <h2 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            Degree programmes
          </h2>
          <ul style={{ paddingLeft: "1.1rem", lineHeight: 1.7 }}>
            <li>BSc Biology &mdash; Microbiology track</li>
            <li>MSc Biological Sciences &mdash; Microbial Systems Biology</li>
            <li>Advanced practicals in genomics, microbial ecology, and immunology</li>
          </ul>

          <p style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
            In the final version of this site, this section can link to the official UvA
            study guide and to example projects or thesis opportunities for students.
          </p>
        </div>
      </div>
    </section>
  );
}
