"use client";

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollEffects({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveal animations
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Signature dishes staggered reveal override or specific handling
      const signatureItems = document.querySelectorAll(".signature-item");
      if (signatureItems.length > 0) {
        gsap.from(signatureItems, {
          opacity: 0,
          x: -50,
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#signatures",
            start: "top 70%",
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Check for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => {
      if (mediaQuery.matches) {
        gsap.globalTimeline.pause();
        ScrollTrigger.getAll().forEach((t) => t.disable());
      } else {
        gsap.globalTimeline.play();
        ScrollTrigger.getAll().forEach((t) => t.enable());
      }
    };

    handleMotionChange();
    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  return <>{children}</>;
}
