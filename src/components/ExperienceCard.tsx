"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceCard() {
  const handleScroll = () => {
    const el = document.querySelector('#CONFIRM');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="EXPERIENCE" className="min-h-screen flex items-center justify-center px-5 py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="relative z-10 w-full max-w-sm rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
      >
        <div className="absolute top-6 right-6 text-white/10 text-5xl font-thin">
          <Image
            src="/logo.svg"
            alt="Ven y Ve"
            width={64}
            height={64}
            style={{ opacity: '25%' }}
          />
        </div>

        <p className="text-center text-white/80 text-lg leading-relaxed font-light">
          Vení y experimentá que </p>
        <p className="text-center text-white/80 text-lg leading-relaxed font-light">DIOS ES BUENO</p>

        <div className="mt-14 text-center">
          <p className="text-3xl font-thin tracking-[0.2em]">
            Sábado 16
          </p>

          <p className="mt-4 text-white/80 tracking-[0.3em] text-lg">
            19:30 HS
          </p>
        </div>

        <div className="mt-14 text-center">
          {/* <p className="text-white/50 text-sm leading-relaxed">
              La ubicación se comparte personalmente.
            </p> */}

          <button onClick={handleScroll} className="mt-8 w-full rounded-full border border-white/15 py-4 text-sm uppercase tracking-[0.2em] bg-white/5">
            Solicitar ubicación
          </button>
        </div>
      </motion.div>
    </section>
  );
}
