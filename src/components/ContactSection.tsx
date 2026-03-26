import { MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm.client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(209,163,82,0.3) 50%, transparent 100%)" }} />

      {/* Ambient glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(65,37,43,0.15) 0%, transparent 70%)" }} aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full pointer-events-none translate-x-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(209,163,82,0.04) 0%, transparent 70%)" }} aria-hidden="true" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label mb-4 block">Get In Touch</span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-[#F4ECE2]">
            Visit <span className="italic text-[#D1A352]">Westley&apos;s</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Left — Info + Map */}
          <div className="flex flex-col gap-8">
            {/* Address card */}
            <div className="rounded-2xl border border-[#27272F] p-6 flex flex-col gap-4"
              style={{ background: "linear-gradient(135deg, #111319 0%, #151820 100%)", boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}>
              <div className="flex gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background: "rgba(209,163,82,0.1)", border: "1px solid rgba(209,163,82,0.15)" }}>
                  <MapPin size={20} className="text-[#D1A352]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-montserrat text-xs font-bold uppercase tracking-wider text-[#F4ECE2]">Location</h4>
                  <p className="text-[#A29A8D] text-sm font-inter leading-relaxed">
                    Ground Floor, Kaliyath Building, Metro Pillar 481,<br />
                    Palarivattom – Edappally Rd, Kochi, Kerala 682025
                  </p>
                  <a
                    href="https://maps.google.com/?q=Westley's+Restocafe+Edappally"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-montserrat font-bold uppercase tracking-widest text-[#D1A352] hover:text-[#F4ECE2] transition-colors border border-[#D1A352]/30 hover:border-[#D1A352]/60 rounded-full px-3 py-1.5 self-start"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Phone cards */}
            <div className="rounded-2xl border border-[#27272F] p-6 flex flex-col gap-5"
              style={{ background: "linear-gradient(135deg, #111319 0%, #151820 100%)", boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background: "rgba(209,163,82,0.1)", border: "1px solid rgba(209,163,82,0.15)" }}>
                  <Phone size={20} className="text-[#D1A352]" />
                </div>
                <h4 className="font-montserrat text-xs font-bold uppercase tracking-wider text-[#F4ECE2]">Reservations</h4>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+916282418166"
                  className="btn-amber w-full text-xs rounded-xl text-center flex items-center justify-center gap-2 active:scale-95"
                  style={{ color: "#050608", minHeight: "56px" }}
                >
                  <Phone size={14} /> +91 62824 18166
                </a>
                <a
                  href="tel:+917356111146"
                  className="btn-glass w-full text-xs rounded-xl text-center flex items-center justify-center gap-2 active:scale-95"
                  style={{ minHeight: "56px" }}
                >
                  <Phone size={14} /> +91 73561 11146
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-[#27272F] p-6"
              style={{ background: "linear-gradient(135deg, #111319 0%, #151820 100%)" }}>
              <h4 className="font-montserrat text-xs font-bold uppercase tracking-wider text-[#F4ECE2] mb-3">Hours</h4>
              <div className="flex items-center justify-between">
                <span className="text-[#A29A8D] text-sm font-inter">Monday – Sunday</span>
                <span className="text-[#F4ECE2] text-sm font-inter font-medium">10:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right — Contact form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
