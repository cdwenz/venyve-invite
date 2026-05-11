"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ConfirmSection() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    await fetch("/api/rsvp", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
      }),
    });

    setLoading(false);

    alert("Presencia confirmada.");
  }

  return (
    <section id="CONFIRM" className="relative min-h-screen flex items-center justify-center px-6 py-10">
      <motion.form
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
      >
        <div className="mb-10 text-center">
          <div className="mb-12 flex justify-center">
          <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
            <img src={"/venyve_simple.svg"} alt="logo" />
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
            placeholder="Teléfono"
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-white/30"
          />

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
          className="mt-8 w-full rounded-full border border-white/15 py-4 uppercase tracking-[0.2em] text-sm bg-white/5"
        >
          {loading ? "Confirmando..." : "Confirmar presencia"}
        </button>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-white/30">
          Cupos limitados.
        </p>
      </motion.form>
    </section>
  );
}