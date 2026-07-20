"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ElectricBorder from "@/components/animate/ElectricBorder";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".contact-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-white py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="contact-title text-center">

          <h2 className="text-4xl font-black text-slate-900 sm:text-5xl md:text-6xl">
            Mari{" "}
            <span className="text-pink-500">
              Bekerja Sama
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg md:leading-9">
            Saya terbuka untuk peluang kerja sebagai IT Support,
            IT Infrastructure, Networking, Web Development,
            maupun kolaborasi dalam berbagai project teknologi.
          </p>

        </div>

        {/* Card */}

        <div className="contact-card mt-12 md:mt-20">

          <ElectricBorder
            color="#ec4899"
            speed={1}
            chaos={0.12}
            style={{ borderRadius: 28 }}
          >

            <div className="rounded-[28px] bg-white p-6 sm:p-8 md:p-10">

              <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

                {/* LEFT */}

                <div className="text-center lg:text-left">

                  <h3 className="text-2xl font-bold md:text-3xl">
                    Hubungi Saya
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    Jangan ragu menghubungi saya apabila ingin berdiskusi
                    mengenai project, peluang kerja maupun kolaborasi
                    di bidang teknologi.
                  </p>

                  <div className="mt-10 space-y-6">

                    {/* Gmail */}

                    <div className="contact-item flex items-center gap-4 text-left">

                      <div className="rounded-xl bg-pink-100 p-3">
                        <Mail className="text-pink-500" />
                      </div>

                      <div className="min-w-0">

                        <p className="text-sm text-slate-500">
                          Gmail
                        </p>

                        <a
                          href="mailto:robysunjaya9@gmail.com"
                          className="break-all font-semibold hover:text-pink-500"
                        >
                          robysunjaya9@gmail.com
                        </a>

                      </div>

                    </div>

                    {/* Whatsapp */}

                    <div className="contact-item flex items-center gap-4 text-left">

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

                    {/* Location */}

                    <div className="contact-item flex items-center gap-4 text-left">

                      <div className="rounded-xl bg-pink-100 p-2.5 sm:p-3">
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
                      className="contact-item flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-pink-300 hover:bg-pink-50 hover:-translate-y-1"
                    >
                      <FaGithub className="text-2xl sm:text-3xl" />

                      <div className="min-w-0">

                        <h4 className="font-bold">
                          GitHub
                        </h4>

                        <p className="truncate text-sm text-slate-500">
                          github.com/robysunjaya20
                        </p>

                      </div>

                    </a>

                    <a
                      href="https://www.linkedin.com/in/roby-sunjaya-955798251"
                      target="_blank"
                      className="contact-item flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-pink-300 hover:bg-pink-50 hover:-translate-y-1"
                    >
                      <FaLinkedin className="text-2xl text-[#0A66C2] sm:text-3xl" />

                      <div className="min-w-0">

                        <h4 className="font-bold">
                          LinkedIn
                        </h4>

                        <p className="truncate text-sm text-slate-500">
                          linkedin.com/in/roby-sunjaya-955798251
                        </p>

                      </div>

                    </a>

                  </div>

                  <a
                    href="mailto:robysunjaya9@gmail.com"
                    className="
                      mt-8
                      flex
                      w-full
                      items-center
                      justify-center
                      rounded-2xl
                      bg-pink-500
                      px-6
                      py-3.5
                      text-base
                      font-semibold
                      text-white
                      transition-all
                      duration-300

                      hover:bg-pink-600
                      hover:scale-[1.02]

                      sm:mt-10
                      sm:py-4
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