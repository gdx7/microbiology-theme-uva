// data/researchGroups.ts

export type ResearchGroup = {
  slug: string;
  areaSlug: string;
  name: string;
  code?: string;
  pi?: string;
  role?: string;
  contactEmail?: string;
  externalUrl?: string;
  shortDescription?: string;
  description?: string;
  highlight?: string;
  keywords?: string[];
};

export const researchGroups: ResearchGroup[] = [
  // =========
  // MBMFS cluster – Chair: Prof. Stanley Brul
  // =========
  {
    slug: "zhang", // was: gumi-lab
    areaSlug: "molecular-biology-microbial-food-safety",
    name: "Gumi Lab (GL)",
    code: "GL",
    pi: "Dr. Jianbo Zhang",
    role: "Principal Investigator",
    shortDescription:
      "Microbiome and microbial community research using multi-omics, imaging and modelling in hosts, environments and industrial settings.",
    description:
      "The Gumi Lab studies microbial communities across hosts, ecosystems and industrial systems, combining multi-omics, cultivation and imaging with computational modelling to understand and steer microbiome behaviour.",
    keywords: ["microbiome", "multi-omics", "modelling", "ecosystems", "RS1"],
  },
  {
    slug: "wortel", // was: evosysbio-lab
    areaSlug: "molecular-biology-microbial-food-safety",
    name: "EvoSysBio Lab (ESB)",
    code: "ESB",
    pi: "Dr. Meike Wortel",
    role: "Principal Investigator",
    shortDescription:
      "Evolutionary systems biology of microbial communities, linking experimental evolution, modelling and data-driven analysis.",
    description:
      "The EvoSysBio Lab (ESB) uses evolutionary systems biology to study how microbial populations and communities adapt, integrating experiments, theory and data-driven modelling to connect genotype, phenotype and ecology.",
    keywords: [
      "evolutionary systems biology",
      "microbial communities",
      "modelling",
      "RS1",
    ],
  },
  {
    slug: "brul", // was: spore-lab
    areaSlug: "molecular-biology-microbial-food-safety",
    name: "Spore Lab",
    code: "Spore",
    pi: "Prof. Dr. Stanley Brul",
    role: "Chair MBMFS",
    shortDescription:
      "Molecular biology and physiology of spores and stress-resistant microbes in relation to food safety and infection.",
    description:
      "The Spore Lab investigates spore formation, stress responses and survival strategies of microbes that are relevant for food safety, infection biology and industrial processes.",
    keywords: [
      "spores",
      "stress response",
      "food safety",
      "infection biology",
      "RS1",
      "RS2",
      "RS3",
    ],
  },
  {
    slug: "postma",
    areaSlug: "molecular-biology-microbial-food-safety",
    name: "Spatial SysBio Lab",
    code: "SSB",
    pi: "Prof. Dr. Marten Postma",
    role: "Principal Investigator",
    shortDescription:
      "Spatial systems biology studying signal transduction and cell polarity regulation in microbial systems.",
    description:
      "The Spatial SysBio Lab investigates spatial aspects of signal transduction and regulation using systems biology approaches, combining molecular biology, quantitative imaging and computational modeling to understand cellular organization and decision-making processes.",
    keywords: [
      "spatial systems biology",
      "signal transduction",
      "cell polarity",
      "quantitative imaging",
      "RS1",
      "RS2",
    ],
  },

  // =========
  // BCBP cluster – Chair: Prof. Leendert Hamoen
  // =========
  {
    slug: "branco-dos-santos", // was: molecular-microbial-physiology
    areaSlug: "bacterial-cell-biology",
    name: "Molecular Microbial Physiology (MMP)",
    code: "MMP",
    pi: "Dr. Filipe Branco dos Santos",
    role: "Principal Investigator",
    shortDescription:
      "Quantitative microbial physiology and biotechnology, using systems and synthetic biology for strain development.",
    description:
      "The Molecular Microbial Physiology group studies microbial physiology with quantitative and systems approaches, developing next-generation microbial biotechnology platforms and production strains.",
    keywords: [
      "microbial physiology",
      "systems biology",
      "biotechnology",
      "RS2",
      "RS3",
    ],
  },
  {
    slug: "drna", // stays drna (internal page exists)
    areaSlug: "bacterial-cell-biology",
    name: "DNA & RNA Interaction Lab (drna lab)",
    code: "DRL",
    pi: "Dr. Gaurav Dugar",
    role: "Principal Investigator",
    contactEmail: "G.Dugar@uva.nl",
    // TIP: remove externalUrl if you prefer the list to always link to the internal page
    externalUrl: "https://drna.nl",
    shortDescription:
      "RNA-centric microbiology, mapping DNA–RNA–protein interaction networks and non-canonical regulation in bacteria.",
    description:
      "The drna Lab develops experimental and data-driven methods to map RNA and DNA interactions in bacteria, uncovering non-canonical regulation and chromosomal organisation with implications for infection biology and biotechnology.",
    keywords: [
      "RNA biology",
      "chromosome organisation",
      "gene regulation",
      "infection biology",
      "RS2",
    ],
  },
  {
    slug: "hamoen", // was: general-microbiology-lab
    areaSlug: "bacterial-cell-biology",
    name: "Bacterial Cell Biology (BCB)",
    code: "BCB",
    pi: "Prof. Dr. Leendert Hamoen",
    role: "Chair Bacterial Cell Biology and Physiology",
    shortDescription:
      "Fundamental bacterial cell biology and chromosome dynamics underpinning growth, stress responses and pathogenesis.",
    description:
      "The Bacterial Cell Biology group focuses on fundamental bacterial cell biology, including chromosome dynamics, cell-cycle control and stress responses that underpin growth, survival and pathogenic potential.",
    keywords: [
      "bacterial cell biology",
      "chromosome dynamics",
      "cell cycle",
      "RS2",
      "RS3",
    ],
  },

  // =========
  // ME cluster – Chair: Prof. Sahar El Aidy
  // =========
  {
    slug: "el-aidy", // was: microbiome-engineering-lab
    areaSlug: "microbiome-engineering",
    name: "Microbiome Engineering (ME) Lab",
    code: "ME",
    pi: "Prof. Dr. Sahar El Aidy",
    role: "Chair Microbiome Engineering",
    shortDescription:
      "Human and industrial microbiome research and engineering, targeting health, food and biotechnology applications.",
    description:
      "The Microbiome Engineering Lab studies how microbiomes influence human health and biotechnological processes, and develops strategies to engineer microbial communities for diagnostics, therapies and sustainable production.",
    keywords: [
      "human microbiome",
      "microbiome engineering",
      "biotechnology",
      "RS1",
      "RS3",
    ],
  },
  {
    slug: "imaging-functional-analysis", // (no internal page created yet)
    areaSlug: "microbiome-engineering",
    name: "Imaging and Functional Analysis",
    code: "IFA",
    pi: "PI in Imaging and Functional Analysis",
    role: "PI (imaging & functional analysis)",
    shortDescription:
      "Advanced imaging and functional analysis of microbial communities and host–microbe interactions.",
    description:
      "This group contributes expertise in advanced imaging and functional analysis, supporting projects on microbiomes, infection biology and biotechnology with quantitative spatial and functional readouts.",
    keywords: ["imaging", "functional analysis", "microbiomes", "RS1"],
  },

  // =========
  // Cross-theme expertise & endowed chairs
  // =========
  {
    slug: "kramer", // was: mass-spectrometry-of-biomolecules
    areaSlug: "cross-theme-expertise",
    name: "Mass Spectrometry of Biomolecules (MSB)",
    code: "MSB",
    pi: "Dr. Gertjan Kramer",
    role: "Core facility lead",
    shortDescription:
      "Institute-wide mass spectrometry core, supporting microbial omics and quantitative biomolecular analysis.",
    description:
      "The Mass Spectrometry of Biomolecules group functions as the institute’s mass spectrometry core, supporting microbial omics, quantitative proteomics and metabolomics across the Microbiology Theme and other SILS programs.",
    keywords: [
      "mass spectrometry",
      "omics",
      "proteomics",
      "metabolomics",
      "RS1",
      "RS3",
    ],
  },
  {
    slug: "verhoef", // was: nvwa-chair-microbial-food-safety
    areaSlug: "cross-theme-expertise",
    name: "NVWA Chair on Microbial Food Safety",
    code: "NVWA",
    pi: "Prof. Linda Verhoef",
    role: "Endowed chair",
    shortDescription:
      "Endowed chair connecting microbial food safety research with regulatory practice and national policy.",
    description:
      "The NVWA Chair on Microbial Food Safety links fundamental and applied microbiology at SILS with Dutch national policy and regulatory practice, strengthening the translation of food safety research into governance.",
    keywords: [
      "food safety",
      "risk assessment",
      "regulation",
      "endowed chair",
      "RS2",
    ],
  },
  {
    slug: "schyns",
    areaSlug: "cross-theme-expertise",
    name: "Peribiomics Lab",
    code: "PBL",
    pi: "Prof. Dr. Ghislain Schyns",
    role: "Professor by special appointment of Industrial Molecular Microbiology",
    shortDescription:
      "Peripheral microbiomes interactions with gut microbiomes and host, studying peribiomics axes and their networks.",
    description:
      "The Peribiomics Lab focuses on peripheral (skin, nasal, mouth) microbiomes interactions with gut microbiomes and host, studying the so-called axes and their network (peribiomics). We set up bilateral physiomimetical dynamic models to study molecular signals and spatial biology during the dynamic interactions.",
    keywords: [
      "peripheral microbiomes",
      "peribiomics",
      "host-microbe interactions",
      "spatial biology",
      "RS1",
      "RS3",
    ],
  },
];
