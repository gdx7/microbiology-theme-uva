export default function PlatformsPage() {
  const platforms = [
    { title: "Genomics & Long‑read Sequencing", blurb: "Library prep, long‑read platforms, microbial genomes & metagenomes." },
    { title: "Proteomics & Metabolomics", blurb: "Workflow design, targeted/untargeted runs; data pipelines & QC." },
    { title: "Imaging & Live‑cell Microscopy", blurb: "Confocal, live-cell, image analysis; training and booking guidance." },
    { title: "Flow Cytometry & Cell Sorting", blurb: "Cytometers/sorters, biosafety guidance, data analysis support." },
    { title: "Spatial -omics", blurb: "Pilot spatial workflows for microbial systems in development." },
    { title: "Data Science & Bioinformatics", blurb: "Analysis support, pipelines, and compute coordination." },
  ];
  return (
    <section className="container section">
      <h1 className="section-title">Technology platforms</h1>
      <p className="lead">Platforms accelerate research across the Microbiology theme (booking & contacts to be added).</p>
      <div className="grid" style={{ marginTop: "1rem" }}>
        {platforms.map(p => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p style={{ color:"var(--muted)" }}>{p.blurb}</p>
          </article>
        ))}
      </div>
      <p className="lead" style={{ marginTop: ".8rem" }}>
        Modeled on the idea of **Technology platforms** (e.g., data sciences, proteomics, imaging). 
      </p>
    </section>
  );
}
