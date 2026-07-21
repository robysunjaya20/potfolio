"use client";

import { forwardRef, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = forwardRef<HTMLElement>((_props, ref) => {
  const sectionRef = useRef<HTMLElement>(null);
  const setRefs = (node: HTMLElement | null) => {
  sectionRef.current = node;

  if (typeof ref === "function") {
    ref(node);
  } else if (ref) {
    ref.current = node;
  }
};

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-image", {
        x: -120,
        opacity: 0,
        scale: 0.9,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-title", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-role", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-text", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      gsap.from(".about-button", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={setRefs}
      id="about"
      className="relative overflow-hidden bg-white py-20 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div className="about-image flex justify-center">

            <div className="relative w-full max-w-sm md:max-w-md">

              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[32px] bg-yellow-100 md:translate-x-5 md:translate-y-5" />

              <div className="relative overflow-hidden rounded-[32px] bg-orange-300 shadow-2xl transition duration-500 hover:rotate-0 md:rotate-[3deg]">

                <Image
                  src="/images/roby.jpg"
                  alt="Roby Sunjaya"
                  width={440}
                  height={540}
                  priority
                  className="h-auto w-full object-cover"
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <h2 className="about-title text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">

              SAYA{" "}

              <span className="mt-2 inline-block rounded-xl bg-blue-500 px-4 py-2 text-white">
                ROBY SUNJAYA
              </span>

            </h2>

            <div className="about-role mt-8 inline-block -rotate-2 rounded-2xl bg-emerald-400 px-6 py-3 shadow-xl md:px-8 md:py-4">

              <h3 className="text-2xl font-black tracking-tight text-slate-900 md:text-4xl">
                IT SUPPORT
              </h3>

            </div>

            <div className="mt-10 flex">

              <div className="mr-5 w-1 rounded-full bg-violet-500 md:mr-8" />

              <div className="space-y-6">

                <p className="about-text text-base leading-8 text-slate-600 md:text-lg md:leading-9 lg:text-xl lg:leading-10">
                  Saya adalah mahasiswa Teknik Informatika Universitas
                  Pelita Bangsa yang saat ini bekerja sebagai Assembly
                  Quality Control di PT Hyundai Motor Manufacturing
                  Indonesia.
                </p>

                <p className="about-text text-base leading-8 text-slate-600 md:text-lg md:leading-9 lg:text-xl lg:leading-10">
                  Saya memiliki ketertarikan pada bidang IT Support,
                  IT Infrastructure, Networking, Web Development,
                  Internet of Things serta Artificial Intelligence.
                </p>

              </div>

            </div>

            <a
              href="/cv/CV ROBY SUNJAYA IT.pdf"
              download
              className="
                about-button
                mt-12
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-slate-900
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-blue-600
                sm:w-auto
              "
            >
              <Download size={20} />
              Download CV
            </a>

          </div>

        </div>

      </div>
    </section>
  );
});

About.displayName = "About";

export default About;