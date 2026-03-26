"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AMBIANCE_IMAGES = [
  "/hero_phone.jpeg",
  "/ambiance/a1.webp",
  "/ambiance/a2.webp",
  "/ambiance/a3.webp",
  "/ambiance/a4.webp",
  "/ambiance/a5.webp",
  "/ambiance/a6.webp",
  "/ambiance/a7.webp",
  "/ambiance/a8.webp",
  "/ambiance/a9.webp",
  "/ambiance/a10.webp",
];

// Ember particle
function EmberParticle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute w-1 h-1 rounded-full"
      style={{
        ...style,
        background: "#d1a352",
        animation: `ember ${4 + Math.random() * 4}s ease-out ${Math.random() * 5}s infinite`,
      }}
    />
  );
}

export default function HeroBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fading, setFading] = useState(false);

  // Slideshow — cycle ambiance images every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % AMBIANCE_IMAGES.length);
        setNext((prev) => (prev + 1) % AMBIANCE_IMAGES.length);
        setFading(false);
      }, 1200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // GSAP parallax (desktop only)
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || !bgRef.current || isMobile) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current?.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const embers = Array.from({ length: 14 }, (_, i) => ({
    left: `${5 + Math.random() * 90}%`,
    bottom: `${Math.random() * 40}%`,
    opacity: 0.3 + Math.random() * 0.4,
    animationDelay: `${i * 0.5}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Ambiance slideshow */}
      <div ref={bgRef} className="absolute inset-0 md:scale-110">
        {/* Current image */}
        <Image
          src={AMBIANCE_IMAGES[current]}
          alt="Westley's Restocafe ambiance"
          fill
          className="object-cover object-center transition-opacity duration-[1200ms]"
          style={{ opacity: fading ? 0 : 1 }}
          priority
          quality={85}
        />
        {/* Next image (preloaded below) */}
        <Image
          src={AMBIANCE_IMAGES[next]}
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: fading ? 1 : 0, transition: "opacity 1200ms" }}
          quality={85}
        />

        {/* Warm vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(18,19,22,0.15) 0%, rgba(18,19,22,0.75) 65%, rgba(18,19,22,0.97) 100%)",
          }}
        />
        {/* Bottom-to-top gradient for text */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(18,19,22,1) 0%, rgba(18,19,22,0.6) 35%, rgba(18,19,22,0.25) 70%, rgba(18,19,22,0.5) 100%)",
          }}
        />
        {/* Warm amber tint */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: "radial-gradient(ellipse at 30% 60%, rgba(65, 37, 43, 0.35) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Ember particles */}
      {embers.map((style, i) => (
        <EmberParticle key={i} style={style} />
      ))}

      {/* Ambient amber glow at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(209,163,82,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
