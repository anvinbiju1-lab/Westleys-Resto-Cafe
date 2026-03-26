import MenuTabs from "./MenuTabs.client";
import menuData from "@/data/menu.json";

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#121316" }}>
      {/* Background ambient light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, rgba(209,163,82,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Stitch editorial header */}
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] font-label font-bold tracking-[0.3em] uppercase mb-2 block" style={{ color: "#d1a352" }}>
            The Digital Menu
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold leading-tight text-on-surface mb-4">
            From Signature Steaks
            <br />
            <span className="italic" style={{ color: "#f0bf6b" }}>to Slow-Cooked Comfort</span>
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-[480px]">
            Our menu blends classic café favorites with multi-cuisine mains, built around honest ingredients and precise cooking.
          </p>
        </div>

        <MenuTabs categories={menuData.categories} currency={menuData.currency} />
      </div>
    </section>
  );
}
