import Image from "next/image";
import { researchGroups } from "@/data/researchGroups";
import NewsCarousel from "./components/NewsCarousel";

export default function Home() {
  const featured = researchGroups.slice(0, 3);

  return (
    <div className="hero-wrap">
      <section className="hero">
        <div className="container">
          <p className="section-kicker">Swammerdam Institute for Life Sciences (SILS) · University of Amsterdam</p>
          <h1>Microbiology Theme at SILS — embedded in UvA’s life sciences community</h1>
          <p>
            We investigate microbes from genes to communities and translate insights to health, industry, and the
            environment—within SILS at UvA, and connected to Amsterdam-wide initiatives.
          </p>
          <div style={{ display:"flex", gap:".75rem", marginTop:"1rem", flexWrap:"wrap" }}>
            <a className="btn btn-primary" href="/research-groups">Explore research groups</a>
            <a className="btn btn-ghost" href="/about">About the theme</a>
          </div>
        </div>
      </section>

      {/* News carousel (images rotate every few seconds) */}
      <section className="section" style={{ background:"#fff", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)" }}>
        <div className="container">
          <p className="section-kicker">News & Publications</p>
          <NewsCarousel />
        </div>
      </section>

      {/* Research highlights (Broad-style “Programs & Platforms” feel) */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Research highlights</h2>
          <div className="grid">
            {featured.map((g) => (
              <article key={g.slug} className="card">
                <Image src={`/images/groups/${g.slug}.jpg`} alt={`${g.name} image`} width={640} height={360}
                  style={{ width:"100%", height:"auto", borderRadius:10, border:"1px solid var(--line)" }} />
                <h3 style={{ marginTop: ".5rem" }}>{g.name}</h3>
                <p style={{ color:"var(--muted)" }}>{g.shortDescription}</p>
                <a href={`/research-groups/${g.slug}`} className="btn btn-ghost" style={{ marginTop: ".4rem" }}>
                  View group →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations (AMEC / RPAs from UvA page) */}
      <section className="section" style={{ background:"#fff", borderTop:"1px solid var(--line)" }}>
        <div className="container">
          <p className="section-kicker">Networks & Collaborations</p>
          <div className="logo-strip">
            <Image src="/logos/amec-logo.png" alt="Amsterdam Microbiome Expertise Center" width={120} height={36} />
            <Image src="/logos/uva-rpa-pmh.png" alt="UvA Research Priority Area: Personal Microbiome Health" width={140} height={36} />
            <Image src="/logos/uva-rpa-systems-biology.png" alt="UvA Faculty Research Priority: Systems Biology" width={160} height={36} />
          </div>
          <p className="lead" style={{ marginTop: ".6rem" }}>
            Microbiology at UvA connects with AMEC and Research Priority Areas in Amsterdam. {/* UvA theme page summary */}
          </p>
        </div>
      </section>
    </div>
  );
}
