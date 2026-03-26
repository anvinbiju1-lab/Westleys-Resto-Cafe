"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface Review {
  name: string;
  content: string;
  source: string;
  type: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const touchStart = useRef(0);

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
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 60 : -60, opacity: 0 }),
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
    >
      {/* Stitch-style glass card */}
      <div
        className="relative rounded-xl p-8 sm:p-10 flex flex-col gap-8 shadow-2xl overflow-hidden"
        onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const diff = touchStart.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
        }}
        style={{
          background: "rgba(52, 53, 56, 0.4)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        {/* Grain texture inside card */}
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none rounded-xl" />

        {/* Big quote icon */}
        <span
          className="material-symbols-outlined self-start"
          style={{
            fontSize: "48px",
            color: "rgba(240, 191, 107, 0.25)",
            fontVariationSettings: "'FILL' 1",
          }}
        >
          format_quote
        </span>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", damping: 28, stiffness: 220, mass: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/* Review text — Playfair italic */}
            <p
              className="text-xl sm:text-2xl font-playfair italic leading-relaxed"
              style={{ color: "#e3e2e5" }}
            >
              &ldquo;{reviews[index].content}&rdquo;
            </p>

            {/* Reviewer — Stitch divider line style */}
            <div
              className="flex items-center gap-4 pt-6"
              style={{ borderTop: "1px solid rgba(79,69,56,0.2)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: "#292a2d", color: "#d1a352" }}
              >
                {reviews[index].name.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-semibold" style={{ color: "#e3e2e5" }}>
                  {reviews[index].name}
                </h4>
                <p
                  className="text-[10px] uppercase tracking-widest mt-0.5"
                  style={{ color: "rgba(240,191,107,0.6)" }}
                >
                  {reviews[index].source} · {reviews[index].type}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators — Stitch amber glow style */}
      <div className="flex justify-center items-center gap-3 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
            aria-label={`Review ${i + 1}`}
            className="rounded-full transition-all duration-500"
            style={{
              width: i === index ? "8px" : "6px",
              height: i === index ? "8px" : "6px",
              background: i === index ? "#f0bf6b" : "#292a2d",
              boxShadow: i === index ? "0 0 8px rgba(240,191,107,0.6)" : "none",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
