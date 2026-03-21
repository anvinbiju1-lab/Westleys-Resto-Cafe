"use client";

import { motion } from "framer-motion";
import { Star, Clock, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import HeroBackground from "./HeroBackground.client";

const easeOut = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-28 pb-24 text-center">
        {/* Eyebrow */}
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
          <span className="section-label justify-center mb-6 inline-flex">
            Mamangalam · Kochi
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#F4ECE2] mb-6 max-w-4xl mx-auto"
        >
          Modern Dining.{" "}
          <br className="hidden sm:block" />
          <span className="italic text-[#D1A352] text-glow-amber">
            Timeless Flavor.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
          className="text-[#A29A8D] text-lg md:text-xl font-inter leading-relaxed max-w-2xl mx-auto mb-10"
        >
          An intimate resto-café in Kochi, serving handcrafted burgers,
          steaks, and plates built for conversation.
        </motion.p>

        {/* Info Badge Pills */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <div className="pill">
            <Star size={13} className="text-[#D1A352] fill-[#D1A352]" />
            <span>4.5 / 5 · Top-Rated</span>
          </div>
          <div className="pill">
            <Clock size={12} className="text-[#D1A352]" />
            <span>Open · Closes 11:00 PM</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#menu");
              if (target) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = target.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
              }
            }}
            className="btn-amber px-8 py-4 text-sm rounded-full w-full sm:w-auto text-center"
            style={{ color: "#050608", display: "block" }}
          >
            View Menu
          </a>
          <a
            href="tel:+916282418166"
            className="btn-glass px-8 py-4 text-sm rounded-full w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            Call to Reserve
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-montserrat uppercase tracking-[0.25em] text-[#A29A8D]/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-[#D1A352]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
