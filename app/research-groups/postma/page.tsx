// app/research-groups/postma/page.tsx

export default function PostmaPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">MBMFS · Spatial SysBio Lab</p>
        <h1 className="section-title">Spatial SysBio Lab</h1>
        <p className="lead">
          <strong>Principal Investigator:</strong> Prof. Dr. Marten Postma
        </p>

        <div style={{ marginTop: "3rem" }}>
          <h2 className="section-title" style={{ fontSize: "2rem" }}>
            Research Focus
          </h2>
          <p className="lead">
            The Spatial SysBio Lab investigates spatial aspects of signal
            transduction and regulation using systems biology approaches. We
            combine molecular biology, quantitative imaging, and computational
            modeling to understand cellular organization and decision-making
            processes in microbial systems.
          </p>

          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Research Areas
          </h3>
          <ul
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--text-soft)",
              paddingLeft: "1.5rem",
            }}
          >
            <li>
              Spatial systems biology of signal transduction pathways
            </li>
            <li>
              Cell polarity regulation and membrane organization
            </li>
            <li>
              Quantitative imaging and computational modeling of cellular
              processes
            </li>
            <li>
              Integration of molecular biology with systems-level approaches
            </li>
            <li>
              Understanding cellular decision-making and organization
            </li>
          </ul>

          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Approach
          </h3>
          <p style={{ fontSize: "1rem", color: "var(--text-soft)", lineHeight: 1.7 }}>
            Our research combines experimental and theoretical approaches to
            understand how spatial organization influences signal transduction
            and cellular regulation. We use advanced imaging techniques,
            molecular biology tools, and computational modeling to study these
            processes at multiple scales, from molecular interactions to
            whole-cell behavior.
          </p>

          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Principal Investigator
          </h3>
          <div
            className="card"
            style={{ maxWidth: "800px", marginTop: "1.5rem" }}
          >
            <h4 style={{ marginTop: 0, marginBottom: "0.75rem", fontSize: "1.25rem" }}>
              Prof. Dr. Marten Postma
            </h4>
            <p style={{ marginBottom: "0.5rem" }}>
              Professor Marten Postma leads the Spatial SysBio Lab, bringing
              expertise in signal transduction, cell polarity, and quantitative
              biology. His research focuses on understanding how spatial
              organization shapes cellular function using integrated
              experimental and computational approaches.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>Expertise:</strong> Signal transduction, cell polarity,
              quantitative imaging, computational modeling, systems biology
            </p>
          </div>

          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Collaborations
          </h3>
          <p style={{ fontSize: "1rem", color: "var(--text-soft)", lineHeight: 1.7 }}>
            The Spatial SysBio Lab collaborates with other groups within the
            SILS Microbiology theme and beyond, integrating expertise in
            molecular biology, cell biology, and computational modeling to
            address fundamental questions in microbial physiology and cellular
            organization.
          </p>

          <div
            className="card"
            style={{
              marginTop: "3rem",
              background: "var(--accent-soft)",
              borderColor: "var(--primary)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Contact</h3>
            <p style={{ marginBottom: 0 }}>
              For more information about the Spatial SysBio Lab or potential
              collaborations, please visit the{" "}
              <a
                href="https://www.martenpostma.nl"
                target="_blank"
                rel="noopener noreferrer"
              >
                lab website
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
