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
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#121316" }}>
      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(209,163,82,0.1) 50%, transparent 100%)" }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] font-label font-bold tracking-[0.3em] uppercase mb-2 block" style={{ color: "#d1a352" }}>
            Designed for You
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold leading-tight text-on-surface">
            Crafted for Your{" "}
            <span className="italic" style={{ color: "#f0bf6b" }}>Comfort</span>
          </h2>
        </div>

        {/* Grid — No-Line Surface Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((amenity, i) => (
            <motion.div
              key={amenity.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
              className="group flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:bg-surface-container-highest/40"
              style={{ background: "#1e2022" }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-black/20"
                style={{ background: "#292a2d", border: "1px solid rgba(240,191,107,0.1)" }}
              >
                <amenity.icon size={20} style={{ color: "#f0bf6b" }} />
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="font-label text-[11px] font-bold uppercase tracking-widest text-on-surface">
                  {amenity.name}
                </h3>
                <p className="text-on-surface-variant text-[13px] font-inter leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
