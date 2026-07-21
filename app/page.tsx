"use client";

import { useEffect, useRef, useState } from "react";

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
  const [showPreloader, setShowPreloader] = useState(true);

  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (loading) return;

    // ======================
    // LENIS
    // ======================

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      lerp: 0.08,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // ======================
    // GSAP
    // ======================

    const ctx = gsap.context(() => {
      // Hero Pin
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "+=30%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });

      // About Reveal
      gsap.fromTo(
        aboutRef.current,
        {
          yPercent: 20,
        },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=80%",
            scrub: true,
          },
        }
      );

      // Hero Scale
      gsap.to(heroRef.current, {
        scale: 0.99,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=80%",
          scrub: true,
        },
      });

      // ======================
      // Hero Intro
      // ======================

      gsap.from(heroRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 1.2,
        ease: "power4.out",
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();

      lenis.destroy();

      gsap.ticker.remove(raf);
    };
  }, [loading]);

  return (
    <>
      {/* ======================
          PRELOADER
      ====================== */}

      {showPreloader && (
        <Preloader
          onFinish={() => {
            setLoading(false);

            setTimeout(() => {
              setShowPreloader(false);
            }, 200);
          }}
        />
      )}

      {/* ======================
          WEBSITE
      ====================== */}

      <div
        className={`
          transition-opacity
          duration-700
          ${loading ? "opacity-0" : "opacity-100"}
        `}
      >
        <Navbar />

        <main className="relative overflow-x-hidden bg-black">
          <Hero ref={heroRef} />

          <About ref={aboutRef} />

          <Skills />

          <Certificates />

          <Experience />

          <Projects />

          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}