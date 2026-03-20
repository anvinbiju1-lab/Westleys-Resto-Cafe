import ReviewsCarousel from "./ReviewsCarousel.client";

const REVIEWS = [
  {
    name: "Aparna B.",
    content: "Jijo, our waiter, did a fantastic job ensuring food arrived on time. Accommodated all extra requirements. Had a great time!",
    source: "TripAdvisor",
    type: "Family",
  },
  {
    name: "LloydKochi",
    content: "Perfect burger followed by a yummy Walnut Brownie. Very good ambience, staff are very friendly — 5 star service very much appreciated.",
    source: "TripAdvisor",
    type: "Family",
  },
  {
    name: "unnikrisbNaperville",
    content: "Went again for a Saturday evening! Service was wonderful and no words for the food. Quality and quantity at its best. Recommended for couples, families, small groups.",
    source: "TripAdvisor",
    type: "Couples",
  },
  {
    name: "Zomato Guest",
    content: "One of those places where the ambience and service are at par with the food. The freshness and simplicity of the dishes is a welcome change.",
    source: "Zomato",
    type: "Individual",
  },
  {
    name: "Google Guest",
    content: "The pizza crust was perfectly crisp on the outside yet soft and airy on the inside. A harmonious blend of fresh, high-quality ingredients.",
    source: "Google",
    type: "Individual",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-28 md:py-36 relative overflow-hidden">
      {/* Amber gradient background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0A0C10 0%, #0D0B0E 50%, #0A0C10 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(65,37,43,0.25) 0%, transparent 65%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(209,163,82,0.3) 50%, transparent 100%)" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label justify-center mb-4 block">Guest Stories</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-[#F4ECE2]">
            What People{" "}
            <span className="italic text-[#D1A352]">Say</span>
          </h2>
        </div>

        <ReviewsCarousel reviews={REVIEWS} />
      </div>
    </section>
  );
}
