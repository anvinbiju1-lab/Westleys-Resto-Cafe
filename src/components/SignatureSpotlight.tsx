"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

// Real signature items sourced from external reviews & Justdial menu highlights
const CHEF_PICKS = [
  {
    id: "beef-burger",
    image: "/signatures/beef_burger.png",
    name: "Beef Club Burger",
    category: "Gourmet Burgers",
    tagline: "The burger everyone talks about in Kochi",
    microcopy:
      "Homestyle pumpkin seed buns, a juicy beef patty, and Westley's legendary house sauce. Ordered again and again — for very good reason.",
  },
  {
    id: "bbq-pizza",
    image: "/signatures/bbq_pizza.png",
    name: "BBQ Chicken Pizza 10\"",
    category: "Artisan Pizzas",
    tagline: "Our most loved pizza, straight from the stone deck oven",
    microcopy:
      "BBQ-glazed chicken breast, fresh mushrooms, and 100% real mozzarella on a perfectly crisped artisan crust.",
  },
  {
    id: "beef-lasagna",
    image: "/signatures/beef_lasagna.png",
    name: "Beef Lasagna",
    category: "Pasta Delights",
    tagline: "Slow-baked comfort layered with rich beef ragu and cheese",
    microcopy:
      "Homemade layers of seasoned beef ragu, rich tomato sauce, creamy béchamel, and melted cheese — deeply satisfying, every single time.",
  },
  {
    id: "fish-chips",
    image: "/signatures/fish_and_chips.png",
    name: "Fish & Chips",
    category: "Main Courses",
    tagline: "Golden, flaky, and served with tartar – a classic done right",
    microcopy:
      "Tender fish fillet in a golden breadcrumb coat, crispy fries on the side, and our house tartar sauce. A timeless British classic, perfected.",
  },
  {
    id: "thick-shakes",
    image: "/signatures/thick_shakes.png",
    name: "Thick Shakes",
    category: "Milkshakes & Malts",
    tagline: "Dessert in a glass",
    microcopy:
      "Cult-favourite thick shakes: Belgian Chocolate, Peanut Butter, Avocado, and more. Every sip is indulgent.",
  },
  {
    id: "iced-noisette",
    image: "/signatures/iced_noisette.png",
    name: "Iced Café Noisette",
    category: "Cold Coffee",
    tagline: "Dessert in a glass – our cult-favorite iced Café Noisette",
    microcopy:
      "Smooth espresso meets hazelnut cream, poured over ice. An indulgent pick highlighted in Justdial's must-try list.",
  },
];

// Hero editorial spotlights — full-width cinematic cards (3 items)
const HERO_SPOTS = [CHEF_PICKS[0], CHEF_PICKS[1], CHEF_PICKS[2]];

export default function SignatureSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });
  const gridInView = useInView(gridRef, { once: true, margin: "-5%" });

  return (
    <section
      id="signatures"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#121316" }}
    >
      {/* Ambient glow top */}
      <div
        className="absolute top-0 left-0 w-full h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #1a1c1e, transparent)" }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Editorial header */}
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
            className="mt-4 leading-relaxed max-w-[360px] text-sm"
            style={{ color: "#d2c4b2" }}
          >
            Dishes that have earned their place through countless repeat orders,
            glowing reviews, and loyal fans. These are Westley&apos;s most talked-about plates.
          </p>
        </div>

        {/* ── Hero editorial stack (top 3) ── */}
        <div ref={ref} className="space-y-16 md:space-y-20 mb-20 md:mb-28">
          {HERO_SPOTS.map((dish, i) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
              className="relative group"
            >
              {/* Visual — cinematic aspect ratio */}
              <div
                className="relative w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[3/2] overflow-hidden rounded-2xl flex items-center justify-center"
                style={{ background: "#1a1c1e" }}
              >
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                  priority={i === 0}
                />

                {/* Bottom gradient for text bleed */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #121316 0%, transparent 55%)" }}
                />

                {/* Signature badge — golden pill */}
                <div
                  className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-transform group-hover:scale-105"
                  style={{ 
                    background: "linear-gradient(135deg, #FFD700 0%, #D1A352 100%)", 
                    color: "#2C1E00",
                    boxShadow: "0 4px 12px rgba(209,163,82,0.4)"
                  }}
                >
                  <Sparkles size={10} fill="#2C1E00" />
                  Signature
                </div>

                {/* Category label */}
                <div
                  className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                  style={{
                    background: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "#e3e2e5",
                  }}
                >
                  {dish.category}
                </div>
              </div>

              {/* Text content — editorial left-aligned */}
              <div className="mt-8 pl-1">
                <p
                  className="text-[10px] font-label font-bold tracking-[0.28em] uppercase mb-3"
                  style={{ color: "#d1a352" }}
                >
                  {dish.tagline}
                </p>
                <h3
                  className="text-3xl sm:text-4xl font-playfair italic mb-4"
                  style={{ color: "#e3e2e5" }}
                >
                  {dish.name}
                </h3>
                {/* Separator */}
                <div className="h-px w-10 mb-5" style={{ background: "rgba(209,163,82,0.4)" }} />
                {/* Blockquote */}
                <blockquote
                  className="text-base sm:text-lg font-playfair italic leading-relaxed border-l-2 pl-4 mb-6"
                  style={{
                    color: "#d2c4b2",
                    borderColor: "rgba(209,163,82,0.25)",
                  }}
                >
                  &ldquo;{dish.microcopy}&rdquo;
                </blockquote>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Chef's Picks strip (all 6 as compact cards) ── */}
        <div className="mb-4">
          <span
            className="text-[10px] font-label font-bold tracking-[0.3em] uppercase mb-2 block"
            style={{ color: "#d1a352" }}
          >
            Chef&apos;s Picks
          </span>
          <h3
            className="text-2xl sm:text-3xl font-playfair font-bold mb-2"
            style={{ color: "#e3e2e5" }}
          >
            Must-Try Dishes
          </h3>
          <p className="text-sm mb-10" style={{ color: "#A29A8D" }}>
            Six standouts that keep guests coming back — as seen on Justdial &amp; community reviews.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CHEF_PICKS.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="group relative flex flex-col gap-0 rounded-2xl border border-[#27272F] overflow-hidden cursor-default"
              style={{
                background: "linear-gradient(135deg, #111319 0%, #151820 100%)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
                transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(209,163,82,0.35)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(209,163,82,0.1)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#27272F";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.35)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Thumbnail visual */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111319] to-transparent opacity-60" />
                
                {/* Signature badge */}
                <div
                  className="absolute top-4 left-4 flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase"
                  style={{
                    background: "linear-gradient(135deg, #FFD700 0%, #D1A352 100%)",
                    color: "#2C1E00",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.5)"
                  }}
                >
                  <Sparkles size={8} fill="#2C1E00" />
                  Signature
                </div>
              </div>

              {/* Content area */}
              <div className="p-6 flex flex-col gap-3">
                <h4
                  className="font-playfair text-xl font-bold leading-tight group-hover:text-[#D1A352] transition-colors duration-300"
                  style={{ color: "#F4ECE2" }}
                >
                  {dish.name}
                </h4>

                <p
                  className="text-[10px] font-montserrat font-bold uppercase tracking-widest"
                  style={{ color: "#d1a352" }}
                >
                  {dish.tagline}
                </p>

                <p className="text-[#A29A8D] text-sm font-inter leading-relaxed line-clamp-2">
                  {dish.microcopy}
                </p>

                <div className="flex items-center justify-between mt-2 pt-4 border-t border-[#27272F]">
                  <span className="text-[10px] font-bold text-[#666] uppercase tracking-widest">
                    {dish.category}
                  </span>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(209,163,82,0.06) 0%, transparent 60%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
