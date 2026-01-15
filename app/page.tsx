// app/page.tsx
import Image from "next/image";
import NewsRotator from "./components/NewsRotator";
import { researchGroups } from "@/data/researchGroups";
import { researchAreas } from "@/data/researchAreas";

export default function Home() {
  const groups = researchGroups as any[];
  const areas = researchAreas as any[];

  const stats = [
    { label: "News", value: "", href: "/news" },
    { label: "Upcoming seminars", value: "", href: "/seminars" },
    { label: "Latest publications", value: "", href: "/publications" },
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
                <a key={s.label} href={s.href} className="stat-card stat-card-clickable">
                  <div className="stat-label">{s.label}</div>
                </a>
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
            {areas.map((area: any) => {
              // Define icon for each research area
              const getIcon = (slug: string) => {
                switch(slug) {
                  case 'molecular-biology-microbial-food-safety':
                    return (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/>
                        <path d="M8.5 2h7"/>
                        <path d="M7 16h10"/>
                      </svg>
                    );
                  case 'bacterial-cell-biology':
                    return (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="12" rx="7" ry="10"/>
                        <path d="M12 2v20"/>
                        <path d="M5.5 9c1.5-1 4-1.5 6.5-1.5s5 .5 6.5 1.5"/>
                        <path d="M5.5 15c1.5 1 4 1.5 6.5 1.5s5-.5 6.5-1.5"/>
                      </svg>
                    );
                  case 'microbiome-engineering':
                    return (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="7" cy="7" r="3"/>
                        <circle cx="17" cy="7" r="3"/>
                        <circle cx="7" cy="17" r="3"/>
                        <circle cx="17" cy="17" r="3"/>
                        <circle cx="12" cy="12" r="2"/>
                        <path d="M9.5 8.5l2 2"/>
                        <path d="M14.5 8.5l-2 2"/>
                        <path d="M9.5 15.5l2-2"/>
                        <path d="M14.5 15.5l-2-2"/>
                      </svg>
                    );
                  case 'cross-theme-expertise':
                    return (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                    );
                  case 'core-facilities':
                    return (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                      </svg>
                    );
                  default:
                    return null;
                }
              };

              return (
                <a
                  key={area.slug}
                  href={`/research-groups#${area.slug}`}
                  className="card research-area-card"
                >
                  <div className="research-area-icon">
                    {getIcon(area.slug)}
                  </div>
                  <div className="research-area-content">
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                    <span className="research-area-link">
                      View groups in this area →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
