import MenuTabs from "./MenuTabs.client";
import menuData from "@/data/menu.json";

export default function MenuSection() {
  return (
    <section id="menu" className="py-28 md:py-36 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(209,163,82,0.3) 30%, rgba(209,163,82,0.3) 70%, transparent 100%)" }} />

      {/* Background radial */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(209,163,82,0.04) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="section-label mb-4 block">The Digital Menu</span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-[#F4ECE2] mb-4">
            From Signature Steaks
            <br />
            <span className="italic text-[#D1A352]">to Slow-Cooked Comfort</span>
          </h2>
          <p className="text-[#A29A8D] font-inter text-lg leading-relaxed">
            Our menu blends classic café favorites with multi-cuisine mains, built around honest ingredients and precise cooking.
          </p>
        </div>

        <MenuTabs categories={menuData} />
      </div>
    </section>
  );
}
