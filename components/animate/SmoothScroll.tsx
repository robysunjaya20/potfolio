"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Hilangkan lag smoothing agar animasi lebih halus
    gsap.ticker.lagSmoothing(0);

    // Refresh setelah layout selesai
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return <>{children}</>;
}