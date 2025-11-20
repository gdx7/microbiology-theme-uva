// app/facilities/page.tsx

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Microbiology laboratories",
      text: "Molecular biology and microbiology labs, microbiological kitchens, (an)aerobic cultivation and bioreactors for working with a broad range of microorganisms.",
    },
    {
      title: "Host–microbe interaction systems",
      text: "Cell culture, organoid and gut-on-a-chip platforms to model host–microbe interactions under controlled conditions.",
    },
    {
      title: "Genomics & transcriptomics",
      text: "Next-generation sequencing and transcriptomics to profile microbial genomes, gene expression and communities.",
    },
    {
      title: "Mass spectrometry core",
      text: "Proteomics, metabolomics and lipidomics platforms supporting projects across the Microbiology theme and beyond.",
    },
    {
      title: "Advanced microscopy",
      text: "High-end fluorescence and live-cell microscopy to visualise microbial cells and host–microbe systems.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <p className="section-kicker">Facilities & platforms</p>
        <h1 className="section-title">Enabling technologies for microbiology</h1>
        <p className="lead">
          Research in the Microbiology theme is supported by shared facilities at SILS, including
          microbiology labs, host–microbe model systems, genomics and mass spectrometry platforms
          and advanced microscopy.
        </p>

        <div className="grid" style={{ marginTop: "1.2rem" }}>
          {facilities.map((f) => (
            <article key={f.title} className="card">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
