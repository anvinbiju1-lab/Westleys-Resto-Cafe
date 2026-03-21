"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

const SIGNATURES = [
  {
    id: "tenderloin",
    name: "Tenderloin Beef Steak",
    tagline: "The Crown Jewel",
    description: "Signature cut, perfectly seared with house-made herbs and garlic butter. A masterclass in texture and flavor — rich, precise, unforgettable.",
    price: "₹550",
    image: "/steak.png",
    color: "#D1A352",
    accent: "rgba(209,163,82,0.15)",
  },
  {
    id: "beef-burger",
    name: "Beef Club Burger",
    tagline: "Kochi's Finest",
    description: "Homestyle pumpkin seed buns — elegantly crafted, not sloppy. Juicy beef patty with Westley's house sauce. Ordered again and again for good reason.",
    price: "₹350",
    image: "/burger.png",
    color: "#D1A352",
    accent: "rgba(209,163,82,0.12)",
  },
  {
    id: "semifreddo",
    name: "Biscottino Semifreddo",
    tagline: "Italy in a Glass",
    description: "A standout Italian semifreddo dessert that closes every perfect dinner. Creamy bliss meets crunchy biscuit — one of those plates that lingers in memory.",
    price: "₹280",
    image: "/semifreddo.png",
    color: "#D1A352",
    accent: "rgba(209,163,82,0.1)",
  },
];

export default function SignatureSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section id="signatures" className="py-28 md:py-36 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(209,163,82,0.3) 50%, transparent 100%)" }} />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <span className="section-label">Signature Series</span>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-[#F4ECE2]">
              Chef&apos;s<br />
              <span className="italic text-[#D1A352]">Recommendations</span>
            </h2>
          </div>
          <a
            href="#menu"
            className="flex items-center gap-2 text-[#D1A352] font-montserrat text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all pb-2 group"
          >
            View Full Menu <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Dish Cards */}
        <div className="flex flex-col gap-6">
          {SIGNATURES.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="group relative rounded-3xl overflow-hidden border border-[#27272F] hover:border-[#D1A352]/30 transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, #111319 0%, #151820 100%)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 min-h-[360px]">
                {/* Text side */}
                <div className={`flex flex-col justify-center gap-6 p-8 md:p-12 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-1.5 text-[10px] font-montserrat font-bold uppercase tracking-[0.3em] text-[#D1A352]">
                      <Sparkles size={9} /> {dish.tagline}
                    </span>
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#F4ECE2] group-hover:text-[#D1A352] transition-colors duration-500 leading-tight">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="text-[#A29A8D] text-base font-inter leading-relaxed max-w-md">
                    {dish.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="font-playfair text-3xl font-bold text-[#F4ECE2]">{dish.price}</span>
                    <div className="w-10 h-px bg-[#27272F] group-hover:bg-[#D1A352] transition-colors duration-500" />
                    <a
                      href="tel:+916282418166"
                      className="text-xs font-montserrat font-bold uppercase tracking-widest text-[#D1A352] hover:text-[#F4ECE2] transition-colors"
                    >
                      Order Now
                    </a>
                  </div>
                </div>

                {/* Image side */}
                <div className={`relative overflow-hidden min-h-[280px] md:min-h-[360px] ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(17,19,25,0.7) 0%, rgba(17,19,25,0.1) 50%, rgba(17,19,25,0.05) 100%)" }} />
                  {/* Price badge */}
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border border-[#D1A352]/30 group-hover:scale-110 transition-transform duration-500"
                    style={{ background: "rgba(5,6,8,0.6)" }}>
                    <span className="font-playfair text-sm font-bold text-[#D1A352]">{dish.price}</span>
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(ellipse at center, ${dish.accent} 0%, transparent 65%)` }} />
                </div>
              </div>

              {/* Card side glow on hover */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "inset 0 0 60px rgba(209,163,82,0.05)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
