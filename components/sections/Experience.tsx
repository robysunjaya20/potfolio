"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Briefcase,
  GraduationCap,
  CalendarDays,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Assembly Quality Control",
    company: "PT Hyundai Motor Manufacturing Indonesia",
    location: "Cikarang, Kabupaten Bekasi",
    period: "2021 - Sekarang",
    icon: Briefcase,
    color: "bg-pink-500",
    description:
      "Melakukan inspeksi kualitas kendaraan sesuai standar Hyundai, memastikan setiap unit memenuhi spesifikasi produksi sebelum dikirim ke pelanggan.",
    achievements: [
      "Quality Inspection kendaraan produksi.",
      "Problem identification.",
      "Berkoordinasi dengan Production dan Engineering.",
      "Membuat laporan hasil inspeksi harian.",
    ],
  },
  {
    title: "Mahasiswa Teknik Informatika",
    company: "Universitas Pelita Bangsa",
    location: "Cikarang, Kabupaten Bekasi",
    period: "2023 - Sekarang",
    icon: GraduationCap,
    color: "bg-blue-500",
    description:
      "Fokus pada bidang IT Infrastructure, Networking, Web Development, Artificial Intelligence, dan Internet of Things.",
    achievements: [
      "Membangun project menggunakan PHP, Laravel dan Next.js.",
      "Mengembangkan project ESP32 & IoT.",
      "Mempelajari Machine Learning dan Artificial Intelligence.",
      "Aktif mengikuti sertifikasi Cisco Networking Academy.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      const circles = gsap.utils.toArray<HTMLElement>(".timeline-circle");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Header
      tl.from(".experience-header", {
        y: 70,
        scale: 0.92,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        ease: "power4.out",
      });

      // Timeline
      tl.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.2,
        ease: "power4.out",
      });

      // Card 1
      tl.from(
        items[0],
        {
          x: -120,
          y: 40,
          scale: 0.95,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.5"
      );

      tl.from(
        circles[0],
        {
          scale: 0,
          duration: 0.4,
          ease: "back.out(2)",
        },
        "<"
      );

      // Card 2
      if (items[1]) {
        tl.from(
          items[1],
          {
            x: 120,
            y: 40,
            scale: 0.95,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.8,
            ease: "power4.out",
          },
          "+=0.15"
        );

        tl.from(
          circles[1],
          {
            scale: 0,
            duration: 0.4,
            ease: "back.out(2)",
          },
          "<"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-slate-50 py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}

        <div className="experience-header text-center">

          <h2 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl md:text-6xl">
            Pengalaman{" "}
            <span className="text-pink-500">
              Kerja.
            </span>
          </h2>

        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-16 max-w-5xl md:mt-24">

          {/* Line */}

          <div
            className="
              timeline-line
              absolute
              left-5
              top-0
              h-full
              w-1
              rounded-full
              bg-gradient-to-b
              from-pink-500
              to-blue-500
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <div
                key={exp.title}
                className={`timeline-item relative mb-14 flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Circle */}

                <div
                  className={`
                    timeline-circle
                    absolute
                    left-5
                    top-10
                    z-20
                    flex
                    h-12
                    w-12
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    shadow-xl
                    ${exp.color}
                    md:left-1/2
                  `}
                >
                  <Icon
                    size={22}
                    className="text-white"
                  />
                </div>

                {/* Card */}

                <div
                  className="
                    group
                    ml-14
                    w-full
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:scale-[1.02]
                    hover:shadow-[0_25px_60px_rgba(0,0,0,.12)]
                    md:ml-0
                    md:w-[44%]
                    md:p-8
                  "
                >

                  <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
                    {exp.period}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {exp.title}
                  </h3>

                  <p className="mt-2 font-semibold text-pink-500">
                    {exp.company}
                  </p>

                  <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:flex-wrap sm:gap-6">

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {exp.period}
                    </div>

                  </div>

                  <p className="mt-6 leading-8 text-slate-600">
                    {exp.description}
                  </p>

                  <ul className="mt-6 space-y-3">

                    {exp.achievements.map((item) => (

                      <li
                        key={item}
                        className="flex items-start gap-3"
                      >

                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-500" />

                        <span className="text-slate-600">
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}