"use client";

import { motion } from "framer-motion";

export default function ExperienceCard() {
  const handleScroll = () => {
    const el = document.querySelector('#CONFIRM');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="EXPERIENCE" className="min-h-screen flex items-center justify-center px-5 py-1 relative">
      <div className="absolute inset-0 bg-linear-to-b from-black via-zinc-950 to-black" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="relative z-10 w-full max-w-sm rounded-4xl"
      >
        {/* Glow animado */}
        <div className="absolute -inset-0.5 overflow-hidden rounded-[34px]">
          <motion.div
            animate={{
              x: ["-20%", "20%", "-10%"],
              y: ["-20%", "25%", "10%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="
        absolute
        w-55
        h-55
        rounded-full
        blur-3xl
        opacity-30
        bg-[#D6B98A]
        top-10
        left-[20%]
      "
          />
        </div>

        {/* Card */}
        <div className="relative rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden shadow-[0_0_80px_rgba(214,185,138,0.08)]">

          {/* brillo interno suave */}
          <div className="absolute inset-0 bg-linear-to-br from-[#D6B98A]/5 via-transparent to-transparent pointer-events-none" />

          <div className="absolute top-6 right-6 text-white/10 text-5xl font-thin">
            <img
              src="/logo.svg"
              alt="Ven y Ve"
              style={{ opacity: '25%' }}
            />
          </div>

          <p className="text-center text-white/80 text-lg leading-relaxed font-light">
            Vení y experimentá que
          </p>

          <p className="text-center text-white/80 text-lg leading-relaxed font-light">
            DIOS ES BUENO
          </p>

          <div className="mt-14 text-center">
            <p className="text-3xl font-thin tracking-[0.2em]">
              Sábado 16
            </p>

            <p className="mt-4 text-white/80 tracking-[0.3em] text-lg">
              19:30 HS
            </p>
          </div>

          <motion.button
            onClick={handleScroll}
            whileTap={{ scale: 0.95 }}
            className="mt-16 border border-[#FFF5EB]/20 px-8 py-3 rounded-full text-sm uppercase tracking-[0.3em] backdrop-blur-md w-full"
          >
            Solicitar ubicación
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
