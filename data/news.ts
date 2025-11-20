// data/news.ts

export type Slide = {
  image: string;
  alt: string;
  title: string;
  summary: string;
  href: string;
};

export const slides: Slide[] = [
  {
    image: "/images/news/news-01.jpg",
    alt: "Stylised microbiology theme illustration",
    title: "Microbiology Theme at SILS",
    summary:
      "The Microbiology theme studies microbial mechanisms, host–microbe interactions and applications that benefit health, industry and the environment.",
    href: "https://sils.uva.nl/research/collaboration-initiatives/microbiologie/microbiology.html", // 
  },
  {
    image: "/images/news/news-02.jpg",
    alt: "Conceptual microbiome and host image",
    title: "Microbiology & the human microbiome",
    summary:
      "Researchers investigate how intestinal microbiomes and hosts interact over the life course, and how microbial consortia can be engineered for health.",
    href: "https://sils.uva.nl/research/collaboration-initiatives/microbiologie/microbiology.html", // 
  },
  {
    image: "/images/news/news-03.jpg",
    alt: "Amsterdam Microbiome Expertise Center visual",
    title: "Amsterdam Microbiome Expertise Center (AMEC)",
    summary:
      "An Amsterdam-wide initiative that connects microbiome researchers at UvA, VU, Amsterdam UMC and ACTA through AMEC and AMSA seminars.",
    href: "https://sils.uva.nl/content/research-groups/amsterdam-microbiome-expertise-center/amsterdam-microbiome-expertise-center.html", // 
  },
];
