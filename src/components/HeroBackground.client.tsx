"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Ember particle component
function EmberParticle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute w-1 h-1 rounded-full bg-[#D1A352]"
      style={{
        ...style,
        animation: `ember ${4 + Math.random() * 4}s ease-out ${Math.random() * 5}s infinite`,
      }}
    />
  );
}

export default function HeroBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || !bgRef.current || isMobile) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 30,
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

  const embers = Array.from({ length: 18 }, (_, i) => ({
    left: `${5 + Math.random() * 90}%`,
    bottom: `${Math.random() * 40}%`,
    opacity: 0.3 + Math.random() * 0.4,
    animationDelay: `${i * 0.5}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Background image with GSAP parallax (desktop only) */}
      <div ref={bgRef} className="absolute inset-0 md:scale-110">
        <Image
          src="/hero_phone.jpeg"
          alt="Westley's Restocafe interior"
          fill
          className="object-cover object-top md:hidden"
          priority
          quality={90}
        />
        <Image
          src="/hero section test.webp"
          alt="Westley's Restocafe interior"
          fill
          className="object-cover object-center hidden md:block"
          priority
          quality={90}
        />
        {/* Warm vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(5,6,8,0.1) 0%, rgba(5,6,8,0.7) 60%, rgba(5,6,8,0.95) 100%)",
          }}
        />
        {/* Dark gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(5,6,8,0.5) 0%, rgba(5,6,8,0.35) 40%, rgba(5,6,8,0.75) 80%, rgba(5,6,8,0.98) 100%)",
          }}
        />
        {/* Warm amber tint */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: "radial-gradient(ellipse at 30% 60%, rgba(65, 37, 43, 0.4) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Ember particles */}
      {embers.map((style, i) => (
        <EmberParticle key={i} style={style} />
      ))}

      {/* Animated radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(209,163,82,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
