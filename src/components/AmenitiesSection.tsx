"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wifi, Thermometer, Accessibility, Baby, Car, Cigarette } from "lucide-react";

const AMENITIES = [
  { name: "Free Wi-Fi", icon: Wifi, description: "Stay connected while you dine." },
  { name: "Air Conditioned", icon: Thermometer, description: "Climate-controlled comfort year-round." },
  { name: "Wheelchair Accessible", icon: Accessibility, description: "An inclusive space for every guest." },
  { name: "Highchairs for Kids", icon: Baby, description: "Family-friendly from corner to corner." },
  { name: "Parking Available", icon: Car, description: "Ample space right outside." },
  { name: "Dedicated Smoking Area", icon: Cigarette, description: "A comfortable outdoor zone." },
];

export default function AmenitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(209,163,82,0.2) 50%, transparent 100%)" }} />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="section-label justify-center mb-4 block">Designed for You</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-[#F4ECE2]">
            Crafted for Your{" "}
            <span className="italic text-[#D1A352]">Comfort</span>
          </h2>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AMENITIES.map((amenity, i) => (
            <motion.div
              key={amenity.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="group flex items-start gap-5 p-6 rounded-2xl border border-[#27272F] hover:border-[#D1A352]/30 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #111319 0%, #151820 100%)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(209,163,82,0.1)", border: "1px solid rgba(209,163,82,0.15)" }}
              >
                <amenity.icon size={20} className="text-[#D1A352]" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-montserrat text-xs font-bold uppercase tracking-wider text-[#F4ECE2]">
                  {amenity.name}
                </h3>
                <p className="text-[#A29A8D] text-sm font-inter leading-relaxed">
                  {amenity.description}
                </p>
              </div>
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "radial-gradient(ellipse at top left, rgba(209,163,82,0.04) 0%, transparent 60%)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
