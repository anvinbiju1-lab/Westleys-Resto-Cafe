"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, X, ExternalLink, Sparkles } from "lucide-react";
import OrderPlatformChooser from "./OrderPlatformChooser.client";

interface MenuItem {
  name: string;
  price: string | number;
  description: string;
  signature?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

interface MenuTabsProps {
  categories: MenuCategory[];
  currency?: string;
}

const ICONS: Record<string, string> = {
  "Soups": "🥣",
  "Salads": "🥗",
  "Savory Bites": "🍗",
  "Pasta Delights": "🍝",
  "Main Courses": "🥩",
  "Gourmet Burgers": "🍔",
  "Crafted Sandwiches & Tex-Mex Delights": "🌮",
  "Crafted Pizzas": "🍕",
  "Artisan Pizzas": "🍕",
  "Thirst Quenchers": "🍹",
  "Smoothies / Nutrient-Rich Sips": "🥑",
  "Milkshakes & Malts": "🥤",
  "Hot Coffee": "☕",
  "Tea": "🍵",
  "Cold Coffee": "🧋",
  "Frappe": "🧊",
  "Patisserie": "🍰",
};

export default function MenuTabs({ categories, currency = "₹" }: MenuTabsProps) {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isChooserOpen, setIsChooserOpen] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-5%" });

  const activeItems = categories.find(c => c.id === activeTab)?.items || [];

  return (
    <div className="flex flex-col gap-10">
      {/* Pill Tabs — horizontal scroll, 44px min height */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="relative flex-shrink-0 flex items-center gap-2 px-4 rounded-full text-xs font-montserrat font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden active:scale-95"
              style={{
                minHeight: "44px",
                ...(isActive ? {
                  background: "linear-gradient(135deg, #D1A352 0%, #B8893A 100%)",
                  color: "#050608",
                  boxShadow: "0 0 24px rgba(209,163,82,0.35), 0 4px 12px rgba(0,0,0,0.3)",
                  transform: "scale(1.04)",
                } : {
                  background: "rgba(17,19,25,0.8)",
                  color: "#A29A8D",
                  border: "1px solid #27272F",
                })
              }}
            >
              <span className="text-sm" aria-hidden="true">{ICONS[cat.name] || "🍽"}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Item Cards Grid */}
      <div ref={gridRef}>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {activeItems.map((item, i) => (
              <motion.div
                layout
                key={`${activeTab}-${item.name}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, delay: isInView ? i * 0.08 : 0, ease: [0.25, 1, 0.5, 1] }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer relative flex flex-col gap-4 p-5 sm:p-6 rounded-2xl border border-[#27272F] overflow-hidden active:scale-[0.98] transition-transform"
                style={{
                  background: "linear-gradient(135deg, #111319 0%, #151820 100%)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(209,163,82,0.35)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(209,163,82,0.1)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#27272F";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.35)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                {/* Signature badge */}
                {item.signature && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-montserrat font-bold uppercase tracking-widest text-[#D1A352]"
                    style={{ background: "rgba(209,163,82,0.12)", border: "1px solid rgba(209,163,82,0.25)" }}>
                    <Sparkles size={9} />
                    Signature
                  </div>
                )}

                {/* Item header */}
                <div className="flex justify-between items-start gap-3 pr-20">
                  <h3 className="font-playfair text-xl font-bold text-[#F4ECE2] leading-tight group-hover:text-[#D1A352] transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>

                {/* Price */}
                <span className="font-playfair text-2xl font-bold text-[#D1A352]">{currency}{item.price}</span>

                {/* Description */}
                <p className="text-[#A29A8D] text-sm font-inter leading-relaxed line-clamp-2 flex-grow">
                  {item.description}
                </p>

                {/* Details link */}
                <div className="flex items-center gap-1.5 text-[#D1A352] text-[10px] font-montserrat font-bold uppercase tracking-widest opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  View Details <Plus size={12} />
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "radial-gradient(ellipse at top right, rgba(209,163,82,0.05) 0%, transparent 60%)" }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Item Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-[101] rounded-3xl p-8 md:p-10"
              style={{
                background: "linear-gradient(135deg, #111319 0%, #151820 100%)",
                border: "1px solid rgba(209,163,82,0.2)",
                boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 40px rgba(209,163,82,0.1)",
              }}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full text-[#A29A8D] hover:text-[#F4ECE2] transition-colors"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <X size={16} />
              </button>

              <div className="flex flex-col gap-6">
                {selectedItem.signature && (
                  <span className="text-[#D1A352] font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-1.5">
                    <Sparkles size={10} /> Westley&apos;s Signature
                  </span>
                )}

                <div className="flex items-end justify-between gap-4 pb-5 border-b border-[#27272F]">
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#F4ECE2] leading-tight">
                    {selectedItem.name}
                  </h2>
                  <span className="font-playfair text-2xl font-bold text-[#D1A352] flex-shrink-0">
                    {currency}{selectedItem.price}
                  </span>
                </div>

                <p className="text-[#A29A8D] text-base font-inter leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <button
                    onClick={() => setIsChooserOpen(true)}
                    className="btn-amber flex-1 py-4 text-xs rounded-full flex items-center justify-center gap-2"
                    style={{ color: "#050608" }}
                  >
                    Order Online <ExternalLink size={14} />
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="btn-glass flex-1 py-4 text-xs rounded-full"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <OrderPlatformChooser
        isOpen={isChooserOpen}
        onClose={() => setIsChooserOpen(false)}
        itemName={selectedItem?.name}
      />
    </div>
  );
}
