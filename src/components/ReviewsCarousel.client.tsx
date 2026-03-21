"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Review {
  name: string;
  content: string;
  source: string;
  type: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

const SOURCE_COLORS: Record<string, string> = {
  TripAdvisor: "rgba(52, 211, 153, 0.15)",
  Zomato: "rgba(220, 80, 50, 0.15)",
  Google: "rgba(66, 133, 244, 0.15)",
};

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, zIndex: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 80 : -80, opacity: 0, zIndex: 0 }),
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="relative max-w-3xl mx-auto"
    >
      {/* Review card */}
      <div
        className="relative rounded-3xl overflow-hidden p-10 md:p-14 min-h-[320px] flex flex-col justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(17,19,25,0.9) 0%, rgba(21,24,32,0.9) 100%)",
          border: "1px solid rgba(209,163,82,0.15)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          backdropFilter: "blur(24px)",
        }}
      >
        {/* Quote icon */}
        <Quote
          className="absolute top-8 left-8 text-[#D1A352]"
          size={40}
          strokeWidth={1}
          style={{ opacity: 0.15 }}
        />

        {/* Inner glow */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(209,163,82,0.06) 0%, transparent 60%)" }} />

        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.9 }}
              className="flex flex-col items-center gap-6"
            >
              <p className="font-playfair text-xl md:text-2xl font-bold text-[#F4ECE2] leading-[1.6] italic max-w-2xl">
                &ldquo;{reviews[index].content}&rdquo;
              </p>

              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-[#D1A352]/40" />
                  <span className="font-montserrat text-sm font-bold uppercase tracking-widest text-[#D1A352]">
                    {reviews[index].name}
                  </span>
                  <div className="w-8 h-px bg-[#D1A352]/40" />
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[10px] font-montserrat font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{
                      background: SOURCE_COLORS[reviews[index].source] || "rgba(255,255,255,0.08)",
                      color: "#A29A8D",
                    }}
                  >
                    {reviews[index].source}
                  </span>
                  <span className="text-[#27272F]">·</span>
                  <span className="text-[10px] font-montserrat text-[#A29A8D] uppercase tracking-widest">
                    {reviews[index].type}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8 px-2">
        <button
          onClick={prev}
          aria-label="Previous review"
          className="w-11 h-11 flex items-center justify-center rounded-full border border-[#27272F] text-[#A29A8D] hover:text-[#D1A352] hover:border-[#D1A352]/40 transition-all duration-300 active:scale-90"
          style={{ background: "rgba(17,19,25,0.8)" }}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              aria-label={`Go to review ${i + 1}`}
              className="transition-all duration-500 rounded-full"
              style={{
                width: i === index ? "28px" : "8px",
                height: "8px",
                background: i === index ? "linear-gradient(90deg, #D1A352, #B8893A)" : "#27272F",
                boxShadow: i === index ? "0 0 10px rgba(209,163,82,0.4)" : "none",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next review"
          className="w-11 h-11 flex items-center justify-center rounded-full border border-[#27272F] text-[#A29A8D] hover:text-[#D1A352] hover:border-[#D1A352]/40 transition-all duration-300 active:scale-90"
          style={{ background: "rgba(17,19,25,0.8)" }}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>
  );
}
