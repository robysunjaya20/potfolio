"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-image", {
        x: -120,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
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
        y: 50,
        opacity: 0,
        delay: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-text", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
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
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-white py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div className="about-image flex justify-center">
            <div className="relative">
              {/* Shadow */}
              <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[40px] bg-yellow-100" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[40px] bg-orange-300 shadow-xl rotate-[3deg] transition duration-500 hover:rotate-0">
                <Image
                  src="/images/roby.jpg"
                  alt="Roby Sunjaya"
                  width={440}
                  height={540}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="about-title text-5xl font-black leading-tight text-slate-900">
              SAYA{" "}
              <span className="rounded-xl bg-blue-500 px-4 py-2 text-white">
                ROBY SUNJAYA
              </span>
            </h2>

            <div className="about-role mt-8 inline-block -rotate-2 rounded-2xl bg-emerald-400 px-8 py-4 shadow-lg">
              <h3 className="text-4xl font-black tracking-tight text-slate-900">
                IT SUPPORT
              </h3>
            </div>

            <div className="mt-10 flex">
              <div className="mr-8 w-1 rounded-full bg-violet-500" />

              <div className="space-y-8">
                <p className="about-text text-xl leading-10 text-slate-600">
                  Saya adalah mahasiswa Teknik Informatika Universitas
                  Pelita Bangsa yang saat ini bekerja sebagai Assembly
                  Quality Control di PT Hyundai Motor Manufacturing
                  Indonesia.
                </p>

                <p className="about-text text-xl leading-10 text-slate-600">
                  Saya memiliki ketertarikan pada bidang IT Support,
                  IT Infrastructure, Networking, Web Development,
                  Internet of Things, serta Artificial Intelligence.
                </p>
              </div>
            </div>

            <a
              href="/cv/CV ROBY SUNJAYA IT.pdf"
              download
              className="about-button mt-12 inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-5 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-600"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}