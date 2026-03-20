"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";

function useOpenStatus() {
  const [status, setStatus] = useState<"open" | "closed">("closed");
  useEffect(() => {
    const check = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", hour: "numeric", hour12: false });
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

const QUICK_LINKS = [
  { name: "Our Story", href: "#story" },
  { name: "Menu", href: "#menu" },
  { name: "Signatures", href: "#signatures" },
  { name: "Reviews", href: "#reviews" },
  { name: "Visit", href: "#contact" },
];

export default function Footer() {
  const status = useOpenStatus();

  return (
    <footer className="relative overflow-hidden" style={{ background: "#050608", borderTop: "1px solid #27272F" }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(209,163,82,0.4) 50%, transparent 100%)" }} />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full pointer-events-none -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(209,163,82,0.04) 0%, transparent 65%)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Westley's Restocafe"
                width={120}
                height={48}
                className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-[#A29A8D] text-sm font-inter leading-relaxed">
              Modern Dining. Timeless Flavor. An intimate restaurant in the heart of Kochi — crafted for taste, built for comfort.
            </p>
            {/* Open/Closed */}
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full flex-shrink-0 ${status === "open" ? "bg-emerald-400" : "bg-rose-500"}`}
                style={status === "open" ? { boxShadow: "0 0 6px rgba(52,211,153,0.7)" } : {}}
              />
              <span className="text-[10px] font-montserrat font-bold uppercase tracking-widest text-[#A29A8D]">
                {status === "open" ? "Open Now · Closes 11 PM" : "Currently Closed"}
              </span>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#27272F] text-[#A29A8D] hover:text-[#D1A352] hover:border-[#D1A352]/40 transition-all duration-300" style={{ background: "rgba(17,19,25,0.8)" }}>
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#27272F] text-[#A29A8D] hover:text-[#D1A352] hover:border-[#D1A352]/40 transition-all duration-300" style={{ background: "rgba(17,19,25,0.8)" }}>
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-montserrat text-[11px] font-bold uppercase tracking-[0.2em] text-[#F4ECE2]">Explore</h4>
            <div className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="text-sm text-[#A29A8D] font-inter hover:text-[#D1A352] transition-colors duration-200">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="font-montserrat text-[11px] font-bold uppercase tracking-[0.2em] text-[#F4ECE2]">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-[#A29A8D] font-inter">
              <div className="flex gap-3">
                <Phone size={15} className="text-[#D1A352] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+916282418166" className="hover:text-[#F4ECE2] transition-colors">+91 62824 18166</a>
                  <a href="tel:+917356111146" className="hover:text-[#F4ECE2] transition-colors">+91 73561 11146</a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={15} className="text-[#D1A352] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Ground Floor, Kaliyath Building, Metro Pillar 481, Palarivattom – Edappally Rd, Kochi
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-5">
            <h4 className="font-montserrat text-[11px] font-bold uppercase tracking-[0.2em] text-[#F4ECE2]">Hours</h4>
            <div className="flex flex-col gap-3 text-sm text-[#A29A8D] font-inter">
              <div className="flex gap-3">
                <Clock size={15} className="text-[#D1A352] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span>Monday – Sunday</span>
                  <span className="text-[#F4ECE2] font-medium">10:00 AM – 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#27272F] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-montserrat uppercase tracking-[0.2em] text-[#A29A8D]/50">
            © 2025 Westley&apos;s Restocafe. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-montserrat uppercase tracking-[0.15em] text-[#A29A8D]/50">
            <a href="#" className="hover:text-[#D1A352] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D1A352] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
