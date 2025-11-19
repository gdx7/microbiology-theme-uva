export type ResearchGroup = {
  slug: string;
  name: string;          // neutral “Lastname Lab” placeholder
  pi: string;
  email?: string;
  shortDescription: string; // keep neutral now; refine with each lab later
};

export const researchGroups: ResearchGroup[] = [
  { slug: "stanley-brul-lab", name: "Brul Lab", pi: "Prof. dr. Stanley Brul", email: "s.brul@uva.nl",
    shortDescription: "Microbiology of food, stress responses, and microbial process optimization (theme summary)."},
  { slug: "meike-wortel-lab", name: "Wortel Lab", pi: "Dr. Meike T. Wortel", email: "m.t.wortel@uva.nl",
    shortDescription: "Microbial physiology and systems perspectives; quantitative approaches to microbial behavior."},
  { slug: "jianbo-zhang-lab", name: "Zhang Lab", pi: "Dr. Jianbo Zhang", email: "j.zhang6@uva.nl",
    shortDescription: "Microbiology & molecular mechanisms; theme-aligned fundamental studies."},
  { slug: "linda-verhoef-lab", name: "Verhoef Lab", pi: "Prof. dr. ir. Linda P.B. Verhoef", email: "l.p.b.verhoef@uva.nl",
    shortDescription: "Microbial processes and applications; food/biotechnological contexts."},
  { slug: "sahar-el-aidy-lab", name: "El Aidy Lab", pi: "Prof. dr. Sahar El Aidy", email: "s.elaidy@uva.nl",
    shortDescription: "Microbiome–host interactions across life stages and health contexts."},
  { slug: "leendert-hamoen-lab", name: "Hamoen Lab", pi: "Prof. dr. Leendert W. Hamoen", email: "L.W.Hamoen@uva.nl",
    shortDescription: "Bacterial cell biology and physiology; adaptation and differentiation."},
  { slug: "dna-rna-interaction-lab", name: "d.r.n.a — DNA & RNA Interaction Lab", pi: "Dr. Gaurav Dugar", email: "G.Dugar@uva.nl",
    shortDescription: "Data‑driven decoding of bacterial gene regulation (unsupervised learning on multi‑omics)."},   // 
  { slug: "filipe-branco-dos-santos-lab", name: "Branco dos Santos Lab", pi: "Dr. Filipe Branco dos Santos", email: "F.BrancodosSantos@uva.nl",
    shortDescription: "Microbial biotechnology and metabolism; consortia and industrial applications."},
  { slug: "gertjan-kramer-lab", name: "Kramer Lab", pi: "Dr. Gertjan Kramer", email: "g.kramer@uva.nl",
    shortDescription: "Microbial physiology and molecular mechanisms; theme-aligned research."},
];
