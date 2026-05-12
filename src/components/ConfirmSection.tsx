"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ConfirmSection() {
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [phone, setPhone] = useState("");

  const formatPhone = (input: string) => {
    let value = input.replace(/\D/g, "");

    // eliminar 15 después de cod área
    value = value.replace(/^54(\d{2,4})15/, "54$1");

    // asegurar prefijo 54
    if (!value.startsWith("54")) {
      value = "54" + value;
    }

    // limitar longitud
    value = value.slice(0, 13);

    const match = value.match(/^54(\d{2,4})(\d{0,8})$/);

    if (!match) return "+" + value;

    const area = match[1];
    const number = match[2];

    return `+54 ${area} ${number}`.trim();
  };

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setLoading(true);

  const formData = new FormData(e.currentTarget);

  await fetch("/api/rsvp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      phone: phone.replace(/\D/g, ""),
      email: formData.get("email"),
    }),
  });

  setLoading(false);

  setConfirmed(true);
}

  if (confirmed) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
          relative
          w-full
          max-w-sm
          rounded-4xl
          overflow-hidden
          border
          border-[#D6B98A]/20
          bg-[#0A0A0A]
          p-8
          shadow-[0_0_80px_rgba(214,185,138,0.08)]
        "
        >
          {/* perforaciones ticket */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black border border-white/5" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black border border-white/5" />

          {/* logo */}
          <div className="flex justify-center mb-8 opacity-70">
            <img src="/logo.svg" alt="Ven y Ve" className="w-14" />
          </div>

          <p className="text-center text-xs tracking-[0.4em] text-[#D6B98A]/70 uppercase">
            Acceso confirmado
          </p>

          <h2 className="mt-6 text-center text-3xl font-light leading-relaxed text-white">
            Estás a punto de experimentar las bondades de Dios.
          </h2>

          <div className="my-10 border-t border-dashed border-white/10" />

          <div className="space-y-4 text-center">
            <p className="text-white/40 uppercase text-xs tracking-[0.3em]">
              Evento
            </p>

            <p className="text-white text-xl font-light">Ven y Ve</p>

            <p className="text-[#D6B98A] tracking-[0.25em] text-sm">
              Sábado 16 · 19:30 HS
            </p>
          </div>

          <div className="mt-12">
            <div className="h-14 rounded-xl bg-white/5 flex items-center justify-center tracking-[0.5em] text-white/30 text-xs">
              VV-2026-ACCESS
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-white/20 tracking-[0.2em] uppercase">
            La ubicación será enviada personalmente.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="CONFIRM"
      className="relative min-h-screen flex items-start justify-center px-6 py-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative w-full max-w-sm rounded-4xl p-px overflow-hidden"
      >
        {/* Glow animado SOLO borde */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
      absolute
      inset-0
      rounded-4xl
      bg-[conic-gradient(from_0deg,transparent,#D6B98A,transparent,#D6B98A,transparent)]
      opacity-40
    "
        />

        {/* Blur suave */}
        <div
          className="
      absolute
      inset-0
      rounded-4xl
      blur-md
      bg-[conic-gradient(from_0deg,transparent,#D6B98A,transparent,#D6B98A,transparent)]
      opacity-30
    "
        />

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="
      relative
      rounded-[31px]
      bg-black
      backdrop-blur-2xl
      p-8
      z-10
    "
        >
          <div className="mb-10 text-center">
            <div className="mb-12 flex justify-center">
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                <Image src="/logo.svg" alt="Ven y Ve" width={64} height={64} />
              </div>
            </div>

            <h2 className="text-2xl font-light">
              Charlas informales sobre Jesús.
            </h2>
          </div>

          <div className="space-y-5">
            <input
              name="name"
              placeholder="Nombre"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-white/30"
            />


            <input
              name="phone"
              type="tel"
              placeholder="+54 299 5278978"
              required
              value={phone}
              onChange={(e) => {
                setPhone(formatPhone(e.target.value));
              }}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-white/30"
            />
            
            {/* <input
              name="phone"
              placeholder="Teléfono"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-white/30"
            /> */}

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-white/30"
            />
          </div>

          <button
            disabled={loading}
            className="mt-8 w-full rounded-full border border-white/15 py-4 uppercase tracking-[0.2em] text-sm bg-white/5 text-[#D6B98A] cursor-pointer"
          >
            {loading ? "Confirmando..." : "Confirmar presencia"}
          </button>

          <p className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-white/50">
            Cupos limitados.
          </p>
        </motion.form>
      </motion.div>
    </section>
  );
}
