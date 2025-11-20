// data/news.ts

export type NewsItem = {
  id: string;
  title: string;
  description: string;
  tag?: string;
  image?: string;
  link?: string;
};

// Main list of news items used by any carousels/rotators
export const newsItems: NewsItem[] = [
  {
    id: "personal-microbiome-health",
    title: "Personal Microbiome Health",
    description:
      "Microbiology groups at SILS contribute to the Research Priority Area on Personal Microbiome Health, connecting fundamental microbiology to human health.",
    tag: "Research Priority Area",
    link: "https://sils.uva.nl",
  },
  {
    id: "amec",
    title: "Amsterdam Microbiome Expertise Center (AMEC)",
    description:
      "The theme is closely linked to AMEC, which integrates microbiome research across Amsterdam’s academic and clinical partners.",
    tag: "AMEC",
    link: "https://www.amsterdamumc.org",
  },
  {
    id: "amsa-amec-seminars",
    title: "AMSA & AMEC seminar series",
    description:
      "Microbiology researchers are active in seminar series that bring together microbiologists, systems biologists and clinicians in Amsterdam.",
    tag: "Seminars",
  },
  {
    id: "from-molecules-to-systems",
    title: "From molecules to systems",
    description:
      "Research spans from molecular mechanisms in single cells to complex microbial communities in food, health and the environment.",
    tag: "Research focus",
  },
];

// Backwards-compatible export for any older code using `slides`
export const slides = newsItems;
