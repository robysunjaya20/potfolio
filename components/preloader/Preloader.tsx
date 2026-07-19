"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onFinish: () => void;
}

export default function Preloader({
  onFinish,
}: PreloaderProps) {
  const container = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          onComplete: onFinish,
        });
      },
    });

    //----------------------------------
    // Slide 1
    //----------------------------------

    tl.fromTo(
      text.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
      }
    );

    tl.to({}, { duration: 0.4 });

    tl.to(text.current, {
      opacity: 0,
      y: -40,
      duration: 0.4,
    });

    //----------------------------------
    // Slide 2
    //----------------------------------

    tl.call(() => {
      if (text.current) {
        text.current.innerHTML = `
        ROBY SUNJAYA<br/>
        <span class="text-pink-500">PORTFOLIO</span>
        `;
      }
    });

    tl.fromTo(
      text.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );

    tl.to({}, { duration: 0.5 });

    tl.to(text.current, {
      opacity: 0,
      y: -40,
      duration: 0.5,
    });

    // Slide 3
    tl.call(() => {
      if (text.current) {
        text.current.innerHTML = `
        ロビー・サンジャヤ
        `;
      }
    });

    tl.fromTo(
      text.current,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
      }
    );

    tl.to({}, { duration: 0.3 });

    tl.to(text.current, {
      opacity: 0,
      scale: 1.1,
      duration: 0.3,
    });
  }, [onFinish]);

  return (
    <div
      ref={container}
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-black
      text-white
    "
    >
      <h1
        ref={text}
        className="
        text-center
        text-5xl
        font-black
        leading-tight
        md:text-7xl
        tracking-wider
      "
      >
        WELCOME
        <br />
        <span className="text-pink-500">TO</span>
      </h1>
    </div>
  );
}