import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import SignatureSpotlight from "@/components/SignatureSpotlight";
import AmenitiesSection from "@/components/AmenitiesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Westley's Restocafe",
    "image": "https://westleysrestocafe.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, Kaliyath Building, Metro Pillar 481, Palarivattom – Edappally Rd",
      "addressLocality": "Mamangalam, Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682025",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.0159,
      "longitude": 76.3015
    },
    "url": "https://westleysrestocafe.com",
    "telephone": "+916282418166",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "23:00"
      }
    ],
    "servesCuisine": ["International", "Steakhouse", "Café", "Barbecue"],
    "priceRange": "₹600–₹800 for two"
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <SignatureSpotlight />
      <AmenitiesSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
}
