"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { id: "home", label: "Home", icon: "home", section: null },
  { id: "menu", label: "Menu", icon: "restaurant_menu", section: "#menu" },
  { id: "reserve", label: "Reserve", icon: "event_available", section: "#contact" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function BottomNav() {
  const [active, setActive] = useState("home");

  return (
    <nav
      className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 z-50"
      style={{
        background: "rgba(11, 12, 15, 0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(79, 69, 56, 0.15)",
        borderRadius: "1rem 1rem 0 0",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.6)",
        paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))",
      }}
    >
      {NAV.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.id);
              if (item.section) scrollTo(item.section);
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col items-center justify-center gap-0.5 transition-all active:scale-90"
            style={{
              color: isActive ? "#f0bf6b" : "#6b6d70",
              background: isActive ? "rgba(209,163,82,0.15)" : "transparent",
              borderRadius: "9999px",
              padding: "0.35rem 1rem",
              minWidth: "64px",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "22px",
                fontVariationSettings: isActive ? "'FILL' 1, 'wght' 400" : "'FILL' 0, 'wght' 300",
              }}
            >
              {item.icon}
            </span>
            <span
              className="uppercase tracking-widest"
              style={{ fontSize: "9px", fontWeight: 700 }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
