"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const NAV_LINKS = [
  { name: "Story", href: "#story" },
  { name: "Menu", href: "#menu" },
  { name: "Signatures", href: "#signatures" },
  { name: "Reviews", href: "#reviews" },
  { name: "Visit", href: "#contact" },
];

function useOpenStatus() {
  const [status, setStatus] = useState<"open" | "closed">("closed");
  useEffect(() => {
    const check = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        hour12: false,
      });
      const parts = formatter.formatToParts(now);
      const hour = parseInt(parts.find(p => p.type === "hour")?.value || "0");
      setStatus(hour >= 10 && hour < 23 ? "open" : "closed");
    };
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);
  return status;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const status = useOpenStatus();
  const prevScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      setHidden(currentY > prevScrollY.current && currentY > 400);
      prevScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Block body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 backdrop-blur-xl border-b border-white/5"
            : "py-5 bg-transparent"
        }`}
        style={{
          background: scrolled
            ? "rgba(5, 6, 8, 0.85)"
            : "linear-gradient(to bottom, rgba(5,6,8,0.8) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="shrink-0 w-[120px]" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative px-4 py-2 text-xs font-montserrat font-semibold uppercase tracking-[0.15em] text-[#A29A8D] hover:text-[#F4ECE2] transition-colors rounded-full hover:bg-white/5 group"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-4 border-l border-[#27272F]">
              {/* Open/Closed badge */}
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    status === "open" ? "bg-emerald-400" : "bg-rose-500"
                  }`}
                  style={status === "open" ? { boxShadow: "0 0 6px rgba(52,211,153,0.8)", animation: "pulse 2s infinite" } : {}}
                />
                <span className="text-[10px] font-montserrat font-semibold uppercase tracking-[0.15em] text-[#A29A8D] whitespace-nowrap">
                  {status === "open" ? "Open · Closes 11 PM" : "Closed · Opens 10 AM"}
                </span>
              </div>

              {/* Reserve Button */}
              <a
                href="tel:+916282418166"
                className="btn-amber px-5 py-2.5 text-[10px] flex items-center gap-2 rounded-full font-montserrat font-bold uppercase tracking-[0.15em]"
                style={{ color: "#050608" }}
              >
                <Phone size={11} />
                Reserve a Table
              </a>
            </div>
          </div>

          {/* Mobile: Open/Closed badge + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Status dot — visible on mobile */}
            <div className="flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${status === "open" ? "bg-emerald-400" : "bg-rose-500"}`}
                style={status === "open" ? { boxShadow: "0 0 6px rgba(52,211,153,0.8)" } : {}}
              />
              <span className="text-[9px] font-montserrat font-semibold uppercase tracking-[0.15em] text-[#A29A8D] hidden xs:block">
                {status === "open" ? "Open" : "Closed"}
              </span>
            </div>
            <button
              className="w-11 h-11 flex items-center justify-center rounded-full glass text-[#F4ECE2] transition-all active:scale-90"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%", borderTopLeftRadius: "50%" }}
              animate={{ x: 0, borderTopLeftRadius: "0%" }}
              exit={{ x: "100%", borderTopLeftRadius: "50%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.8 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm z-50 lg:hidden flex flex-col overflow-hidden"
              style={{ background: "rgba(10, 12, 16, 0.98)", backdropFilter: "blur(24px)", borderLeft: "1px solid rgba(39,39,47,0.8)" }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#27272F]/60">
                <div className="flex flex-col">
                  <span className="font-playfair text-xl font-bold text-[#F4ECE2]">{"Westley's"}</span>
                  <span className="text-[9px] font-montserrat uppercase tracking-[0.25em] text-[#D1A352]">Restocafe</span>
                </div>
                <button
                  className="w-11 h-11 flex items-center justify-center rounded-full glass text-[#A29A8D] hover:text-[#F4ECE2] transition-colors active:scale-90"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 + 0.15, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="flex items-center justify-between px-4 py-5 rounded-2xl text-[#A29A8D] hover:text-[#F4ECE2] hover:bg-white/5 active:bg-white/10 transition-all group border border-transparent hover:border-[#27272F] min-h-[64px]"
                  >
                    <span className="text-2xl font-playfair font-bold">{link.name}</span>
                    <ChevronRight size={16} className="text-[#D1A352] opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </motion.a>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-[#27272F]/60 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 ${status === "open" ? "bg-emerald-400" : "bg-rose-500"}`}
                    style={status === "open" ? { boxShadow: "0 0 8px rgba(52,211,153,0.8)" } : {}}
                  />
                  <span className="text-xs font-montserrat font-semibold uppercase tracking-[0.15em] text-[#A29A8D]">
                    {status === "open" ? "Open Now · Closes 11:00 PM" : "Closed · Opens 10:00 AM"}
                  </span>
                </div>
                <a
                  href="tel:+916282418166"
                  className="btn-amber w-full py-4 text-xs flex items-center justify-center gap-2 rounded-full"
                  style={{ color: "#050608" }}
                >
                  <Phone size={14} />
                  Reserve a Table
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
