"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 h-full min-h-[400px] rounded-3xl border border-[#27272F] p-10 text-center"
        style={{ background: "linear-gradient(135deg, #111319 0%, #151820 100%)", boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}>
        <CheckCircle size={52} className="text-[#D1A352]" style={{ filter: "drop-shadow(0 0 12px rgba(209,163,82,0.4))" }} />
        <div>
          <h3 className="font-playfair text-2xl font-bold text-[#F4ECE2] mb-2">Message Sent!</h3>
          <p className="text-[#A29A8D] text-sm font-inter">We&apos;ll get back to you shortly. Thank you for reaching out.</p>
        </div>
        <button onClick={() => setSubmitted(false)} className="btn-glass px-6 py-3 text-xs rounded-full">
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-[#27272F] overflow-hidden"
      style={{ background: "linear-gradient(135deg, #111319 0%, #151820 100%)", boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
      <div className="p-8 md:p-10 border-b border-[#27272F]">
        <h3 className="font-playfair text-2xl font-bold text-[#F4ECE2] mb-1">Send an Enquiry</h3>
        <p className="text-[#A29A8D] text-sm font-inter">We&apos;ll get back to you within the hour.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 md:p-10 flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-[#A29A8D]">Name</label>
            <input
              type="text"
              required
              value={state.name}
              onChange={e => setState(s => ({ ...s, name: e.target.value }))}
              placeholder="Your full name"
              className="w-full px-4 py-3.5 rounded-xl text-sm font-inter text-[#F4ECE2] placeholder:text-[#A29A8D]/50 outline-none transition-all duration-200"
              style={{
                background: "rgba(5,6,8,0.5)",
                border: "1px solid #27272F",
              }}
              onFocus={e => { e.target.style.borderColor = "rgba(209,163,82,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(209,163,82,0.08)"; }}
              onBlur={e => { e.target.style.borderColor = "#27272F"; e.target.style.boxShadow = "none"; }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-[#A29A8D]">Phone</label>
            <input
              type="tel"
              value={state.phone}
              onChange={e => setState(s => ({ ...s, phone: e.target.value }))}
              placeholder="+91 00000 00000"
              className="w-full px-4 py-3.5 rounded-xl text-sm font-inter text-[#F4ECE2] placeholder:text-[#A29A8D]/50 outline-none transition-all duration-200"
              style={{ background: "rgba(5,6,8,0.5)", border: "1px solid #27272F" }}
              onFocus={e => { e.target.style.borderColor = "rgba(209,163,82,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(209,163,82,0.08)"; }}
              onBlur={e => { e.target.style.borderColor = "#27272F"; e.target.style.boxShadow = "none"; }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-[#A29A8D]">Email</label>
          <input
            type="email"
            required
            value={state.email}
            onChange={e => setState(s => ({ ...s, email: e.target.value }))}
            placeholder="your@email.com"
            className="w-full px-4 py-3.5 rounded-xl text-sm font-inter text-[#F4ECE2] placeholder:text-[#A29A8D]/50 outline-none transition-all duration-200"
            style={{ background: "rgba(5,6,8,0.5)", border: "1px solid #27272F" }}
            onFocus={e => { e.target.style.borderColor = "rgba(209,163,82,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(209,163,82,0.08)"; }}
            onBlur={e => { e.target.style.borderColor = "#27272F"; e.target.style.boxShadow = "none"; }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-[#A29A8D]">Message</label>
          <textarea
            required
            rows={4}
            value={state.message}
            onChange={e => setState(s => ({ ...s, message: e.target.value }))}
            placeholder="Reservations, special requests, or questions..."
            className="w-full px-4 py-3.5 rounded-xl text-sm font-inter text-[#F4ECE2] placeholder:text-[#A29A8D]/50 outline-none resize-none transition-all duration-200"
            style={{ background: "rgba(5,6,8,0.5)", border: "1px solid #27272F" }}
            onFocus={e => { e.target.style.borderColor = "rgba(209,163,82,0.4)"; e.target.style.boxShadow = "0 0 0 3px rgba(209,163,82,0.08)"; }}
            onBlur={e => { e.target.style.borderColor = "#27272F"; e.target.style.boxShadow = "none"; }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-amber w-full py-4 text-xs rounded-xl flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
          style={{ color: "#050608" }}
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-[#050608]/30 border-t-[#050608] rounded-full animate-spin" />
          ) : (
            <><Send size={14} /> Send Message</>
          )}
        </button>
      </form>
    </div>
  );
}
