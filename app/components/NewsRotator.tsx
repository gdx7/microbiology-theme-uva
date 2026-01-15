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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 7000); // change slide every 7s
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  const handleDotClick = (i: number) => {
    if (i !== index) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex(i);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="news-rotator">
      <div
        style={{
          padding: "2rem 2.5rem",
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        {current.tag && (
          <div
            style={{
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
              color: "var(--primary)",
              fontWeight: 600,
            }}
          >
            {current.tag}
          </div>
        )}
        <h3
          style={{
            margin: "0 0 1rem",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--text-main)",
          }}
        >
          {current.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "1rem",
            color: "var(--text-soft)",
            lineHeight: 1.6,
          }}
        >
          {current.description}
        </p>
        {current.link && (
          <p
            style={{
              margin: "1.5rem 0 0",
              fontSize: "0.9375rem",
            }}
          >
            <a
              href={current.link}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "var(--primary)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Learn more →
            </a>
          </p>
        )}
      </div>

      {/* Navigation dots at the bottom */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          justifyContent: "center",
          padding: "1.25rem",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === index ? 32 : 10,
              height: 10,
              borderRadius: "999px",
              background: i === index ? "var(--primary)" : "var(--border-medium)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (i !== index) {
                e.currentTarget.style.background = "var(--border-strong)";
              }
            }}
            onMouseLeave={(e) => {
              if (i !== index) {
                e.currentTarget.style.background = "var(--border-medium)";
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
