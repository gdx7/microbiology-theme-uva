// data/researchAreas.ts

export type ResearchArea = {
  slug: string;
  code: string;
  title: string;
  description: string;
};

export const researchAreas: ResearchArea[] = [
  {
    slug: "molecular-biology-microbial-food-safety",
    code: "MBMFS",
    title: "Molecular Biology and Microbial Food Safety (MBMFS)",
    description:
      "Cluster led by Prof. Stanley Brul focusing on microbial food safety and microbiomes across hosts, industrial systems and environments, integrating molecular biology with risk assessment and regulation.",
  },
  {
    slug: "bacterial-cell-biology",
    code: "BCBP",
    title: "Bacterial Cell Biology and Physiology (BCBP)",
    description:
      "Cluster led by Prof. Leendert Hamoen that studies bacterial physiology, chromosome organisation and gene regulation, from fundamental mechanisms to infection biology and antimicrobial resistance.",
  },
  {
    slug: "microbiome-engineering",
    code: "ME",
    title: "Microbiome Engineering (ME)",
    description:
      "Cluster led by Prof. Sahar El Aidy focusing on human and industrial microbiomes, engineering microbial communities and leveraging microbiome insights for health and biotechnology applications.",
  },
  {
    slug: "cross-theme-expertise",
    code: "Endowed",
    title: "Endowed Chairs",
    description:
      "Endowed chairs that support food safety, industrial biotechnology, and microbiome research across all microbiology research pillars.",
  },
  {
    slug: "core-facilities",
    code: "MSB",
    title: "Mass Spectrometry Core Facility",
    description:
      "State-of-the-art research infrastructure and expertise in mass spectrometry for proteomics, metabolomics, lipidomics and other advanced analytical techniques to support microbiology research across all themes.",
  },
];
