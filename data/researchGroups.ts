// data/researchGroups.ts
export type MicrobiologyGroup = {
  slug: string;
  areaSlug: string;
  name: string;
  pi: string;
  email?: string;
  externalUrl?: string;
  shortDescription: string;
};

export const researchGroups: MicrobiologyGroup[] = [
  // Area 1 – Microbial food safety & microbiomes
  {
    slug: "brul-microbial-food-safety",
    areaSlug: "microbial-food-safety-microbiomes",
    name: "Microbial Food Safety & Stress Responses",
    pi: "Prof. dr. Stanley Brul",
    email: "s.brul@uva.nl",
    externalUrl:
      "https://sils.uva.nl/content/research-groups/molecular-biology-and-microbial-food-safety/molecular-biology--microbial-food-safety.html",
    shortDescription:
      "Spoilage and pathogenic bacteria in food chains, stress physiology, spore biology and antimicrobial resistance, with links to microbiome and biotechnology.",
  }, // 
  {
    slug: "wortel-evolutionary-systems-microbiology",
    areaSlug: "microbial-food-safety-microbiomes",
    name: "Evolutionary Systems Microbiology",
    pi: "Dr. Meike Wortel",
    email: "m.t.wortel@uva.nl",
    externalUrl: "https://www.meikewortel.com",
    shortDescription:
      "Evolutionary systems biology of microbes using mathematical and computational tools to study metabolic strategies, microbiome resilience and antibiotic resistance evolution.",
  }, // 
  {
    slug: "zhang-gut-microbiome-physiology",
    areaSlug: "microbial-food-safety-microbiomes",
    name: "Gut Microbiome Physiology",
    pi: "Dr. Jianbo Zhang",
    email: "j.zhang6@uva.nl",
    shortDescription:
      "Microbiome–host crosstalk and gut bacteria studied with advanced in vitro gut models and organ-on-chip approaches.",
  }, // 
  {
    slug: "verhoef-microbial-food-safety-risk",
    areaSlug: "microbial-food-safety-microbiomes",
    name: "Microbial Food Safety & Risk",
    pi: "Prof. dr. ir. Linda Verhoef",
    email: "l.p.b.verhoef@uva.nl",
    shortDescription:
      "Microbial food safety and epidemiological determination of microbiological risks in food chains, in close collaboration with the Dutch Food Safety Authority.",
  }, // 

  // Area 2 – Bacterial cell biology & physiology
  {
    slug: "hamoen-bacterial-cell-biology",
    areaSlug: "bacterial-cell-biology-physiology",
    name: "Bacterial Cell Biology",
    pi: "Prof. dr. Leendert Hamoen",
    email: "L.W.Hamoen@uva.nl",
    externalUrl:
      "https://sils.uva.nl/content/research-groups/bacterial-cell-biology-and-physiology-groups/bacterial-cell-biology-and-physiology-groups.html",
    shortDescription:
      "General microbiology focused on bacterial cell division and differentiation, chromosome organisation and antibiotic mode-of-action.",
  }, // 
  {
    slug: "branco-dos-santos-molecular-microbial-physiology",
    areaSlug: "bacterial-cell-biology-physiology",
    name: "Molecular Microbial Physiology",
    pi: "Dr. Filipe Branco dos Santos",
    email: "F.BrancodosSantos@uva.nl",
    shortDescription:
      "Molecular microbial physiology and systems biology of microbial cell factories, focusing on fermentation, photosynthesis and sustainable biotechnology.",
  }, // 
  {
    slug: "dna-rna-interaction-lab",
    areaSlug: "bacterial-cell-biology-physiology",
    name: "DNA & RNA Interaction Lab (d.r.n.a)",
    pi: "Dr. Gaurav Dugar",
    email: "G.Dugar@uva.nl",
    externalUrl: "https://drna.nl",
    shortDescription:
      "Data-driven decoding of bacterial gene regulation using high-throughput experiments and unsupervised learning across multi‑omics data.",
  }, // 

  // Area 3 – Microbiome engineering
  {
    slug: "el-aidy-microbiome-engineering",
    areaSlug: "microbiome-engineering",
    name: "Microbiome Engineering",
    pi: "Prof. dr. Sahar El Aidy",
    email: "s.elaidy@uva.nl",
    externalUrl:
      "https://sils.uva.nl/content/research-groups/microbiome-engineering/microbiome-engineering.html",
    shortDescription:
      "Interdisciplinary research on gut microbiome function and engineered microbial consortia that modulate host health.",
  }, // 

  // Area 4 – Mass spectrometry of biomolecules
  {
    slug: "kramer-mass-spectrometry-biomolecules",
    areaSlug: "mass-spectrometry-biomolecules",
    name: "Mass Spectrometry of Biomolecules",
    pi: "Dr. Gertjan Kramer",
    email: "g.kramer@uva.nl",
    externalUrl:
      "https://sils.uva.nl/content/research-groups/mass-spectrometry-of-biomolecules/mass-spectrometry-of-biomolecules.html",
    shortDescription:
      "Mass-spectrometry-based proteomics, metabolomics and lipidomics core facility supporting microbiology and systems biology projects.",
  }, // 
];
