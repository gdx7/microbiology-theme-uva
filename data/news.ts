// data/news.ts

export type Slide = {
  image: string; // /images/news/placeholder-name.jpg
  alt: string;
  title: string;
  summary: string;
  href: string;
};

export const slides: Slide[] = [
  {
    image: "/images/news/news-01.jpg",
    alt: "Microscopy-style background for microbiome–host research",
    title: "Microbiome–host research highlighted",
    summary: "Theme-wide work on microbiome–host interactions and microbial communities across life stages.",
    href: "https://sils.uva.nl/research/collaboration-initiatives/microbiologie/microbiology.html",
  },
  {
    image: "/images/news/news-02.jpg",
    alt: "Abstract visual representing a recent publication",
    title: "Recent publications from the Microbiology theme",
    summary: "New papers from Microbiology groups at SILS; this link can point to a curated list later.",
    href: "https://sils.uva.nl/research/collaboration-initiatives/microbiologie/microbiology.html",
  },
  {
    image: "/images/news/news-03.jpg",
    alt: "Stylised seminar audience for AMSA events",
    title: "Amsterdam Microbiology SeminArs (AMSA)",
    summary: "Seminars and community events around microbiology in Amsterdam.",
    href: "https://sils.uva.nl/research/collaboration-initiatives/microbiologie/microbiology.html",
  },
];
