// app/about/page.tsx
"use client";

import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

// Research strategy to groups mapping based on the strategic plan
const researchStrategyGroups = {
  RS1: {
    title: "Human Health Related Microbiome",
    color: "#102a43", // academic navy
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
    color: "#243b53", // teal/academic variation
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
    color: "#334e68", // purple/academic variation
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
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
    <circle cx="12" cy="12" r="4" />
    <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
  </svg>
);

const RS3Icon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6v6l3 3-3 3v6H9v-6l-3-3 3-3V3z" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M12 6v2m0 8v2" />
  </svg>
);

const icons = { RS1: RS1Icon, RS2: RS2Icon, RS3: RS3Icon };

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden selection:bg-uva-red selection:text-white bg-academic-50 min-h-screen">
      <section className="relative pt-12 pb-12 border-b border-academic-200 overflow-hidden bg-gradient-to-br from-white via-academic-50 to-academic-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex gap-2 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-uva-red mb-4 bg-uva-red/5 px-4 py-1.5 rounded-full border border-uva-red/10">
              About
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-academic-900 leading-[1.1] mb-6">
              Microbiology Theme <span className="text-academic-400 font-light italic">at SILS</span>
            </h1>
            <p className="text-lg md:text-xl text-academic-600 leading-relaxed max-w-3xl font-light">
              The Microbiology Theme at the Swammerdam Institute for Life Sciences (SILS), Faculty of Science, University of Amsterdam, is a dynamic and interdisciplinary collective focused on understanding and applying microbial biology to address critical societal challenges defined by the UN Sustainable Development Goals (SDGs).
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 space-y-32">
        {/* Purpose, vision & strategic aims */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="up" delay={0.2} className="h-full">
            <article className="bg-white/60 backdrop-blur-lg rounded-3xl p-10 md:p-14 border border-academic-200 shadow-lg hover:shadow-xl transition-shadow duration-500 h-full relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-academic-300 group-hover:bg-uva-red transition-colors duration-500"></div>
              <h2 className="font-serif text-3xl font-bold text-academic-900 mb-6">Purpose & Vision</h2>
              <p className="text-lg text-academic-600 leading-relaxed font-light mb-6">
                The Theme&apos;s purpose is to advance fundamental knowledge of microbial systems and apply it to sustainable, societally relevant solutions. Our vision recognizes microbial life in ecosystems as essential to human health, environmental ecosystems, and industry.
              </p>
              <p className="text-lg text-academic-600 leading-relaxed font-light">
                We aim to reduce antimicrobial resistance (AMR), ensure food safety, foster a circular bioeconomy, and promote healthy human development through our research pillars in Human health related microbiome, Infection biology, and Biotechnology.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3} className="h-full">
            <article className="bg-academic-900 text-white rounded-3xl p-10 md:p-14 border border-academic-800 shadow-xl overflow-hidden relative h-full">
              {/* Decorative abstract pattern */}
              <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl pointer-events-none">
                <div className="w-32 h-32 rounded-full border-4 border-white border-dashed"></div>
              </div>
              <h2 className="font-serif text-3xl font-bold mb-8">Strategic Aims</h2>
              <ul className="space-y-4 text-academic-100 font-light leading-relaxed">
                <li className="flex items-start">
                  <span className="text-uva-red mr-3 mt-1">●</span>
                  <span>Lead internationally recognized research that defines the frontiers of microbiology.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-uva-red mr-3 mt-1">●</span>
                  <span>Catalyze interdisciplinary innovation at the interface of microbiomes, infection biology, and biotechnology.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-uva-red mr-3 mt-1">●</span>
                  <span>Translate microbial insights into societal impact, addressing AMR, food safety, and sustainable bioeconomy.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-uva-red mr-3 mt-1">●</span>
                  <span>Train the next generation of microbiologists through inclusive, high-quality education and mentorship.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-uva-red mr-3 mt-1">●</span>
                  <span>Ensure organizational resilience and sustainable growth for long-term scientific relevance.</span>
                </li>
              </ul>
            </article>
          </ScrollReveal>
        </section>

        {/* Research strategy RS1–RS3 */}
        <section>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mb-16 max-w-3xl">
              <h2 className="font-serif text-4xl font-bold text-academic-900 mb-6">Research Strategy</h2>
              <p className="text-xl text-academic-600 leading-relaxed font-light">
                Our research strategy is built on three thematic pillars that foster cross-group collaboration. Below you can see which research groups contribute to each strategic pillar.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {Object.entries(researchStrategyGroups).map(([key, strategy], idx) => {
              const Icon = icons[key as keyof typeof icons];
              return (
                <ScrollReveal key={key} direction="up" delay={0.2 + (idx * 0.1)}>
                  <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-academic-200 shadow-md transition-all duration-300 hover:shadow-lg group">
                    <div className="p-8 md:p-12 lg:flex gap-12 items-start border-b border- академик -100/50 bg-gradient-to-r from-academic-50/50 to-transparent">
                      <div className="flex-1">
                        <div className="flex items-center gap-6 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-academic-900 text-white flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500">
                            <Icon />
                          </div>
                          <div>
                            <span className="px-3 py-1 bg-academic-200 text-academic-800 rounded-lg text-xs font-black uppercase tracking-widest mb-2 inline-block">
                              {key}
                            </span>
                            <h3 className="text-2xl font-bold text-academic-900">
                              {strategy.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-academic-600 leading-relaxed font-light text-lg">
                          {strategy.description}
                        </p>
                      </div>

                      <div className="flex-1 mt-10 lg:mt-0">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-academic-400 mb-6">Contributing Groups</h4>
                        <div className="flex flex-wrap gap-3">
                          {strategy.groups.map((group) => (
                            <Link
                              key={group.slug}
                              href={`/research-groups/${group.slug}`}
                              className="inline-flex items-center px-4 py-2.5 bg-white border border-academic-200 rounded-xl text-sm font-semibold text-academic-700 hover:border-academic-400 hover:text-academic-900 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                            >
                              <span className="w-2 h-2 rounded-full bg-academic-900 mr-3 opacity-30"></span>
                              {group.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="mt-12 bg-gradient-to-br from-white to-academic-50/50 border border-academic-200 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-uva-red/50"></div>
              <div className="w-14 h-14 rounded-2xl bg-uva-red/10 text-uva-red flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-academic-900 mb-3">
                  Cross-pillar Microbiome-Infection-Biotechnology Hub
                </h4>
                <p className="text-academic-600 font-light leading-relaxed text-lg max-w-4xl">
                  A platform that unites expertise, technology, and insight from all three domains for transformative interdisciplinary projects that none of the individual pillars could achieve alone.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Education & training */}
        <section>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-4xl font-bold text-academic-900 mb-10">
              Education &amp; Training
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" delay={0.3}>
              <article className="bg-white/60 backdrop-blur-md rounded-3xl p-10 border border-academic-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full group hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-academic-900 mb-4 group-hover:text-uva-red transition-colors">
                  Program Contributions
                </h3>
                <p className="text-academic-600 font-light leading-relaxed text-lg">
                  We contribute to Bachelor and Master programs in Biology,
                  Biomedical Sciences, Psychobiology, Science Technology &amp;
                  Innovation (ST&amp;I), and Bioinformatics &amp; Systems Biology,
                  embedding state-of-the-art research in the curriculum.
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <article className="bg-white/60 backdrop-blur-md rounded-3xl p-10 border border-academic-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full group hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-academic-900 mb-4 group-hover:text-uva-red transition-colors">
                  MSc Microbiome Track
                </h3>
                <p className="text-academic-600 font-light leading-relaxed text-lg">
                  A new MSc Microbiome Track under the Holomicrobiome initiative
                  covers microbiome ecology, synthetic communities, and
                  host-microbe interactions with a strong focus on
                  research-driven learning for Dutch and international students.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </section>

        {/* Strategic connections */}
        <section>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-4xl font-bold text-academic-900 mb-6">
              Strategic Connections
            </h2>
            <p className="text-xl text-academic-600 font-light mb-12">
              The Theme drives partnerships connecting academia, healthcare,
              industry, and policy.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "AMEC", desc: "Amsterdam Microbiome Expertise Center" },
              { name: "DSM-Firmenich", desc: "Industrial biotechnology partnership" },
              { name: "NVWA", desc: "Food safety & regulatory policy" },
              { name: "Holomicrobiome", desc: "NGF national microbiome program" },
              { name: "Micropia & NEMO", desc: "Public engagement & outreach" },
            ].map((partner, idx) => (
              <ScrollReveal direction="up" delay={0.3 + (idx * 0.1)} key={partner.name}>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-academic-200 shadow-sm hover:shadow-md transition-shadow duration-300 group border-l-4 hover:border-l-uva-red">
                  <h4 className="text-lg font-bold text-academic-900 mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-academic-600 font-light text-sm">
                    {partner.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
