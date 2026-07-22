"use client";

import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export interface TransitionOverlayHandle {
  play: (onComplete?: () => void) => void;
}

const TransitionOverlay = forwardRef<TransitionOverlayHandle>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);

  const shineRef = useRef<HTMLDivElement>(null);

  const timeline = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    gsap.set(containerRef.current, {
      autoAlpha: 0,
    });

    gsap.set(topPanelRef.current, {
      clipPath: "polygon(0 0,100% 0,100% 65%,0 100%)",
      x: 0,
      y: 0,
      rotate: 0,
    });

    gsap.set(bottomPanelRef.current, {
      clipPath: "polygon(0 35%,100% 0,100% 100%,0 100%)",
      x: 0,
      y: 0,
      rotate: 0,
    });

    gsap.set(shineRef.current, {
      opacity: 0,
      scaleX: 0,
    });

    timeline.current = gsap.timeline({
      paused: true,
    });

    timeline.current

      // tampilkan overlay
      .set(containerRef.current, {
        autoAlpha: 1,
      })

      // cahaya diagonal
      .to(
        shineRef.current,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.18,
          ease: "power2.out",
        },
        0
      )

      // panel atas
      .to(
        topPanelRef.current,
        {
          xPercent: 120,
          yPercent: -120,
          rotate: 8,
          duration: 0.95,
          ease: "power4.inOut",
        },
        0
      )

      // panel bawah
      .to(
        bottomPanelRef.current,
        {
          xPercent: -120,
          yPercent: 120,
          rotate: -8,
          duration: 0.95,
          ease: "power4.inOut",
        },
        0
      )

      .to(
        shineRef.current,
        {
          opacity: 0,
          duration: 0.25,
        },
        "-=0.35"
      )

      .to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.2,
      });

    return () => {
      timeline.current?.kill();
    };
  }, []);

  useImperativeHandle(ref, () => ({
    play(onComplete) {
      if (!timeline.current) return;

      timeline.current.eventCallback("onComplete", () => {
        onComplete?.();
      });

      timeline.current.restart();
    },
  }));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden"
    >
      {/* Panel Atas */}
      <div
        ref={topPanelRef}
        className="absolute inset-0 bg-black will-change-transform"
      />

      {/* Panel Bawah */}
      <div
        ref={bottomPanelRef}
        className="absolute inset-0 bg-black will-change-transform"
      />

      {/* Garis Cahaya */}
      <div
        ref={shineRef}
        className="
          absolute
          left-1/2
          top-1/2
          h-[3px]
          w-[180vw]
          -translate-x-1/2
          -translate-y-1/2
          -rotate-[33deg]
          bg-gradient-to-r
          from-transparent
          via-pink-400
          to-transparent
          blur-sm
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-black
          opacity-20
        "
      />
    </div>
  );
});

TransitionOverlay.displayName = "TransitionOverlay";

export default TransitionOverlay;