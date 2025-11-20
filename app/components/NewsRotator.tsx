"use client";

import { useEffect, useState } from "react";

type Slide = {
  title: string;
  description: string;
  tag?: string;
  link?: string;
};

const slides: Slide[] = [
  {
    title: "Personal Microbiome Health",
    description:
      "Microbiology groups at SILS contribute to the Research Priority Area on Personal Microbiome Health, connecting fundamental microbiology to human health.",
    tag: "Research Priority Area",
    link: "https://sils.uva.nl",
  },
  {
    title: "Amsterdam Microbiome Expertise Center (AMEC)",
    description:
      "The theme is closely linked to AMEC, which integrates microbiome research across Amsterdam’s academic and clinical partners.",
    tag: "AMEC",
    link: "https://www.amsterdamumc.org" /* placeholder – adjust if needed */,
  },
  {
    title: "AMSA & AMEC seminar series",
    description:
      "Microbiology researchers are active in seminar series that bring together microbiologists, systems biologists and clinicians in Amsterdam.",
    tag: "Seminars",
  },
  {
    title: "From molecules to systems",
    description:
      "Research spans from molecular mechanisms in single cells to complex microbial communities in food, health and the environment.",
    tag: "Research focus",
  },
];

export default function NewsRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000); // change slide every 7s
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <div className="news-rotator">
      <div style={{ padding: "1rem 1.2rem" }}>
        {current.tag && (
          <div
            style={{
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginBottom: "0.3rem",
              color: "#64748b",
            }}
          >
            {current.tag}
          </div>
        )}
        <h3
          style={{
            margin: "0 0 0.35rem",
            fontSize: "1.05rem",
          }}
        >
          {current.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "0.9rem",
            color: "#64748b",
          }}
        >
          {current.description}
        </p>
        {current.link && (
          <p
            style={{
              margin: "0.6rem 0 0",
              fontSize: "0.87rem",
            }}
          >
            <a href={current.link} target="_blank" rel="noreferrer">
              Learn more →
            </a>
          </p>
        )}
      </div>

      {/* small dot indicators at the bottom-right */}
      <div
        style={{
          display: "flex",
          gap: "0.35rem",
          justifyContent: "flex-end",
          padding: "0.6rem 0.9rem",
        }}
      >
        {slides.map((_, i) => (
          <span
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: "999px",
              background: i === index ? "#2563eb" : "#cbd5f5",
              opacity: i === index ? 1 : 0.6,
              transition: "background 0.2s ease, opacity 0.2s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
