"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onFinish: () => void;
}

export default function Preloader({
  onFinish,
}: PreloaderProps) {
  const text = useRef<HTMLHeadingElement>(null);

  const leftPanel = useRef<HTMLDivElement>(null);
  const rightPanel = useRef<HTMLDivElement>(null);
  const centerLine = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    // Slide 1

    tl.fromTo(
      text.current,
      {
        opacity: 0,
        y: 60,
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.4,
      }
    );

    tl.to({}, { duration: 0.4 });

    tl.to(text.current, {
      opacity: 0,
      y: -40,
      filter: "blur(12px)",
      duration: 0.3,
    });

    // Slide 2

    tl.call(() => {
      if (!text.current) return;

      text.current.innerHTML = `
        ROBY SUNJAYA<br/>
        <span class="text-pink-500">PORTFOLIO</span>
      `;
    });

    tl.fromTo(
      text.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.4,
      }
    );

    tl.to({}, { duration: 0.4 });

    tl.to(text.current, {
      opacity: 0,
      y: -40,
      filter: "blur(12px)",
      duration: 0.3,
    });

    // Slide 3

    tl.call(() => {
      if (!text.current) return;

      text.current.innerHTML = `
        ロビ サンジャヤ
      `;
    });

    tl.fromTo(
      text.current,
      {
        opacity: 0,
        scale: 0.9,
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.4,
      }
    );

    tl.to({}, { duration: 0.4 });

    tl.to(text.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.4,
    });

    // Center Line

    tl.fromTo(
      centerLine.current,
      {
        opacity: 0,
        scaleY: 0,
      },
      {
        opacity: 1,
        scaleY: 1,
        duration: 0.3,
      }
    );

    // Curtain Reveal

    tl.to(
      leftPanel.current,
      {
        xPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      },
      "+=0.1"
    );

    tl.to(
      rightPanel.current,
      {
        xPercent: 100,
        duration: 1,
        ease: "power4.inOut",
      },
      "<"
    );

    tl.to(
      centerLine.current,
      {
        opacity: 0,
        duration: 0.3,
      },
      "<"
    );

    tl.to({}, { duration: 0.15 });

    tl.call(() => {
      onFinish();
    });

    return () => {
      tl.kill();
    };
  }, [onFinish]);

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        overflow-hidden
        pointer-events-none
      "
    >
      {/* Left Curtain */}

      <div
        ref={leftPanel}
        className="
          absolute
          inset-y-0
          left-0
          w-1/2
          bg-black
          z-10
        "
      />

      {/* Right Curtain */}

      <div
        ref={rightPanel}
        className="
          absolute
          inset-y-0
          right-0
          w-1/2
          bg-black
          z-10
        "
      />

      {/* Center Glow Line */}

      <div
        ref={centerLine}
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-pink-500
          opacity-0
          z-20
          shadow-[0_0_30px_#ec4899]
        "
      />

      {/* Text */}

      <div
        className="
          absolute
          inset-0
          z-30
          flex
          items-center
          justify-center
        "
      >
        <h1
          ref={text}
          className="
            text-center
            text-5xl
            font-black
            leading-tight
            tracking-[0.15em]
            text-white
            md:text-7xl
          "
        >
          WELCOME
          <br />
          <span className="text-pink-500">
            TO
          </span>
        </h1>
      </div>
    </div>
  );
}