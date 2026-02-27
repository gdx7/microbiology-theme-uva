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
    link: "https://www.amsterdamumc.org",
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
    <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white/40 border border-academic-100/50 shadow-sm relative group">
      <div
        className={`flex-grow p-8 md:p-12 transition-all duration-300 ease-in-out ${isTransitioning ? "opacity-0 translate-y-2 relative" : "opacity-100 translate-y-0"
          }`}
      >
        {current.tag && (
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.15em] uppercase text-uva-red bg-uva-red/5 rounded-full border border-uva-red/10">
            {current.tag}
          </div>
        )}
        <h3 className="font-serif text-3xl font-bold text-academic-900 mb-6 group-hover:text-academic-700 transition-colors">
          {current.title}
        </h3>
        <p className="text-academic-600 text-lg leading-relaxed font-light mb-8 max-w-2xl">
          {current.description}
        </p>

        {current.link && (
          <a
            href={current.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-academic-900 hover:text-uva-red transition-all duration-300 mt-2"
          >
            Learn more
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        )}
      </div>

      {/* Navigation dots at the bottom */}
      <div className="flex justify-center gap-3 p-6 border-t border-academic-200/50 bg-white/30 backdrop-blur-sm">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-uva-red focus:ring-offset-2 ${i === index
                ? "w-8 bg-uva-red"
                : "w-2.5 bg-academic-300 hover:bg-academic-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
