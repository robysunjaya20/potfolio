import Link from "next/link";
import {Mail, FolderOpen } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Galaxy from "@/components/Galaxy";
import ProfileCard from "@/components/ProfileCard";
import GradientText from "@/components/animate/GradientText";
import TextType from "../TextType";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black dark:bg-slate-950 z-0"
    >
      <div className="absolute inset-0 z-0">
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
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />

      <div  id="hero-content"  className="relative  z-10 mx-auto flex h-full min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-20 px-6 pt-44 pb-24 lg:flex-row "
      >
        {/* LEFT */}
        <div className="flex-1">
          <p className="mb-5 text-lg font-semibold uppercase tracking-[0.25em] text-slate-500 text-white">
            Halo, Saya
          </p>

          <h1 className="text-6xl font-black leading-none md:text-8xl">
            <GradientText
              colors={["#5227FF","#FF9FFC"]}
              animationSpeed={2}
              showBorder={false}
              className="custom-class"
            >
              Roby Sunjaya
            </GradientText>
          </h1>

          {/* JOB TITLE */}
          <div className="mt-8">
            <div className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-8 py-5 shadow-xl">
              <TextType
                className="text-3xl md:text-5xl font-bold text-black"
                text={[
                  "IT Support",
                  "IT Infrastructure",
                  "Networking",
                  "Full Stack Web Developer",
                  "Internet of Things",
                  "Artificial Intelligence"
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

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-200">
            Saya adalah mahasiswa Teknik Informatika Universitas Pelita Bangsa
            yang bekerja sebagai Assembly Quality Control di PT Hyundai Motor
            Manufacturing Indonesia dan memiliki ketertarikan pada bidang IT
            Support, IT Infrastructure, Networking, Web Development, Internet of
            Things, serta Artificial Intelligence.
          </p>

          {/* SOCIAL */}
          <div className="mt-8 flex gap-5">
            <Link
              href="https://github.com/robysunjaya20"
              target="_blank"
              className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-white/10
              bg-white/5
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-110
              hover:bg-blue-500
              hover:border-blue-400
              "
            >
              <FaGithub size={28} />
            </Link>
            
            <Link
              href="https://www.linkedin.com/in/roby-sunjaya-955798251"
              target="_blank"
              className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-white/10
              bg-white/5
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-110
              hover:bg-blue-500
              hover:border-blue-400
              "
            >
              <FaLinkedin size={28} />
            </Link>
            
            <Link
              href="https://instagram.com/robysunjaya"
              target="_blank"
              className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-white/10
              bg-white/5
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-110
              hover:bg-pink-500
              hover:border-pink-400
              "
            >
              <FaInstagram size={28} />
            </Link>
          </div>

          {/* BUTTON */}
          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
            >
              <FolderOpen size={20} />
              Lihat Proyek
            </a>

            <a
              href="#contact"
              className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5
              backdrop-blur-xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-white/10 hover:scale-105"
            >
              <Mail size={20} />
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-1 justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-blue-500/20 blur-3xl" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
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
                behindGlowColor="rgba(154, 165, 183, 0.45)"
                innerGradient="linear-gradient(145deg,#1e293b 0%,#2563eb44 100%)"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}