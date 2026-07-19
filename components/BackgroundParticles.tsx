"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";

import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function BackgroundParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await loadSlim(tsParticles);
      setReady(true);
    })();
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0"
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 22,
          },

          color: {
            value: [
              "#60a5fa",
              "#8b5cf6",
              "#ec4899",
              "#67e8f9",
            ],
          },

          links: {
            enable: true,
            distance: 170,
            opacity: 0.15,
            color: "#cbd5e1",
            width: 1,
          },

          move: {
            enable: true,
            speed: 0.4,
          },

          opacity: {
            value: 0.8,
          },

          size: {
            value: {
              min: 2,
              max: 4,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },

          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}