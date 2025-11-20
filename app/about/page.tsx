// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">About</p>
        <h1 className="section-title">Microbiology within SILS</h1>
        <p className="lead">
          The Microbiology theme is embedded in the Swammerdam Institute of
          Life Sciences (SILS) at the University of Amsterdam. It brings
          together research groups that study microbes in food, health and the
          environment, with approaches ranging from molecular microbiology to
          systems biology and mass spectrometry.
        </p>

        <div className="grid" style={{ marginTop: "1.4rem" }}>
          <article className="card">
            <h3>Position within SILS</h3>
            <p>
              Microbiology at SILS is one of the research themes that connect
              groups across molecular biology, systems biology, cell biology
              and analytical chemistry. The theme links fundamental mechanisms
              of microbial life to applications in health, biotechnology and
              sustainable food production.
            </p>
          </article>

          <article className="card">
            <h3>Research focus</h3>
            <p>
              The theme covers microbial food safety and microbiomes, bacterial
              cell biology and physiology, microbiome engineering, and mass
              spectrometry of biomolecules. Work ranges from single-cell
              imaging and quantitative genetics to large-scale omics and
              computational modelling.
            </p>
          </article>

          <article className="card">
            <h3>Amsterdam connections</h3>
            <p>
              Microbiology groups are closely connected to the Amsterdam
              Microbiome Expertise Center (AMEC), the AMSA and AMEC seminar
              series, and Research Priority Areas such as Personal Microbiome
              Health and Systems Biology. Collaborations extend to clinical and
              industrial partners in the Amsterdam region.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
