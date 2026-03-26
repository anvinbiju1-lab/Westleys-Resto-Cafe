"use client";

import { motion, Variants } from "framer-motion";
import { Star, Clock, IndianRupee, ChevronDown, UtensilsCrossed } from "lucide-react";
import HeroBackground from "./HeroBackground.client";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
  }),
};

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center overflow-hidden">
      <HeroBackground />

      {/* Ambient glow behind CTA area */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, rgba(209,163,82,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[480px] mx-auto px-6 pt-32 pb-32 flex flex-col items-start text-left gap-0">

        {/* Eyebrow */}
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="mb-4">
          <span className="text-[10px] font-label font-bold tracking-[0.3em] uppercase" style={{ color: "#d1a352" }}>
            Mamangalam · Kochi
          </span>
        </motion.div>

        {/* H1 — editorial Playfair Display */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
          className="font-playfair text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-glow-amber mb-6"
          style={{ color: "#e3e2e5" }}
        >
          Modern Dining.<br />
          <span className="italic" style={{ color: "#f0bf6b" }}>Timeless Flavor.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
          className="text-lg leading-relaxed mb-10 max-w-[280px]"
          style={{ color: "#d2c4b2" }}
        >
          Handcrafted burgers, steaks, and plates built for conversation.
        </motion.p>

        {/* Badge pills */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 mb-12"
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold font-label"
            style={{ background: "rgba(41,42,45,0.7)", backdropFilter: "blur(12px)" }}
          >
            <Star size={12} style={{ color: "#f0bf6b", fill: "#f0bf6b" }} />
            <span style={{ color: "#e3e2e5" }}>4.5/5</span>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold"
            style={{ background: "rgba(41,42,45,0.7)", backdropFilter: "blur(12px)" }}
          >
            <IndianRupee size={11} style={{ color: "#d2c4b2" }} />
            <span style={{ color: "#d2c4b2" }}>600–800 <span className="opacity-60 text-[10px]">/ two</span></span>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold"
            style={{ background: "rgba(41,42,45,0.7)", backdropFilter: "blur(12px)" }}
          >
            <Clock size={11} style={{ color: "#f0bf6b" }} />
            <span style={{ color: "#f0bf6b" }}>Open · 11:00 PM</span>
          </div>
        </motion.div>

        {/* CTA Stack — Stitch style with amber gradient and glass secondary */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 w-full"
        >
          <a
            href="#menu"
            onClick={(e) => { e.preventDefault(); scrollTo("#menu"); }}
            className="btn-primary w-full flex items-center justify-center gap-3 active:scale-[0.98]"
            style={{ borderRadius: "9999px", minHeight: "56px" }}
          >
            View Menu
            <UtensilsCrossed size={16} />
          </a>
          <a
            href="tel:+916282418166"
            className="btn-glass-secondary w-full flex items-center justify-center gap-3 active:scale-[0.98]"
            style={{ borderRadius: "9999px" }}
          >
            Call Reserve
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]" style={{ color: "#9b8f7f" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} style={{ color: "rgba(240,191,107,0.5)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
