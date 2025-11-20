"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { slides } from "@/data/news";

export default function NewsRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  if (!slides.length) return null;
  const slide = slides[index];

  return (
    <div className="news-rotator animate-fade-in">
      <div style={{ position: "relative" }}>
        <Image
          src={slide.image}
          alt={slide.alt}
          width={1280}
          height={720}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: "auto 0 0",
            padding: "0.7rem 1rem",
            background:
              "linear-gradient(180deg, rgba(248,250,252,0) 0%, rgba(15,23,42,0.35) 90%)",
            color: "#f9fafb",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              alignItems: "flex-end",
            }}
          >
            <div>
              <div
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  fontSize: "0.7rem",
                  opacity: 0.85,
                  marginBottom: 2,
                }}
              >
                Highlight {index + 1}/{slides.length}
              </div>
              <strong style={{ display: "block", fontSize: "1.02rem" }}>
                {slide.title}
              </strong>
              <p
                style={{
                  margin: 0,
                  marginTop: 4,
                  fontSize: "0.86rem",
                  opacity: 0.95,
                }}
              >
                {slide.summary}
              </p>
            </div>
            <a
              href={slide.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ fontSize: "0.8rem" }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
