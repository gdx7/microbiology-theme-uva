// app/research-groups/verhoef/page.tsx
import Link from "next/link";

export default function VerhoefPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Research group</p>
        <h1 className="section-title">Microbial Food Safety (Verhoef)</h1>
        <p className="lead">
          Special Chair in Microbial Food Safety focusing on the epidemiological determination of
          microbiological risks in food chains, embedded at SILS and established by the NVWA.
        </p>

        <div className="grid" style={{ marginTop: "1.6rem", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>What we do</h2>
            <p style={{ fontSize: "0.95rem" }}>
              We assess and model microbiological risks along food chains to inform public health,
              surveillance and policy.
            </p>
          </div>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.1rem" }}>How we do it</h2>
            <p style={{ fontSize: "0.95rem" }}>
              We collaborate with national partners and apply quantitative risk assessment, epidemiology
              and (meta)genomic monitoring.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Team</h2>
          <div className="grid people-grid" style={{ marginTop: "1rem" }}>
            <article className="card">
              <h3>Prof. dr. ir. Linda Verhoef</h3>
              <p style={{ marginTop: 4, color: "#64748b" }}>Professor by Special Appointment</p>
              <p style={{ marginTop: 8 }}>
                <a href="mailto:l.p.b.verhoef@uva.nl">l.p.b.verhoef@uva.nl</a>
              </p>
            </article>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>Publications & links</h2>
          <p className="lead">See the UvA profile and announcement for scope.</p>
          <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a className="btn btn-outline" href="https://www.uva.nl/en/profile/v/e/l.p.b.verhoef/l.p.b.verhoef.html" target="_blank" rel="noreferrer">UvA profile</a>
            <a className="btn btn-outline" href="https://www.uva.nl/en/shared-content/faculteiten/en/faculteit-der-natuurwetenschappen-wiskunde-en-informatica/news/2024/01/linda-verhoef-appointed-professor-by-special-appointment-of-microbial-food-safety.html" target="_blank" rel="noreferrer">Appointment news</a>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <Link href="/research-groups" className="btn btn-outline">Back to all research groups</Link>
        </div>
      </div>
    </section>
  );
}
