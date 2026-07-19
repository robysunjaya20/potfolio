"use client";

import { useEffect, useState } from "react";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "@/components/preloader/Preloader";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Certificates from "@/components/sections/Certificates";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      lerp: 0.08,
    });

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [loading]);

  return (
    <>
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />

          <main className="relative overflow-x-hidden bg-black">
            <Hero />

            <section id="about">
              <About />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="certificates">
              <Certificates />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </main>

          <Footer />
        </>
      )}
    </>
  );
}