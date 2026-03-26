"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AMBIANCE_IMAGES = [
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

export default function AmbianceSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AMBIANCE_IMAGES.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={AMBIANCE_IMAGES[currentIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={AMBIANCE_IMAGES[currentIndex]}
            alt={`Westley's Ambiance ${currentIndex + 1}`}
            fill
            className="object-cover grayscale-[0.2]"
            priority
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay gradient for text readability and cinematic effect */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(18, 19, 22, 0.8) 100%)" }} 
      />
    </div>
  );
}
