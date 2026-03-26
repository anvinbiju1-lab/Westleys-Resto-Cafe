"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, X, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
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
    <div className="flex flex-col gap-12">
      {/* Category Tabs — Stitch Style horizontal scroll, Rounded Full */}
      <nav className="sticky top-20 z-40 -mx-4 mb-4 bg-surface-dim/80 backdrop-blur-md py-4">
        <div className="flex overflow-x-auto no-scrollbar px-4 gap-3 items-center h-11">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-shrink-0 px-6 h-full flex items-center justify-center rounded-full font-label text-[11px] font-bold uppercase tracking-widest transition-all active:scale-95 ${
                  isActive 
                    ? "bg-primary-container text-on-primary-container shadow-[0_0_15px_rgba(209,163,82,0.3)] border border-primary/20" 
                    : "bg-surface-container-low text-on-surface-variant hover:text-primary border border-white/5"
                }`}
              >
                <span className="mr-2 text-sm" aria-hidden="true">{ICONS[cat.name] || "🍽"}</span>
                {cat.name}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Menu Items List — Stitch Item Card Style */}
      <div ref={gridRef}>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {activeItems.map((item, i) => (
              <motion.article
                layout
                key={`${activeTab}-${item.name}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, delay: isInView ? i * 0.05 : 0, ease: [0.25, 1, 0.5, 1] }}
                onClick={() => setSelectedItem(item)}
                className="group relative overflow-hidden rounded-xl bg-surface-container-highest/60 backdrop-blur-xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer active:scale-[0.98]"
              >
                {/* Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxq6HpcRDCycRdQo9W6ohwG0md2SsmqSe5gbCK9_3EGfi4cvm0qLCc1W2LnJt9KhQLoe1XzHlB45rRFQ9cmO4Q-CT02SyaexnkpZrdR21_BB7zUuKNNBdTt3Ja-ZZf7d_5x6VjOGD_KXpJRbLt8TkLh2t58tZAn74qrrf1qEisC4CiqzdlPfoIZPdxw3h6sDkmjU9Qf6RpK6Y20YxFE4_A_GVSxgpe31UODrqHbQPr53KTInRaYUVQnBvMSQf3zXMpP87HO3AJvfY')" }} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Signature badge — golden pill */}
                  {item.signature && (
                    <div className="absolute -top-2 -right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-montserrat font-bold uppercase tracking-widest transition-transform group-hover:scale-105 z-20"
                      style={{ 
                        background: "linear-gradient(135deg, #FFD700 0%, #D1A352 100%)", 
                        color: "#2C1E00",
                        boxShadow: "0 4px 12px rgba(209,163,82,0.4)"
                      }}>
                      <Sparkles size={9} fill="#2C1E00" />
                      Signature
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-6 gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-body text-on-surface leading-tight transition-colors group-hover:text-primary pr-16">
                        {item.name}
                      </h3>
                    </div>
                    <div className="text-2xl font-serif font-bold text-primary italic">
                      {currency}{item.price}
                    </div>
                  </div>

                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2 mb-6 flex-grow">
                    {item.description}
                  </p>

                  <button className="w-full h-11 flex items-center justify-center border border-primary/40 rounded-full font-label text-[11px] font-bold text-primary hover:bg-primary/10 transition-all uppercase tracking-widest active:scale-95">
                    View Details
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Item Modal — Stitch Design */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-stone-950/80 backdrop-blur-md z-[100] cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-[101] rounded-2xl p-8 overflow-hidden"
              style={{
                background: "rgba(30, 32, 34, 0.95)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(240, 191, 107, 0.2)",
                boxShadow: "0 40px 120px rgba(0,0,0,0.8), 0 0 40px rgba(209, 163, 82, 0.1)",
              }}
            >
              {/* Grain Overlay in Modal */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxq6HpcRDCycRdQo9W6ohwG0md2SsmqSe5gbCK9_3EGfi4cvm0qLCc1W2LnJt9KhQLoe1XzHlB45rRFQ9cmO4Q-CT02SyaexnkpZrdR21_BB7zUuKNNBdTt3Ja-ZZf7d_5x6VjOGD_KXpJRbLt8TkLh2t58tZAn74qrrf1qEisC4CiqzdlPfoIZPdxw3h6sDkmjU9Qf6RpK6Y20YxFE4_A_GVSxgpe31UODrqHbQPr53KTInRaYUVQnBvMSQf3zXMpP87HO3AJvfY')" }} />

              <div className="relative z-10 flex flex-col gap-6">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface transition-colors bg-white/5 active:scale-90"
                >
                  <X size={18} />
                </button>
                {/* Signature badge — golden pill */}
                {selectedItem.signature && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-montserrat font-bold uppercase tracking-widest"
                    style={{ 
                      background: "linear-gradient(135deg, #FFD700 0%, #D1A352 100%)", 
                      color: "#2C1E00",
                      boxShadow: "0 4px 12px rgba(209,163,82,0.4)"
                    }}>
                    <Sparkles size={9} fill="#2C1E00" />
                    Signature
                  </div>
                )}

                <div className="flex items-end justify-between gap-4 pb-6 border-b border-white/10">
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-on-surface leading-tight">
                    {selectedItem.name}
                  </h2>
                  <span className="font-playfair text-2xl font-bold text-primary flex-shrink-0 italic">
                    {currency}{selectedItem.price}
                  </span>
                </div>

                <p className="text-on-surface-variant text-base leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="flex flex-col gap-3 mt-4">
                  <button
                    onClick={() => setIsChooserOpen(true)}
                    className="w-full h-14 bg-primary text-on-primary rounded-full font-label text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xl shadow-primary/10"
                  >
                    Order Online <ExternalLink size={16} />
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full h-14 bg-white/5 border border-white/10 text-on-surface rounded-full font-label text-[11px] font-bold uppercase tracking-widest active:scale-95 transition-all"
                  >
                    Close
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
