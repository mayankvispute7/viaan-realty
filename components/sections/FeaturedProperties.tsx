"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Using Local Images!
const properties = [
  {
    id: 1,
    title: "The Zenith Penthouse",
    location: "Koregaon Park, Pune",
    price: "₹ 8.5 Cr",
    beds: 4,
    baths: 5,
    sqft: 4200,
    type: "Apartment",
    image: "/properties/penthouse.jpg", // Local Path
    isLarge: true, 
  },
  {
    id: 2,
    title: "Aura Villas",
    location: "Baner, Pune",
    price: "₹ 4.2 Cr",
    beds: 3,
    baths: 3,
    sqft: 2800,
    type: "Villa",
    image: "/properties/villa.jpg", // Local Path
    isLarge: false,
  },
  {
    id: 3,
    title: "Lumina Commercial Hub",
    location: "Kharadi, Pune",
    price: "₹ 12.0 Cr",
    beds: 0,
    baths: 2,
    sqft: 8500,
    type: "Commercial",
    image: "/properties/commercial.jpg", // Local Path
    isLarge: false,
  }
];

export default function FeaturedProperties() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      const items = gsap.utils.toArray('.property-card');
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // Updated Background to Premium Off-White/Cream
    <section ref={sectionRef} className="bg-[#F7F3EE] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#C7A26A]"></div>
            <span className="text-[#C7A26A] tracking-[0.3em] uppercase text-xs font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Curated Portfolio
            </span>
          </div>
          {/* Text updated to deep charcoal for contrast against cream */}
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Featured Residences
          </h2>
        </div>

        {/* Bento Box Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {properties.map((prop) => (
            <div 
              key={prop.id} 
              className={`property-card group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl ${prop.isLarge ? 'md:col-span-2 md:row-span-1' : 'md:col-span-1 md:row-span-1'}`}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Image 
                  src={prop.image} 
                  alt={prop.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Internal dark gradient so text on the images remains readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300"></div>

              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
                <span className="text-[10px] tracking-widest uppercase text-[#FDE08B] font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {prop.type}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {prop.title}
                </h3>
                
                <div className="flex items-center gap-2 text-white/90 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <MapPin size={16} className="text-[#C7A26A]" />
                  <span className="text-sm font-medium">{prop.location}</span>
                </div>

                <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div className="flex flex-col">
                    <span className="text-white/70 text-xs tracking-wider uppercase mb-1">Price</span>
                    <span className="text-[#FDE08B] font-bold">{prop.price}</span>
                  </div>
                  {prop.beds > 0 && (
                    <div className="flex flex-col">
                      <span className="text-white/70 text-xs tracking-wider uppercase mb-1 flex items-center gap-1"><Bed size={12}/> Beds</span>
                      <span className="text-white font-medium">{prop.beds}</span>
                    </div>
                  )}
                  {prop.sqft > 0 && (
                    <div className="flex flex-col">
                      <span className="text-white/70 text-xs tracking-wider uppercase mb-1 flex items-center gap-1"><Square size={12}/> Sq.Ft</span>
                      <span className="text-white font-medium">{prop.sqft}</span>
                    </div>
                  )}
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}