// app/about/page.tsx
"use client";

import Link from "next/link";

// Research strategy to groups mapping based on the strategic plan
const researchStrategyGroups = {
  RS1: {
    title: "Human Health Related Microbiome",
    color: "#2563eb", // primary blue
    description:
      "Unravel microbial communities across hosts, ecosystems, and industrial systems. Develop predictive computational and AI-driven models to capture dynamic microbiome behavior.",
    groups: [
      { name: "Gumi Lab", pi: "Dr. Jianbo Zhang", slug: "zhang" },
      { name: "EvoSysBio Lab", pi: "Dr. Meike Wortel", slug: "wortel" },
      { name: "Spore Lab", pi: "Prof. Dr. Stanley Brul", slug: "brul" },
      { name: "Spatial SysBio Lab", pi: "Prof. Dr. Marten Postma", slug: "postma" },
      { name: "Microbiome Engineering Lab", pi: "Prof. Dr. Sahar El Aidy", slug: "el-aidy" },
      { name: "Imaging & Functional Analysis", pi: "TBD", slug: "imaging-functional-analysis" },
      { name: "Mass Spectrometry (MSB)", pi: "Dr. Gertjan Kramer", slug: "kramer" },
      { name: "Peribiomics Lab", pi: "Prof. Dr. Ghislain Schyns", slug: "schyns" },
    ],
  },
  RS2: {
    title: "Infection Biology",
    color: "#14b8a6", // teal
    description:
      "Investigate antimicrobial resistance development, characterize novel antimicrobials, elucidate pathogen-host interactions with focus on RNA-mediated mechanisms.",
    groups: [
      { name: "Spore Lab", pi: "Prof. Dr. Stanley Brul", slug: "brul" },
      { name: "Spatial SysBio Lab", pi: "Prof. Dr. Marten Postma", slug: "postma" },
      { name: "Molecular Microbial Physiology", pi: "Dr. Filipe Branco dos Santos", slug: "branco-dos-santos" },
      { name: "DNA & RNA Interaction Lab", pi: "Dr. Gaurav Dugar", slug: "drna" },
      { name: "Bacterial Cell Biology", pi: "Prof. Dr. Leendert Hamoen", slug: "hamoen" },
      { name: "NVWA Chair", pi: "Prof. Linda Verhoef", slug: "verhoef" },
    ],
  },
  RS3: {
    title: "Biotechnology",
    color: "#8b5cf6", // purple
    description:
      "Develop phototrophic bioproduction systems and next-generation microbial biotechnology platforms with focus on enzyme production and sustainable bioeconomy.",
    groups: [
      { name: "Gumi Lab", pi: "Dr. Jianbo Zhang", slug: "zhang" },
      { name: "Spore Lab", pi: "Prof. Dr. Stanley Brul", slug: "brul" },
      { name: "Molecular Microbial Physiology", pi: "Dr. Filipe Branco dos Santos", slug: "branco-dos-santos" },
      { name: "Bacterial Cell Biology", pi: "Prof. Dr. Leendert Hamoen", slug: "hamoen" },
      { name: "Microbiome Engineering Lab", pi: "Prof. Dr. Sahar El Aidy", slug: "el-aidy" },
      { name: "Mass Spectrometry (MSB)", pi: "Dr. Gertjan Kramer", slug: "kramer" },
      { name: "Peribiomics Lab", pi: "Prof. Dr. Ghislain Schyns", slug: "schyns" },
    ],
  },
};

// SVG icons for each research strategy
const RS1Icon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="8" strokeDasharray="4 2" />
    <circle cx="6" cy="8" r="1.5" fill="currentColor" />
    <circle cx="18" cy="8" r="1.5" fill="currentColor" />
    <circle cx="6" cy="16" r="1.5" fill="currentColor" />
    <circle cx="18" cy="16" r="1.5" fill="currentColor" />
    <line x1="7.5" y1="8" x2="9" y2="10" />
    <line x1="16.5" y1="8" x2="15" y2="10" />
    <line x1="7.5" y1="16" x2="9" y2="14" />
    <line x1="16.5" y1="16" x2="15" y2="14" />
  </svg>
);

const RS2Icon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
    <circle cx="12" cy="12" r="4" />
    <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
  </svg>
);

const RS3Icon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6v6l3 3-3 3v6H9v-6l-3-3 3-3V3z" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M12 6v2m0 8v2" />
  </svg>
);

const icons = { RS1: RS1Icon, RS2: RS2Icon, RS3: RS3Icon };

export default function AboutPage() {
  return (
    <section className="section page-with-watermark">
      <div className="container">
        <p className="section-kicker">About</p>
        <h1 className="section-title">Microbiology Theme at SILS</h1>
        <p className="lead">
          The Microbiology Theme at the Swammerdam Institute for Life Sciences
          (SILS), Faculty of Science, University of Amsterdam, is a dynamic and
          interdisciplinary collective focused on understanding and applying
          microbial biology to address critical societal challenges defined by
          the UN Sustainable Development Goals (SDGs).
        </p>

        {/* Purpose, vision & strategic aims */}
        <div
          className="grid"
          style={{
            marginTop: "1.6rem",
            gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1.1fr)",
          }}
        >
          <article className="card">
            <h2
              className="section-title"
              style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}
            >
              Purpose &amp; Vision
            </h2>
            <p style={{ fontSize: "0.95rem" }}>
              The Theme&apos;s purpose is to advance fundamental knowledge of
              microbial systems and apply it to sustainable, societally relevant
              solutions. Our vision recognizes microbial life in ecosystems as
              essential to human health, environmental ecosystems, and industry.
            </p>
            <p style={{ fontSize: "0.95rem", marginTop: "0.6rem" }}>
              We aim to reduce antimicrobial resistance (AMR), ensure food
              safety, foster a circular bioeconomy, and promote healthy human
              development through our research pillars in Human health related
              microbiome, Infection biology, and Biotechnology.
            </p>
          </article>

          <article className="card">
            <h2
              className="section-title"
              style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}
            >
              Strategic Aims
            </h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.1rem",
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              <li>
                Lead internationally recognized research that defines the
                frontiers of microbiology.
              </li>
              <li>
                Catalyze interdisciplinary innovation at the interface of
                microbiomes, infection biology, and biotechnology.
              </li>
              <li>
                Translate microbial insights into societal impact, addressing
                AMR, food safety, and sustainable bioeconomy.
              </li>
              <li>
                Train the next generation of microbiologists through inclusive,
                high-quality education and mentorship.
              </li>
              <li>
                Ensure organizational resilience and sustainable growth for
                long-term scientific relevance.
              </li>
            </ul>
          </article>
        </div>

        {/* Research strategy RS1–RS3 with visual group mapping */}
        <div style={{ marginTop: "2.8rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.3rem" }}>
            Research Strategy
          </h2>
          <p className="lead" style={{ marginBottom: "1.5rem" }}>
            Our research strategy is built on three thematic pillars that foster
            cross-group collaboration. Below you can see which research groups
            contribute to each strategic pillar.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {Object.entries(researchStrategyGroups).map(([key, strategy]) => {
              const Icon = icons[key as keyof typeof icons];
              return (
                <div
                  key={key}
                  style={{
                    background: "var(--bg-elevated)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border-subtle)",
                    boxShadow: "var(--shadow-md)",
                    overflow: "hidden",
                  }}
                >
                  {/* Strategy Header */}
                  <div
                    style={{
                      padding: "1.5rem 2rem",
                      background: `linear-gradient(135deg, ${strategy.color}15 0%, ${strategy.color}08 100%)`,
                      borderBottom: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "var(--radius-md)",
                        background: `linear-gradient(135deg, ${strategy.color} 0%, ${strategy.color}cc 100%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      <Icon />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: strategy.color,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                        }}
                      >
                        <span
                          style={{
                            background: strategy.color,
                            color: "white",
                            padding: "0.25rem 0.6rem",
                            borderRadius: "var(--radius-sm)",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                          }}
                        >
                          {key}
                        </span>
                        {strategy.title}
                      </h3>
                      <p
                        style={{
                          margin: "0.5rem 0 0",
                          fontSize: "0.95rem",
                          color: "var(--text-soft)",
                          lineHeight: 1.6,
                        }}
                      >
                        {strategy.description}
                      </p>
                    </div>
                  </div>

                  {/* Contributing Groups */}
                  <div style={{ padding: "1.25rem 2rem" }}>
                    <p
                      style={{
                        margin: "0 0 0.75rem",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--text-muted)",
                      }}
                    >
                      Contributing Research Groups
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.6rem",
                      }}
                    >
                      {strategy.groups.map((group) => (
                        <Link
                          key={group.slug}
                          href={`/research-groups#${group.slug}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.5rem 0.9rem",
                            borderRadius: "var(--radius-md)",
                            background: `${strategy.color}10`,
                            border: `1px solid ${strategy.color}30`,
                            fontSize: "0.85rem",
                            color: "var(--text-main)",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `${strategy.color}20`;
                            e.currentTarget.style.borderColor = strategy.color;
                            e.currentTarget.style.transform = "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = `${strategy.color}10`;
                            e.currentTarget.style.borderColor = `${strategy.color}30`;
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background: strategy.color,
                            }}
                          />
                          <span style={{ fontWeight: 500 }}>{group.name}</span>
                          <span
                            style={{
                              color: "var(--text-muted)",
                              fontSize: "0.8rem",
                            }}
                          >
                            ({group.pi})
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cross-pillar Hub note */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.5rem",
              background: "linear-gradient(135deg, var(--accent-soft) 0%, rgba(139, 92, 246, 0.08) 100%)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-medium)",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h4 style={{ margin: "0 0 0.3rem", fontSize: "1rem", fontWeight: 600, color: "var(--text-main)" }}>
                Cross-pillar Microbiome-Infection-Biotechnology Hub
              </h4>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-soft)", lineHeight: 1.6 }}>
                A platform that unites expertise, technology, and insight from all three domains for transformative interdisciplinary projects that none of the individual pillars could achieve alone.
              </p>
            </div>
          </div>
        </div>

        {/* Education & training */}
        <div style={{ marginTop: "2.8rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
            Education &amp; Training
          </h2>
          <div
            className="grid"
            style={{
              marginTop: "1rem",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            }}
          >
            <article className="card">
              <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                Program Contributions
              </h3>
              <p style={{ fontSize: "0.9rem" }}>
                We contribute to Bachelor and Master programs in Biology,
                Biomedical Sciences, Psychobiology, Science Technology &amp;
                Innovation (ST&amp;I), and Bioinformatics &amp; Systems Biology,
                embedding state-of-the-art research in the curriculum.
              </p>
            </article>
            <article className="card">
              <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                MSc Microbiome Track
              </h3>
              <p style={{ fontSize: "0.9rem" }}>
                A new MSc Microbiome Track under the Holomicrobiome initiative
                covers microbiome ecology, synthetic communities, and
                host-microbe interactions with a strong focus on
                research-driven learning for Dutch and international students.
              </p>
            </article>
          </div>
        </div>

        {/* Strategic connections */}
        <div style={{ marginTop: "2.8rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
            Strategic Connections
          </h2>
          <p className="lead" style={{ marginBottom: "1rem" }}>
            The Theme drives partnerships connecting academia, healthcare,
            industry, and policy.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {[
              { name: "AMEC", desc: "Amsterdam Microbiome Expertise Center" },
              { name: "DSM-Firmenich", desc: "Industrial biotechnology partnership" },
              { name: "NVWA", desc: "Food safety & regulatory policy" },
              { name: "Holomicrobiome", desc: "NGF national microbiome program" },
              { name: "Micropia & NEMO", desc: "Public engagement & outreach" },
            ].map((partner) => (
              <div
                key={partner.name}
                style={{
                  padding: "1rem 1.25rem",
                  borderRadius: "var(--radius-md)",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  borderLeft: "3px solid var(--primary)",
                }}
              >
                <h4
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text-main)",
                  }}
                >
                  {partner.name}
                </h4>
                <p
                  style={{
                    margin: "0.25rem 0 0",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
