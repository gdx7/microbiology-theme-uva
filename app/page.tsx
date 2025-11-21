// app/page.tsx
import Image from "next/image";
import NewsRotator from "./components/NewsRotator";
import { researchGroups } from "@/data/researchGroups";
import { researchAreas } from "@/data/researchAreas";

export default function Home() {
  const groups = researchGroups as any[];
  const areas = researchAreas as any[];

  const groupCount = groups.length;

  const stats = [
    { label: "Research groups", value: `${groupCount}` },
    { label: "Upcoming seminars", value: "AMSA · AMEC" },
    { label: "Latest publications", value: "Theme highlights" },
  ];

  return (
    <div className="hero-wrap">
      {/* HERO */}
      <section id="hero" className="hero">
        <div className="container hero-inner">
          <div className="animate-fade-up">
            <p className="section-kicker">
              Swammerdam Institute for Life Sciences              
            </p>
            <p className="section-kicker">
              University of Amsterdam
            </p>
            <h1>Microbiology Theme at SILS</h1>
            <p>
              Microorganisms shape our health, food and environment. The
              Microbiology theme at SILS studies how microbes grow, communicate
              and interact with hosts, and translates this knowledge into
              applications for health, industry and sustainability.
            </p>

            <div className="hero-cta">
              <a className="btn btn-primary" href="/research-groups">
                Explore research groups
              </a>
              <a className="btn btn-ghost" href="/about">
                About the theme
              </a>
            </div>

            <div className="stats-strip stats-strip-home">
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-value">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-illustration animate-fade-in">
            <Image
              src="/homepage.png"
              alt="Microbiology theme at SILS"
              width={800}
              height={400}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="section">
        <div className="container">
          <p className="section-kicker">News & context</p>
          <h2 className="section-title">Microbiology across Amsterdam</h2>
          <p className="lead">
            The theme is connected to Research Priority Areas on Personal
            Microbiome Health and Systems Biology, and to the Amsterdam
            Microbiome Expertise Center (AMEC) and AMSA seminar series.
          </p>

          {/* NewsRotator is now inside .news-rotator glass box */}
          <NewsRotator />
        </div>
      </section>

      {/* RESEARCH AREAS ONLY – vertical, clickable list */}
      <section id="research" className="section">
        <div className="container">
          <p className="section-kicker">Research areas</p>
          <h2 className="section-title">How microbiology at SILS is organised</h2>
          <p className="lead">
            The Microbiology theme at SILS consists of research groups on
            microbial food safety and microbiomes, bacterial cell biology and
            physiology, microbiome engineering, and mass spectrometry of
            biomolecules, complemented by additional PIs embedded in these
            areas.
          </p>

          <div className="research-areas-list">
            {areas.map((area: any) => (
              <a
                key={area.slug}
                href={`/research-groups#${area.slug}`}
                className="card"
              >
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className="research-area-link">
                  View groups in this area →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
