// app/about/page.tsx

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">About</p>
        <h1 className="section-title">Microbiology Theme at SILS</h1>
        <p className="lead">
          The Microbiology Theme at the Swammerdam Institute for Life Sciences
          (SILS), Faculty of Science, University of Amsterdam, is a hub for
          microbiome research, infection biology and biotechnology. It brings
          together groups working from molecular mechanisms to ecosystems and
          societal impact.
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
              Purpose &amp; vision
            </h2>
            <p style={{ fontSize: "0.95rem" }}>
              The Theme&apos;s purpose is to advance fundamental understanding
              of microbial systems and to translate this knowledge into
              solutions for human and planetary health. We work from molecules
              to communities, and from basic mechanisms to applications that
              support a sustainable bioeconomy and healthy human development.
            </p>
            <p style={{ fontSize: "0.95rem", marginTop: "0.6rem" }}>
              Our vision is to be an internationally visible node for
              microbiome, infection and biotechnology research, embedded in the
              Amsterdam Life Sciences ecosystem and strongly connected to
              partners in academia, healthcare, industry and policy.
            </p>
          </article>

          <article className="card">
            <h2
              className="section-title"
              style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}
            >
              Strategic aims
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
                Lead internationally recognised research that defines the
                frontiers of microbiology.
              </li>
              <li>
                Catalyse interdisciplinary innovation at the interface of
                microbiomes, infection biology and biotechnology.
              </li>
              <li>
                Translate microbial insights into societal impact in areas such
                as antimicrobial resistance, food safety and sustainable
                production.
              </li>
              <li>
                Train the next generation of microbiologists through inclusive,
                high-quality education and mentorship.
              </li>
              <li>
                Ensure organisational resilience and sustainable growth to
                maintain long-term relevance.
              </li>
            </ul>
          </article>
        </div>

        {/* Research strategy RS1–RS3 */}
        <div style={{ marginTop: "2.2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
            Research strategy
          </h2>
          <p className="lead">
            The research strategy is organised along three thematic pillars that
            cut across the groups and clusters in the Theme.
          </p>

          <div className="grid" style={{ marginTop: "1.2rem" }}>
            <article className="card">
              <h3>RS1: Microbiome</h3>
              <p style={{ fontSize: "0.92rem" }}>
                Microbial communities across human and animal hosts, food
                systems, industrial processes and the environment. We aim to
                understand how microbiomes assemble, function and respond to
                perturbations, and how they can be harnessed for diagnostics,
                therapies and sustainable applications.
              </p>
            </article>

            <article className="card">
              <h3>RS2: Infection biology</h3>
              <p style={{ fontSize: "0.92rem" }}>
                Fundamental and applied work on infection biology, including
                bacterial pathogenesis, stress responses and antimicrobial
                resistance. We connect mechanistic insights at the molecular and
                cellular level to infection models and clinical questions.
              </p>
            </article>

            <article className="card">
              <h3>RS3: Biotechnology</h3>
              <p style={{ fontSize: "0.92rem" }}>
                Microbial biotechnology and industrial microbiology, with a
                focus on quantitative physiology, strain development and
                engineering of microbial communities. We collaborate closely
                with industrial and societal partners to develop sustainable
                processes and products.
              </p>
            </article>
          </div>
        </div>

        {/* Organisation & clusters */}
        <div style={{ marginTop: "2.4rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
            Organisation &amp; clusters
          </h2>
          <p className="lead">
            The Theme is anchored by three Chairs and their clusters, plus
            cross-theme expertise and endowed chairs that link to policy and
            industry.
          </p>

          <div className="grid" style={{ marginTop: "1.2rem" }}>
            <article className="card">
              <h3>Molecular Biology and Microbial Food Safety (MBMFS)</h3>
              <p style={{ fontSize: "0.92rem" }}>
                Chair: Prof. Stanley Brul. This cluster covers microbial food
                safety, stress-resistant microbes and microbiomes in hosts,
                ecosystems and industrial systems, including the Gumi Lab, EvoSys
                Bio Lab and Spore Lab.
              </p>
            </article>

            <article className="card">
              <h3>Bacterial Cell Biology (BCB)</h3>
              <p style={{ fontSize: "0.92rem" }}>
                Chair: Prof. Leendert Hamoen. This cluster focuses on bacterial
                cell biology, chromosome organisation and molecular physiology,
                including the Molecular Microbial Physiology group, DNA &amp; RNA
                Interaction Lab and General Microbiology Lab.
              </p>
            </article>

            <article className="card">
              <h3>Microbiome Engineering (ME)</h3>
              <p style={{ fontSize: "0.92rem" }}>
                Chair: Prof. Sahar El Aidy. This cluster focuses on human and
                industrial microbiomes and strategies to engineer microbial
                communities for health, food and biotechnology, with additional
                expertise in imaging and functional analysis.
              </p>
            </article>

            <article className="card">
              <h3>Cross-theme expertise &amp; endowed chairs</h3>
              <p style={{ fontSize: "0.92rem" }}>
                The Mass Spectrometry of Biomolecules group, the NVWA Chair on
                Microbial Food Safety and the DSM-Firmenich Beta-Plus Foundation
                Chair of Industrial Molecular Microbiology provide cross-cutting
                expertise, linking the Theme to policy, regulation and
                industrial partners.
              </p>
            </article>
          </div>
        </div>

        {/* Education & training */}
        <div style={{ marginTop: "2.4rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
            Education &amp; training
          </h2>
          <p className="lead">
            The Theme is closely integrated with teaching at the BSc and MSc
            levels and supervises many Bachelor, Master and PhD students. We
            aim to provide an open, inclusive environment where early-career
            researchers can develop scientific expertise, quantitative skills
            and leadership capacity.
          </p>
        </div>
      </div>
    </section>
  );
}
