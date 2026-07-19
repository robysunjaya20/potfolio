"use client";

import {
  Briefcase,
  GraduationCap,
  CalendarDays,
  MapPin,
} from "lucide-react";

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
      "Problem identification ",
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
      "Membangun berbagai project web menggunakan PHP, Next.js dan Laravel.",
      "Mengembangkan project ESP32 & IoT.",
      "Mempelajari Machine Learning dan Artificial Intelligence.",
      "Aktif mengikuti sertifikasi Cisco Networking Academy.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience"
      className="bg-slate-50 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <h2 className="mt-4 text-5xl font-black text-slate-900 md:text-6xl">
            Pengalaman{" "}
            <span className="text-pink-500">
              Kerja.
            </span>
          </h2>
        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-24 max-w-5xl">

          {/* Line */}

          <div className="absolute left-6 top-0 h-full w-[2px] bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <div
                key={exp.title}
                className={`relative mb-20 flex w-full ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Circle */}

                <div
                  className={`
                    absolute
                    left-6
                    top-8
                    z-20
                    flex
                    h-12
                    w-12
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    ${exp.color}
                    shadow-lg
                    md:left-1/2
                  `}
                >
                  <Icon className="text-white" size={22} />
                </div>

                {/* Card */}

                <div
                  className={`
                    ml-20
                    w-full
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                    md:ml-0
                    md:w-[44%]
                  `}
                >

                  <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-semibold text-pink-600">
                    {exp.period}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {exp.title}
                  </h3>

                  <p className="mt-2 font-semibold text-pink-500">
                    {exp.company}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-500">

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

                        <div className="mt-2 h-2 w-2 rounded-full bg-pink-500" />

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