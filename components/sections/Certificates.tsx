"use client";

import Image from "next/image";
import ElectricBorder from "@/components/animate/ElectricBorder";
import { ExternalLink } from "lucide-react";

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
    link: "https://www.credly.com/badges/3093614d-bc58-4715-a323-1f50675b7d32/public_url",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "2026",
    image: "/certificates/python-essentials-1.jpg",
    link: "https://www.credly.com/badges/1940e90a-4bde-4f2a-9b38-a44492b95cb8/public_url",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-white py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            SERTIFIKAT
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900 md:text-6xl">
            Sertifikat{" "}
            <span className="text-pink-500">
              & Penghargaan.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            Sertifikat profesional yang saya peroleh dari Google,
            Coursera dan Cisco Networking Academy sebagai bukti
            kompetensi di bidang IT Support, Networking,
            Artificial Intelligence dan Internet of Things.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((cert) => (

            <ElectricBorder
              key={cert.title}
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

                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
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

                  <h3 className="text-xl font-bold text-slate-900">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    {cert.issuer}
                  </p>

                  <span
                    className="
                      mt-4
                      inline-block
                      rounded-full
                      bg-pink-100
                      px-3
                      py-1
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

          ))}

        </div>

      </div>
    </section>
  );
}