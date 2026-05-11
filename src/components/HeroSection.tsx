"use client";

import { motion } from "framer-motion";

export default function HeroSection() {

  const handleScroll = () => {
    const el = document.querySelector('#EXPERIENCE');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center"
      >
        <div className="mb-12 flex justify-center">
          <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
            <img src={"/Venyve_simple.svg"} />
          </div>
        </div>

        <h1 className="text-4xl leading-tight font-light tracking-wide max-w-xs">
          No hace falta explicar demasiado.
        </h1>

        <motion.button
          onClick={handleScroll}
          whileTap={{ scale: 0.95 }}
          className="mt-16 border border-white/20 px-8 py-3 rounded-full text-sm uppercase tracking-[0.3em] backdrop-blur-md"
        >
          Ven y ve
        </motion.button>
      </motion.div>
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors duration-300 cursor-pointer"
        aria-label="Scroll hacia abajo"
      >
        <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
        <i className="ri-arrow-down-line animate-bounce text-lg"></i>
      </button>
    </section>
  );
}
