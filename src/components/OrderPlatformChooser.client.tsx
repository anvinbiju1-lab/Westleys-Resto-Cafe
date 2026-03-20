"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

interface OrderPlatformChooserProps {
  isOpen: boolean;
  onClose: () => void;
  itemName?: string;
}

const PLATFORMS = [
  {
    name: "Swiggy",
    url: "https://www.swiggy.com/city/kochi/westleys-restocafe",
    bg: "#FC8019",
    emoji: "🧡",
  },
  {
    name: "Zomato",
    url: "https://www.zomato.com/kochi/westleys-restocafe-mamangalam",
    bg: "#E23744",
    emoji: "❤️",
  },
];

export default function OrderPlatformChooser({ isOpen, onClose, itemName }: OrderPlatformChooserProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm z-[9999] rounded-3xl p-8"
            style={{
              background: "linear-gradient(135deg, #111319 0%, #151820 100%)",
              border: "1px solid rgba(209,163,82,0.2)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 40px rgba(209,163,82,0.1)",
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full text-[#A29A8D] hover:text-[#F4ECE2] transition-colors"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <X size={16} />
            </button>

            <div className="text-center mb-7">
              <h3 className="font-playfair text-2xl font-bold text-[#F4ECE2] mb-2">Order Online</h3>
              <p className="text-[#A29A8D] text-sm font-inter">
                {itemName ? `Ordering: ${itemName}` : "Choose a platform to order from Westley's."}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {PLATFORMS.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl font-montserrat font-bold uppercase tracking-wider text-sm text-white transition-all hover:brightness-110 active:scale-95"
                  style={{ background: platform.bg }}
                >
                  <span className="flex items-center gap-2">
                    <span>{platform.emoji}</span>
                    Order on {platform.name}
                  </span>
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>

            <p className="mt-6 text-center text-[10px] font-montserrat uppercase tracking-widest text-[#A29A8D]/40">
              Delivery times vary by platform and distance.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
