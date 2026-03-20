"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ShieldCheck, MapPin, Heart } from "lucide-react";

const STATS = [
  { label: "Multi-Cuisine", sub: "Global flavors, local heart", icon: Star },
  { label: "Quiet & Clean", sub: "Immaculate, serene space", icon: ShieldCheck },
  { label: "Est. Kochi", sub: "Born in Kerala's heart", icon: MapPin },
  { label: "Family Friendly", sub: "Welcoming every guest", icon: Heart },
];

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease },
  }),
};


const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease } },
};

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="story" className="py-28 md:py-36 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      {/* Ambient glow top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(209,163,82,0.06) 0%, transparent 65%)", transform: "translate(30%, -30%)" }}
        aria-hidden="true"
      />
      {/* Ambient glow bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(65,37,43,0.15) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left — Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="section-label">Our Story</span>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-[#F4ECE2]">
                The Westley&apos;s<br />
                <span className="italic text-[#D1A352]">Experience</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-[#A29A8D] font-inter text-lg leading-[1.8]">
              <p>
                Modern, minimalist, and impeccably clean. A quiet corner of Kochi where flavors from around the world converge without the noise — where every plate is a small act of craft, and every visit feels like a return.
              </p>
              <p>
                The staff at Westley&apos;s are known for a warmth that feels effortless. Water arrives before you ask. The door opens as you leave. It&apos;s these imperceptible details — invisible when done well, glaring when absent — that define the Westley&apos;s standard.
              </p>
              <p>
                We believe that fine dining isn&apos;t reserved for special occasions. It&apos;s a daily discipline: honest ingredients, precise cooking, and a space that lets conversation breathe.
              </p>
            </div>

            {/* Stats grid */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="group p-5 rounded-2xl border border-[#27272F] bg-[#111319] hover:border-[#D1A352]/30 transition-all cursor-default"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(209,163,82,0.1)" }}>
                      <stat.icon size={16} className="text-[#D1A352]" />
                    </div>
                    <div>
                      <p className="font-montserrat text-xs font-bold uppercase tracking-wider text-[#F4ECE2] mb-0.5">{stat.label}</p>
                      <p className="text-[#A29A8D] text-xs font-inter">{stat.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Ambiance card (sticky) */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:sticky lg:top-28"
          >
            <div className="relative rounded-3xl overflow-hidden diagonal-accent" style={{
              background: "linear-gradient(135deg, #111319 0%, #151820 100%)",
              border: "1px solid #27272F",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}>
              {/* Hero image */}
              <div className="relative h-72 md:h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] hover:scale-110"
                  style={{ backgroundImage: "url('/hero-bg.png')" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,6,8,0.1) 0%, rgba(17,19,25,1) 100%)" }} />
                {/* Amber glow overlay */}
                <div className="absolute top-4 right-4">
                  <span className="pill text-[#D1A352]" style={{ background: "rgba(209,163,82,0.15)", borderColor: "rgba(209,163,82,0.3)" }}>
                    Ambiance Snapshot
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-[#F4ECE2] mb-2 italic">
                  &ldquo;A quiet corner of Kochi where flavors come together without the noise.&rdquo;
                </h3>
                <div className="flex items-center gap-3 mt-4 mb-8">
                  <div className="w-10 h-px bg-[#D1A352]" />
                  <span className="text-[10px] font-montserrat uppercase tracking-[0.2em] text-[#A29A8D]">Ambiance First</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {["Multi-Cuisine", "Quiet & Clean", "Est. Kochi", "Family & Couple Friendly"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D1A352] flex-shrink-0"
                        style={{ boxShadow: "0 0 6px rgba(209,163,82,0.6)" }} />
                      <span className="text-xs text-[#A29A8D] font-inter">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(209,163,82,0.12) 0%, transparent 70%)" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
