"use client";

import Image from "next/image";
import SplashCursor from "@/components/animate/SplashCursor";
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import {
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

import {
  SiGithub,
  SiVercel,
} from "react-icons/si";

const projects = [
  {
    title: "Automatic Clip Generator",
    description:
      "Aplikasi AI untuk membuat video pendek secara otomatis dari video panjang menggunakan Whisper, FFmpeg, dan FastAPI.",

    image: "/projects/automaticclip.png",

    technologies: [
      "Python",
      "FastAPI",
      "Whisper",
      "FFmpeg",
      "Next.js",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "SmartLamp IoT",
    description:
      "Monitoring dan kontrol lampu rumah menggunakan ESP32, Blynk, Telegram Bot, dan MQTT.",

    image: "/projects/smartlampiot.jpeg",

    technologies: [
      "ESP32",
      "Arduino",
      "Blynk",
      "Telegram",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "Personal Portfolio",
    description:
      "Website portfolio modern menggunakan Next.js, Tailwind CSS dan Framer Motion.",

    image: "/projects/portfolio.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
    ],

    github: "https://github.com/robysunjaya20/potfolio",
    demo: "https://portfolio-roby-psi.vercel.app/",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.utils.toArray(".project-card").forEach((card: any, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -120 : 120,
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      });

      gsap.from(".project-more", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".project-more",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-white py-32"
    >
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#c23b95"
      />
      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <h2 className="mt-4 text-5xl font-black text-slate-900 md:text-6xl">
            My{" "}
            <span className="text-pink-500">
              Projects.
            </span>
          </h2>

        </div>

        {/* Projects */}

        <div className="mt-20 space-y-16">

          {projects.map((project) => (

            <div
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition
                duration-300
                hover:shadow-xl
              "
            >

              <div className="grid lg:grid-cols-2">

                {/* Image */}

                <div className="relative h-72 lg:h-full overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                {/* Content */}

                <div className="flex flex-col justify-center p-10">

                  <h3 className="text-3xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-6 leading-8 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-full
                          bg-pink-100
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-pink-600
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="mt-10 flex gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-300
                        px-6
                        py-3
                        transition
                        hover:bg-slate-900
                        hover:text-white
                      "
                    >
                      <SiGithub className="text-lg" />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-pink-500
                        px-6
                        py-3
                        text-white
                        transition
                        hover:bg-pink-600
                      "
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* More */}

        <div className="mt-20 text-center">

          <a
            href="https://github.com/"
            target="_blank"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-300
              px-8
              py-4
              font-semibold
              transition
              hover:bg-slate-900
              hover:text-white
            "
          >
            View More Projects

            <ArrowUpRight size={18} />

          </a>

        </div>

      </div>
    </section>
  );
}