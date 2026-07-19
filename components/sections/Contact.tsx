"use client";

import ElectricBorder from "@/components/animate/ElectricBorder";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-32"
    >
      <div className="mx-auto max-w-5xl px-8">

        {/* Header */}

        <div className="text-center">

          <h2 className="mt-4 text-5xl font-black text-slate-900 md:text-6xl">
            Mari{" "}
            <span className="text-pink-500">
              Bekerja Sama
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-600">
            Saya terbuka untuk peluang kerja sebagai IT Support,
            IT Infrastructure, Networking, Web Development,
            maupun kolaborasi dalam berbagai project teknologi.
          </p>

        </div>

        {/* Contact Card */}

        <div className="mt-20">

          <ElectricBorder
            color="#ec4899"
            speed={1}
            chaos={0.12}
            style={{ borderRadius: 28 }}
          >

            <div className="rounded-[28px] bg-white p-10">

              <div className="grid gap-10 md:grid-cols-2">

                {/* LEFT */}

                <div>

                  <h3 className="text-3xl font-bold">
                    Hubungi Saya
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    Jangan ragu menghubungi saya apabila ingin
                    berdiskusi mengenai project, peluang kerja,
                    maupun kolaborasi di bidang teknologi.
                  </p>

                  <div className="mt-10 space-y-6">

                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-pink-100 p-3">
                        <Mail className="text-pink-500" />
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">
                          Gmail
                        </p>

                        <a
                          href="mailto:robysunjaya9@gmail.com"
                          className="font-semibold hover:text-pink-500"
                        >
                          robysunjaya9@gmail.com
                        </a>

                      </div>

                    </div>

                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-pink-100 p-3">
                        <Phone className="text-pink-500" />
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">
                          WhatsApp
                        </p>

                        <a
                          href="https://wa.me/62895385191979"
                          target="_blank"
                          className="font-semibold hover:text-pink-500"
                        >
                          +62 895-3851-91979
                        </a>

                      </div>

                    </div>

                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-pink-100 p-3">
                        <MapPin className="text-pink-500" />
                      </div>

                      <div>

                        <p className="text-sm text-slate-500">
                          Lokasi
                        </p>

                        <p className="font-semibold">
                          Bekasi, Indonesia
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                {/* RIGHT */}

                <div className="flex flex-col justify-center">

                  <div className="space-y-5">

                    <a
                      href="https://github.com/robysunjaya20"
                      target="_blank"
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-pink-300 hover:bg-pink-50"
                    >
                      <FaGithub className="text-2xl" />

                      <div>
                        <h4 className="font-bold">
                          GitHub
                        </h4>

                        <p className="text-sm text-slate-500">
                          https://github.com/robysunjaya20
                        </p>
                      </div>

                    </a>

                    <a
                      href="https://www.linkedin.com/in/roby-sunjaya-955798251"
                      target="_blank"
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-pink-300 hover:bg-pink-50"
                    >
                      <FaLinkedin className="text-2xl text-[#0A66C2]" />

                      <div>
                        <h4 className="font-bold">
                          LinkedIn
                        </h4>

                        <p className="text-sm text-slate-500">
                          https://www.linkedin.com/in/roby-sunjaya-955798251
                        </p>
                      </div>

                    </a>

                  </div>

                  <a
                    href="mailto:robysunjaya9@gmail.com"
                    className="
                      mt-10
                      inline-flex
                      items-center
                      justify-center
                      rounded-2xl
                      bg-pink-500
                      px-8
                      py-4
                      text-lg
                      font-semibold
                      text-white
                      transition
                      hover:bg-pink-600
                    "
                  >
                    Kirim Email
                  </a>

                </div>

              </div>

            </div>

          </ElectricBorder>

        </div>

      </div>
    </section>
  );
}