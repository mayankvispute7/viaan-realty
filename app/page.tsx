import React from "react";
import HeroIntro from "@/components/sections/HeroIntro";
import FeaturesSection from "@/components/sections/FeaturesSection";
import LocationShowcase from "@/components/sections/LocationShowcase";
import ContactSection from "@/components/sections/ContactSection";
import PartnerBrands from "@/components/sections/PartnerBrands";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      
      {/* 1. Cinematic Hero (Dark/Night Sequence) */}
      <HeroIntro />
      
      {/* 2. "Our Features" Section (Cream Background with 3D Fold-In Animation) */}
      <FeaturesSection />

      {/* 3. Locations Showcase Slider (Dark Background) */}
      <LocationShowcase />

      {/* 4. Quick Homepage Contact Section (Cream Background) */}
      <ContactSection />
      
      {/* 5. Collaboration Brands Marquee (Cream/White Background) */}
      <PartnerBrands />
      
      {/* (The Dark Footer will automatically render right below this thanks to layout.tsx!) */}
      
    </main>
  );
}