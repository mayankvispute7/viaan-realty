"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gem, Globe2, Key } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Key,
    title: "Bespoke Acquisitions",
    description: "We secure off-market, highly coveted properties that never see public listings, ensuring total exclusivity for our clients."
  },
  {
    icon: Gem,
    title: "Luxury Portfolio Management",
    description: "End-to-end management of high-net-worth real estate assets, maximizing value through strategic upgrades and curation."
  },
  {
    icon: Globe2,
    title: "Global Investments",
    description: "Navigate international real estate markets with our elite network of global partners, securing your legacy worldwide."
  }
];

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade up for the expertise cards
      gsap.fromTo(
        cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // Beautiful Cream to Pure White Gradient
    <section ref={sectionRef} className="bg-gradient-to-b from-[#F7F3EE] to-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-[#C7A26A]"></div>
          <span className="text-[#C7A26A] tracking-[0.3em] uppercase text-xs font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            The VIAAN Standard
          </span>
          <div className="w-8 h-[1px] bg-[#C7A26A]"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-[#1A1A1A]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
          Unrivaled Expertise
        </h2>

        {/* The 3-Column Service Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 w-full mt-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              
              {/* Animated Icon Ring */}
              <div className="w-20 h-20 rounded-full border border-[#C7A26A]/30 flex items-center justify-center mb-6 relative transition-transform duration-500 group-hover:scale-110 group-hover:border-[#C7A26A] bg-white shadow-sm">
                <service.icon size={32} className="text-[#1A1A1A] group-hover:text-[#C7A26A] transition-colors duration-500 relative z-10" />
                <div className="absolute inset-0 bg-[#C7A26A]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base max-w-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}