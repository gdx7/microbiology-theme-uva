// app/components/NewsRotator.tsx
"use client";

import { useEffect, useState } from "react";
import { slides } from "../../data/news";

export default function NewsRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000); // change every 5s
    return () => clearInterval(id);
  }, []);

  return (
    <div className="frame" role="region" aria-label="News and publication highlights">
      {slides.map((s, i) => (
        <div className={`slide ${i === index ? "active" : ""}`} key={s.image}>
          <img src={s.image} alt={s.alt} />
          <div className="caption">
            <h3>{s.title}</h3>
            <p>{s.summary}</p>
            <a href={s.href} target="_blank" rel="noreferrer">Read more ↗</a>
          </div>
        </div>
      ))}

      <div className="dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
