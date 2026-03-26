"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const SIGNATURES = [
  {
    id: "tenderloin",
    name: "Tenderloin Beef Steak",
    tagline: "The Crown Jewel",
    quote: "A masterclass in texture and flavor — rich, precise, unforgettable. Seared with house herbs and garlic butter.",
    image: "/steak.png",
  },
  {
    id: "beef-burger",
    name: "Beef Club Burger",
    tagline: "Kochi's Finest",
    quote: "Homestyle pumpkin seed buns, juicy beef patty with Westley's house sauce. Ordered again and again for good reason.",
    image: "/burger.png",
  },
  {
    id: "semifreddo",
    name: "Biscottino Semifreddo",
    tagline: "Italy in a Glass",
    quote: "A standout Italian semifreddo that closes every perfect dinner. Creamy bliss meets crunchy biscuit — unforgettable.",
    image: "/semifreddo.png",
  },
];

export default function SignatureSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section
      id="signatures"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#121316" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-0 w-full h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #1a1c1e, transparent)" }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Stitch editorial header */}
        <div className="mb-12 md:mb-16">
          <span
            className="text-[10px] font-label font-bold tracking-[0.3em] uppercase mb-2 block"
            style={{ color: "#d1a352" }}
          >
            The Collection
          </span>
          <h2
            className="text-4xl sm:text-5xl font-playfair font-bold leading-tight"
            style={{ color: "#e3e2e5" }}
          >
            Signature Dishes
          </h2>
          <p
            className="mt-4 leading-relaxed max-w-[300px] text-sm"
            style={{ color: "#d2c4b2" }}
          >
            A curated selection of our chef's most personal creations.
          </p>
        </div>

        {/* Editorial vertical stack — full card on mobile */}
        <div ref={ref} className="space-y-16 md:space-y-20">
          {SIGNATURES.map((dish, i) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
              className="relative group"
            >
              {/* Image — full width, cinematic aspect ratio */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[3/2] overflow-hidden rounded-xl"
                style={{ background: "#1a1c1e" }}>
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-all duration-700 grayscale-[0.15] group-hover:grayscale-0 scale-105 group-hover:scale-100"
                />
                {/* Bottom gradient for text bleed */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #121316 0%, transparent 60%)" }}
                />
                {/* Signature badge */}
                <div
                  className="absolute top-5 left-5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                  style={{ background: "#d1a352", color: "#422c00" }}
                >
                  Signature
                </div>
              </div>

              {/* Text content — editorial left-aligned */}
              <div className="mt-8 pl-1">
                <h3
                  className="text-3xl sm:text-4xl font-playfair italic mb-4"
                  style={{ color: "#e3e2e5" }}
                >
                  {dish.name}
                </h3>
                {/* Separator */}
                <div className="h-px w-10 mb-5" style={{ background: "rgba(209,163,82,0.4)" }} />
                {/* Block quote — Stitch style */}
                <blockquote
                  className="text-base sm:text-lg font-playfair italic leading-relaxed border-l-2 pl-4 mb-6"
                  style={{
                    color: "#d2c4b2",
                    borderColor: "rgba(209,163,82,0.25)",
                  }}
                >
                  &ldquo;{dish.quote}&rdquo;
                </blockquote>
                <button
                  className="flex items-center gap-3 text-xs font-label font-bold uppercase tracking-widest transition-all active:scale-95"
                  style={{
                    height: "48px",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    background: "rgba(52,53,56,0.4)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "0.375rem",
                    color: "#f0bf6b",
                    border: "1px solid rgba(240,191,107,0.15)",
                  }}
                >
                  Explore Profile
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
