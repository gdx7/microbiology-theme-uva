// components/ParticlesBackground.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" }, // Repulse for a more active feel
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 120, // Shorter links
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 0.6, // Slower movement for elegance
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 100, // More particles for density
        },
        opacity: {
          value: 0.3, // More transparent
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 2 }, // Smaller particles
          random: true,
          anim: { enable: true, speed: 4, size_min: 0.1, sync: false }
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 z-0 pointer-events-none"
      />
    );
  }

  return null;
}