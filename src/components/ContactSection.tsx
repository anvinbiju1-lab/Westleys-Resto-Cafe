"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#1a1c1e" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Stitch editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-10"
        >
          <h2
            className="text-4xl sm:text-5xl font-playfair font-bold mb-2"
            style={{ color: "#e3e2e5" }}
          >
            Visit Westley&apos;s
          </h2>
          <p className="text-sm" style={{ color: "#d2c4b2" }}>
            Experience the art of cinematic dining in the heart of Kochi.
          </p>
        </motion.div>

        {/* Map Card — Stitch style */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="mb-8 overflow-hidden rounded-xl"
          style={{ background: "#1e2022" }}
        >
          <div className="relative w-full" style={{ height: "240px" }}>
            <iframe
              title="Westley's Restocafe - Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.065738376905!2d76.30064751439706!3d9.994462092939892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d56d7fca2a9%3A0xb3ea9948f0c8d15f!2sWestley&#39;s%20Restocafe!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: "none",
                filter: "grayscale(1) brightness(0.5)",
                position: "absolute",
                inset: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, #1e2022 0%, transparent 60%)" }}
            />
            {/* Floating address card — Stitch glass style */}
            <div
              className="absolute bottom-4 left-4 right-4 p-4 rounded-lg"
              style={{
                background: "rgba(52, 53, 56, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(79,69,56,0.15)",
              }}
            >
              <div className="flex items-start gap-3">
                <MapPin size={18} style={{ color: "#f0bf6b", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "#f0bf6b" }}>
                    Our Location
                  </p>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: "#e3e2e5" }}>
                    Ground Floor, Kaliyath Building,<br />Metro Pillar 481, Mamangalam, Kochi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Direct Actions — Stitch style call buttons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col gap-4 mb-12"
        >
          <a
            href="tel:+916282418166"
            className="flex items-center justify-between px-6 transition-all active:scale-[0.98]"
            style={{
              background: "#f0bf6b",
              color: "#422c00",
              height: "56px",
              borderRadius: "0.375rem",
              fontWeight: 600,
            }}
          >
            <span className="flex items-center gap-3">
              <Phone size={18} />
              <span>Call +91 62824 18166</span>
            </span>
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>chevron_right</span>
          </a>

          <div className="grid grid-cols-2 gap-4">
            {/* Hours tile */}
            <div
              className="flex flex-col items-center justify-center gap-1"
              style={{
                background: "#292a2d",
                height: "80px",
                borderRadius: "0.375rem",
                border: "1px solid rgba(79,69,56,0.1)",
              }}
            >
              <Clock size={20} style={{ color: "#f0bf6b" }} />
              <span className="text-[10px] uppercase tracking-tighter" style={{ color: "#d2c4b2" }}>
                10 AM – 11 PM Daily
              </span>
            </div>

            {/* Second phone */}
            <a
              href="tel:+917356111146"
              className="flex flex-col items-center justify-center gap-1 transition-colors active:scale-[0.98]"
              style={{
                background: "#292a2d",
                height: "80px",
                borderRadius: "0.375rem",
                border: "1px solid rgba(79,69,56,0.1)",
              }}
            >
              <Phone size={20} style={{ color: "#f0bf6b" }} />
              <span className="text-[10px] uppercase tracking-tighter" style={{ color: "#d2c4b2" }}>
                +91 73561 11146
              </span>
            </a>
          </div>
        </motion.section>

        {/* Enquiry Form — Stitch underline-only inputs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="relative p-8 rounded-xl"
          style={{
            background: "#1e2022",
            border: "1px solid rgba(79,69,56,0.1)",
          }}
        >
          {/* Floating Enquiry badge */}
          <div
            className="absolute -top-4 left-8 px-4 py-1 text-[10px] font-label font-bold uppercase tracking-widest rounded-full"
            style={{ background: "#f0bf6b", color: "#422c00" }}
          >
            Enquiry
          </div>
          <form
            className="mt-4 space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "phone", label: "Phone", type: "tel" },
              { id: "message", label: "Message", type: "text" },
            ].map(({ id, label, type }) => (
              <div key={id} className="relative">
                <input
                  id={id}
                  type={type}
                  placeholder=" "
                  className="input-underline peer"
                />
                <label
                  htmlFor={id}
                  className="absolute top-3 left-0 text-xs font-label uppercase tracking-widest transition-all duration-300 pointer-events-none"
                  style={{ color: "#6b6d70", zIndex: 0 }}
                >
                  {label}
                </label>
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-4 font-label font-semibold uppercase tracking-widest text-sm transition-all duration-300 active:scale-[0.98]"
              style={{
                background: "rgba(52,53,56,0.4)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(240,191,107,0.2)",
                color: "#f0bf6b",
                borderRadius: "0.375rem",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
            >
              Send Enquiry
            </button>
          </form>
        </motion.section>
      </div>
    </section>
  );
}
