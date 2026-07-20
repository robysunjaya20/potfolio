import Link from "next/link";
import { Mail, FolderOpen } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

import Galaxy from "@/components/Galaxy";
import ProfileCard from "@/components/ProfileCard";
import GradientText from "@/components/animate/GradientText";
import TextType from "../TextType";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Galaxy */}
      <div className="absolute inset-0 -z-10">
        <Galaxy
          mouseInteraction
          mouseRepulsion
          density={1.3}
          glowIntensity={0.2}
          saturation={0}
          hueShift={210}
          twinkleIntensity={0.2}
          rotationSpeed={0.02}
          repulsionStrength={3}
          starSpeed={0.4}
          speed={0.8}
          transparent
        />
      </div>

      {/* Glow */}
      <div className="absolute left-1/2 top-40 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px] sm:h-[420px] sm:w-[420px] lg:h-[600px] lg:w-[600px]" />

      <div
        id="hero-content"
        className="
        relative z-10
        mx-auto
        flex
        min-h-screen
        max-w-7xl
        flex-col-reverse
        items-center
        justify-center
        gap-14
        px-5
        pt-28
        pb-20

        sm:px-8
        md:pt-32
        lg:flex-row
        lg:justify-between
        lg:gap-20
        lg:px-10
        lg:pt-40
        lg:pb-24
        "
      >
        {/* LEFT */}
        <div className="flex-1 text-center lg:text-left">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-300 sm:text-base">
            Halo, Saya
          </p>

          <h1 className="leading-none">
            <GradientText
              colors={["#5227FF", "#FF9FFC"]}
              animationSpeed={2}
              showBorder={false}
            >
              <span className="block text-5xl font-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                Roby
              </span>

              <span className="block text-5xl font-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                Sunjaya
              </span>
            </GradientText>
          </h1>

          {/* JOB */}
          <div className="mt-8 flex justify-center lg:justify-start">

            <div className="rounded-2xl bg-cyan-400 px-5 py-3 shadow-xl sm:px-7 sm:py-4">

              <TextType
                className="text-lg font-bold text-black sm:text-2xl lg:text-4xl"
                text={[
                  "IT Support",
                  "IT Infrastructure",
                  "Networking",
                  "Full Stack Web Developer",
                  "Internet of Things",
                  "Artificial Intelligence",
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={1800}
                showCursor
                cursorCharacter="|"
                cursorBlinkDuration={0.6}
              />

            </div>

          </div>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0 lg:max-w-2xl lg:text-xl lg:leading-9">
            Saya adalah mahasiswa Teknik Informatika Universitas Pelita Bangsa
            yang bekerja sebagai Assembly Quality Control di PT Hyundai Motor
            Manufacturing Indonesia dan memiliki ketertarikan pada bidang IT
            Support, IT Infrastructure, Networking, Web Development, Internet
            of Things, serta Artificial Intelligence.
          </p>

          {/* SOCIAL */}
          <div className="mt-8 flex justify-center gap-4 lg:justify-start">

            {[
              {
                icon: <FaGithub size={24} />,
                link: "https://github.com/robysunjaya20",
              },
              {
                icon: <FaLinkedin size={24} />,
                link: "https://www.linkedin.com/in/roby-sunjaya-955798251",
              },
              {
                icon: <FaInstagram size={24} />,
                link: "https://instagram.com/robysunjaya",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-110
                hover:bg-blue-500
                "
              >
                {item.icon}
              </Link>
            ))}

          </div>

          {/* BUTTON */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <a
              href="#projects"
              className="
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              px-7
              py-4
              font-semibold
              text-white
              shadow-xl
              transition
              hover:scale-105
              "
            >
              <FolderOpen size={20} />
              Lihat Proyek
            </a>

            <a
              href="#contact"
              className="
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-white/5
              px-7
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              hover:scale-105
              hover:border-cyan-400
              hover:bg-white/10
              "
            >
              <Mail size={20} />
              Hubungi Saya
            </a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-1 justify-center">

          <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[430px]">

            <div className="absolute inset-0 rounded-[36px] bg-blue-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-slate-700 bg-slate-900 p-3 shadow-2xl">

              <ProfileCard
                name="Roby Sunjaya"
                title="IT Support | IT Enthusiast"
                handle="robysunjaya"
                status="Available for Work"
                contactText="Contact Me"
                avatarUrl="/images/profile.png"
                miniAvatarUrl="/images/profile.png"
                showUserInfo={true}
                enableTilt={true}
                behindGlowEnabled
                behindGlowColor="rgba(154,165,183,.45)"
                innerGradient="linear-gradient(145deg,#1e293b 0%,#2563eb44 100%)"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}