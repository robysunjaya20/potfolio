"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TechMarquee from "@/components/animate/TechMarquee";

import {
  languages,
  frameworks,
  databases,
  tools,
} from "@/components/data/techStack";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".stack-row");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Header
      tl.from(".skills-header", {
        y: 60,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
      });

      // Languages
      tl.from(rows[0], {
        x: -120,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Frameworks
      tl.from(rows[1], {
        x: 120,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Databases
      tl.from(rows[2], {
        x: -120,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Tools
      tl.from(rows[3], {
        x: 120,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-slate-50
        to-white
        py-32
      "
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[180px]" />

      <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="absolute -right-40 top-40 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[150px]" />

      {/* Header */}

      <div className="skills-header relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="mt-6 text-5xl font-black text-slate-900 md:text-6xl">
          TECH <span className="text-pink-500">STACK</span>
        </h2>
      </div>

      {/* Tech Stack */}

      <div className="relative z-10 mt-20 space-y-12">

        {/* Languages */}

        <div className="stack-row">
          <div className="mx-auto mb-5 max-w-7xl px-6">
            <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.50em] text-white">
              Languages
            </span>
          </div>

          <TechMarquee
            items={languages}
            direction="left"
            speed={35}
          />
        </div>

        {/* Frameworks */}

        <div className="stack-row">
          <div className="mx-auto mb-5 max-w-7xl px-6">
            <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.50em] text-white">
              Frameworks & Libraries
            </span>
          </div>

          <TechMarquee
            items={frameworks}
            direction="right"
            speed={35}
          />
        </div>

        {/* Databases */}

        <div className="stack-row">
          <div className="mx-auto mb-5 max-w-7xl px-6">
            <span className="rounded-full bg-blue-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.50em] text-white">
              Databases & ORM
            </span>
          </div>

          <TechMarquee
            items={databases}
            direction="left"
            speed={35}
          />
        </div>

        {/* Tools */}

        <div className="stack-row">
          <div className="mx-auto mb-5 max-w-7xl px-6">
            <span className="rounded-full bg-blue-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.50em] text-white">
              Tools & Ecosystem
            </span>
          </div>

          <TechMarquee
            items={tools}
            direction="right"
            speed={35}
          />
        </div>

      </div>
    </section>
  );
}