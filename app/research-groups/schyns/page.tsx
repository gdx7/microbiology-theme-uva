// app/research-groups/schyns/page.tsx

export default function SchynsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Cross-theme Expertise · Peribiomics Lab</p>
        <h1 className="section-title">Peribiomics Lab</h1>
        <p className="lead">
          <strong>Principal Investigator:</strong> Prof. Dr. Ghislain Schyns
          <br />
          <em>
            Professor by special appointment of Industrial Molecular
            Microbiology
          </em>
        </p>

        <div style={{ marginTop: "3rem" }}>
          <h2 className="section-title" style={{ fontSize: "2rem" }}>
            What We Do
          </h2>
          <p className="lead">
            We focus on peripheral (skin, nasal, mouth) microbiomes interactions
            with gut microbiomes and host, to study the so-called axes and their
            network (peribiomics).
          </p>

          <h2
            className="section-title"
            style={{ fontSize: "2rem", marginTop: "3rem" }}
          >
            How We Do It
          </h2>
          <p className="lead">
            We set up bilateral physiomimetical dynamic models to study molecular
            signals and spatial biology during the dynamic interactions. Beyond
            collaborations with other groups involved in microbiome topics within
            the SILS Microbiology theme, we team up with neuroscience,
            dermatology, internal medicine and the attached clinical experts.
          </p>

          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Research Focus Areas
          </h3>
          <ul
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--text-soft)",
              paddingLeft: "1.5rem",
            }}
          >
            <li>Peripheral microbiomes (skin, nasal, oral cavities)</li>
            <li>Gut-peripheral microbiome axes and interactions</li>
            <li>Host-microbiome molecular signaling</li>
            <li>Spatial biology of microbiome interactions</li>
            <li>Physiomimetical dynamic models</li>
            <li>Industrial molecular microbiology applications</li>
          </ul>

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
              Prof. Dr. Ghislain R.L.J. Schyns
            </h4>
            <p style={{ marginBottom: "0.75rem" }}>
              Professor Ghislain Schyns holds the DSM-Firmenich Beta-Plus
              Foundation Chair of Industrial Molecular Microbiology at the
              University of Amsterdam. His research bridges fundamental microbiome
              science with industrial applications, focusing on peripheral
              microbiomes and their interactions with gut microbiomes and the
              host.
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              <a
                href="https://www.uva.nl/en/profile/s/c/g.r.l.j.schyns/g.r.l.j.schyns.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                UvA Profile: Prof. dr. G.R.L.J. (Ghislain) Schyns
              </a>
            </p>
            <p style={{ marginBottom: 0 }}>
              <a
                href="https://sils.uva.nl/content/news/2024/06/ghislain-schyns-appointed-professor-by-special-appointment-of-industrial-molecular-microbiology.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Appointment news: Ghislain Schyns appointed professor by special
                appointment of Industrial Molecular Microbiology
              </a>
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
            Team Members
          </h3>
          <div className="grid people-grid" style={{ marginTop: "1.5rem" }}>
            <div className="card">
              <h4 style={{ marginTop: 0, fontSize: "1.125rem" }}>Mila Wijers</h4>
              <p style={{ marginBottom: 0, color: "var(--text-muted)" }}>
                Student
              </p>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0, fontSize: "1.125rem" }}>
                Izabella Farkas
              </h4>
              <p style={{ marginBottom: 0, color: "var(--text-muted)" }}>
                Student
              </p>
            </div>
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
            The Peribiomics Lab maintains active collaborations with:
          </p>
          <ul
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--text-soft)",
              paddingLeft: "1.5rem",
            }}
          >
            <li>Other microbiome research groups within SILS Microbiology theme</li>
            <li>Neuroscience departments</li>
            <li>Dermatology research groups</li>
            <li>Internal medicine specialists</li>
            <li>Clinical experts in related fields</li>
            <li>DSM-Firmenich and industrial partners</li>
          </ul>

          <div
            className="card"
            style={{
              marginTop: "3rem",
              background: "var(--accent-soft)",
              borderColor: "var(--primary)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Industrial Partnership</h3>
            <p style={{ marginBottom: 0 }}>
              This research is supported by the DSM-Firmenich Beta-Plus Foundation
              Chair of Industrial Molecular Microbiology, strengthening the
              connection between academic microbiome research and industrial
              biotechnology applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
