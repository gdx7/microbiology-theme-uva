// data/researchAreas.ts

export type ResearchArea = {
  slug: string;
  title: string;
  description: string;
};

export const researchAreas: ResearchArea[] = [
  {
    slug: "microbial-food-safety-microbiomes",
    title: "Microbial food safety & microbiomes",
    description:
      "Fundamental and applied microbiology focused on food spoilage and safety, antimicrobial resistance, and gut and oral microbiomes.",
  }, // 
  {
    slug: "bacterial-cell-biology-physiology",
    title: "Bacterial cell biology & physiology",
    description:
      "Molecular physiology of bacteria, including cell division, differentiation, RNA-based regulation and antibiotic mode-of-action.",
  }, // 
  {
    slug: "microbiome-engineering",
    title: "Microbiome engineering",
    description:
      "Interdisciplinary research on gut microbiome function and how microbial consortia can be engineered to benefit host health.",
  }, // 
  {
    slug: "mass-spectrometry-biomolecules",
    title: "Mass spectrometry of biomolecules",
    description:
      "Mass-spectrometry-based proteomics, metabolomics and lipidomics supporting microbiology and systems biology projects.",
  }, // 
];
