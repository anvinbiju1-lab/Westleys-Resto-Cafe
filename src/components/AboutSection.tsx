"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ShieldCheck, MapPin, Heart } from "lucide-react";
import AmbianceSlideshow from "./AmbianceSlideshow.client";

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
    <section id="story" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#1a1c1e" }}>
      {/* Ambient glow top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, rgba(209,163,82,0.06) 0%, transparent 65%)", transform: "translate(30%, -30%)" }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left — Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-label font-bold tracking-[0.3em] uppercase" style={{ color: "#d1a352" }}>Our Story</span>
              <h2 className="font-playfair text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] text-on-surface">
                The Westley&apos;s<br />
                <span className="italic" style={{ color: "#f0bf6b" }}>Experience</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-on-surface-variant font-inter text-base md:text-lg leading-[1.8] max-w-[540px]">
              <p>
                Modern, minimalist, and impeccably clean. A quiet corner of Kochi where flavors from around the world converge without the noise — where every plate is a small act of craft, and every visit feels like a return.
              </p>
              <p>
                The staff at Westley&apos;s are known for a warmth that feels effortless. Water arrives before you ask. The door opens as you leave. It&apos;s these imperceptible details — invisible when done well, glaring when absent — that define the Westley&apos;s standard.
              </p>
            </div>

            {/* Stats grid — Pill styled */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="group flex items-center justify-between p-5 rounded-full border border-white/5 transition-all duration-300 hover:border-primary/20"
                  style={{ background: "#292a2d", boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(209,163,82,0.1)" }}>
                      <stat.icon size={18} style={{ color: "#f0bf6b" }} />
                    </div>
                    <div>
                      <p className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface mb-0.5">{stat.label}</p>
                      <p className="text-on-surface-variant text-[11px] font-inter">{stat.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Ambiance card (frosted glass) */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:sticky lg:top-28"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl">
              <div className="absolute inset-0 z-0 opacity-[0.03]" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxq6HpcRDCycRdQo9W6ohwG0md2SsmqSe5gbCK9_3EGfi4cvm0qLCc1W2LnJt9KhQLoe1XzHlB45rRFQ9cmO4Q-CT02SyaexnkpZrdR21_BB7zUuKNNBdTt3Ja-ZZf7d_5x6VjOGD_KXpJRbLt8TkLh2t58tZAn74qrrf1qEisC4CiqzdlPfoIZPdxw3h6sDkmjU9Qf6RpK6Y20YxFE4_A_GVSxgpe31UODrqHbQPr53KTInRaYUVQnBvMSQf3zXMpP87HO3AJvfY')" }} />


              {/* Snapshot image */}
              <div className="relative h-72 md:h-80 overflow-hidden z-10">
                <AmbianceSlideshow />
                <div className="absolute top-5 right-5 z-20">
                  <span className="px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest backdrop-blur-md"
                    style={{ background: "rgba(240,191,107,0.2)", color: "#f0bf6b", border: "1px solid rgba(240,191,107,0.3)" }}>
                    Ambiance Snapshot
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-8 relative z-10 bg-surface-dim">
                <h3 className="font-playfair text-2xl font-bold text-on-surface mb-6 italic leading-relaxed">
                  &ldquo;A quiet corner of Kochi where flavors come together without the noise.&rdquo;
                </h3>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {["Multi-Cuisine", "Quiet & Clean", "Est. Kochi", "Modern Space"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" 
                        style={{ background: "#f0bf6b", boxShadow: "0 0 6px rgba(209,163,82,0.6)" }} />
                      <span className="text-[11px] text-on-surface-variant font-label uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
