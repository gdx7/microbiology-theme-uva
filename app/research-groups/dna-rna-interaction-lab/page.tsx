import { researchGroups } from "@/data/researchGroups";

export default function DRNALabPage() {
  const group = researchGroups.find((g) => g.slug === "dna-rna-interaction-lab");
  if (!group) return <section className="container section"><h1>Group not found</h1></section>;

  return (
    <section className="container section">
      <h1 className="section-title">{group.name}</h1>
      <p><strong>PI:</strong> {group.pi} · <a href={`mailto:${group.email}`}>{group.email}</a></p>
      <p style={{ maxWidth: "60ch" }}>
        Data‑driven exploration of bacterial gene regulation by uncovering hidden patterns in DNA–RNA interactions
        across multi‑omics (paraphrased). <a href="https://drna.nl" target="_blank" rel="noreferrer">Visit drna.nl →</a>
      </p>
      <img src="/images/groups/dna-rna-interaction-lab.jpg" alt="DRNA lab image"
           style={{ width: "100%", borderRadius: 12, border: "1px solid var(--line)" }} />
    </section>
  );
}
