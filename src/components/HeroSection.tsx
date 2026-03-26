"use client";

import { motion, Variants } from "framer-motion";
import { Star, Clock, Phone, ChevronDown, IndianRupee } from "lucide-react";
import HeroBackground from "./HeroBackground.client";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
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
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      <HeroBackground />

      {/* Content stack — mobile first, centered */}
      <div className="relative z-10 w-full max-w-[480px] mx-auto px-5 pt-32 pb-28 flex flex-col items-center text-center gap-0">

        {/* Eyebrow label */}
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="mb-5">
          <span className="section-label justify-center">
            Mamangalam · Kochi
          </span>
        </motion.div>

        {/* H1 — big and cinematic */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
          className="font-playfair text-[2.85rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-[-0.02em] text-[#F4ECE2] mb-5 w-full"
        >
          Modern Dining.
          <br />
          <span className="italic text-[#D1A352] text-glow-amber">Timeless Flavor.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
          className="text-[#A29A8D] text-base sm:text-lg font-inter leading-relaxed max-w-sm mx-auto mb-8"
        >
          Handcrafted burgers, steaks, and plates built for conversation — in the heart of Kochi.
        </motion.p>

        {/* Badge pills */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          <div className="pill">
            <Star size={12} className="text-[#D1A352] fill-[#D1A352]" />
            <span>4.5 / 5 · Top-Rated</span>
          </div>
          <div className="pill">
            <IndianRupee size={11} className="text-[#D1A352]" />
            <span>600–800 for two</span>
          </div>
          <div className="pill">
            <Clock size={11} className="text-[#D1A352]" />
            <span>Open · 11:00 PM</span>
          </div>
        </motion.div>

        {/* CTAs — stacked on mobile, 56px tall, full width */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-stretch justify-center gap-3 w-full max-w-sm"
        >
          <a
            href="#menu"
            onClick={(e) => { e.preventDefault(); scrollTo("#menu"); }}
            className="btn-amber text-sm font-montserrat font-bold uppercase tracking-[0.15em] w-full flex items-center justify-center active:scale-95"
            style={{ color: "#050608", minHeight: "56px", borderRadius: "999px" }}
          >
            View Menu
          </a>
          <a
            href="tel:+916282418166"
            className="btn-glass text-sm font-montserrat font-bold uppercase tracking-[0.12em] w-full flex items-center justify-center gap-2 active:scale-95"
            style={{ minHeight: "56px", borderRadius: "999px" }}
          >
            <Phone size={15} />
            Call to Reserve
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 pointer-events-none"
      >
        <span className="text-[9px] font-montserrat uppercase tracking-[0.3em] text-[#A29A8D]/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#D1A352]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
