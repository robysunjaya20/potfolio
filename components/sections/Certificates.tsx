"use client";

import { useLayoutEffect, useRef } from "react";

import Image from "next/image";
import ElectricBorder from "@/components/animate/ElectricBorder";
import { ExternalLink } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    title: "Technical Support Fundamentals",
    issuer: "Google • Coursera",
    year: "2026",
    image: "/certificates/technical-support-fundamentals.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/R29KS6O2UC94",
  },
  {
    title: "Introduction to IoT and Digital Transformation",
    issuer: "Cisco Networking Academy",
    year: "2026",
    image: "/certificates/introduction-iot.jpg",
    link: "https://www.credly.com/badges/28eee70a-49bc-433a-b844-3733b0ea6027/public_url",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    year: "2026",
    image: "/certificates/data-analytics.jpg",
    link: "https://www.credly.com/badges/8ae8242e-9d7b-4920-8f49-a9c35012a486/public_url",
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    year: "2026",
    image: "/certificates/modern-ai.jpg",
    link: "https://www.credly.com/earner/earned/badge/3093614d-bc58-4715-a323-1f50675b7d32",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "2026",
    image: "/certificates/python-essentials-1.jpg",
    link: "https://www.credly.com/earner/earned/badge/1940e90a-4bde-4f2a-9b38-a44492b95cb8",
  },
];

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cert-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".cert-description", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      gsap.from(".certificate-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="bg-white py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="cert-header mt-4 text-4xl font-black text-slate-900 sm:text-5xl md:text-6xl">
            Sertifikat{" "}
            <span className="text-pink-500">
              & Penghargaan.
            </span>
          </h2>

          <p className="cert-description mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 md:text-lg md:leading-9">
            Sertifikat profesional yang saya peroleh dari Google,
            Coursera dan Cisco Networking Academy sebagai bukti
            kompetensi di bidang IT Support, Networking,
            Artificial Intelligence dan Internet of Things.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {certificates.map((cert) => (

            <div
              key={cert.title}
              className="certificate-card"
            >
              <ElectricBorder
                color="#603cb3"
                speed={1}
                chaos={0.15}
                style={{ borderRadius: 24 }}
              >

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-3xl bg-white"
                >

                  {/* Image */}

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width:768px) 100vw,
                             (max-width:1280px) 50vw,
                             33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-black/0
                        transition-all
                        duration-300
                        group-hover:bg-black/50
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          bg-white
                          px-5
                          py-3
                          text-sm
                          font-semibold
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:opacity-100
                        "
                      >
                        <ExternalLink size={18} />
                        View Certificate
                      </div>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-6">

                    <h3 className="text-lg font-bold leading-7 text-slate-900 sm:text-xl">
                      {cert.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {cert.issuer}
                    </p>

                    <span
                      className="
                        mt-5
                        inline-flex
                        rounded-full
                        bg-pink-100
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-pink-600
                      "
                    >
                      {cert.year}
                    </span>

                  </div>

                </a>

              </ElectricBorder>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}