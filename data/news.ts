// data/news.ts
export type NewsItem = { title: string; kicker?: string; image: string; alt: string; href?: string; };

export const newsItems: NewsItem[] = [
  { title: "Amsterdam Microbiology SeminArs (AMSA)", kicker: "Seminar series",
    image: "/news/amsa-seminars.svg", alt: "AMSA seminars",
    href: "https://sils.uva.nl/research/collaboration-initiatives/microbiologie/microbiology.html" },
  { title: "AMEC Day highlight", kicker: "AMEC collaboration",
    image: "/news/amec-day.svg", alt: "AMEC day",
    href: "https://sils.uva.nl/research/collaboration-initiatives/microbiologie/microbiology.html" },
  { title: "DRNA lab: open position", kicker: "Recruiting",
    image: "/news/drna-hiring.svg", alt: "DRNA hiring",
    href: "https://drna.nl/" },
];
