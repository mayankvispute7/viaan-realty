"use client";
import React, { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

const locationsData = [
  { name: "Wakad", type: "Premium Residential", tagline: "The Modern Urban Hub", img: "/images/wakad.jpg", link: "wakad" },
  { name: "Baner", type: "Ultra-Luxury Estates", tagline: "Elite High-Street Living", img: "/images/baner.jpg", link: "baner" },
  { name: "Balewadi", type: "Commercial & Luxury", tagline: "The High-Street Pioneer", img: "/images/balewadi.jpg", link: "balewadi" },
  { name: "Bavdhan", type: "Discreet Hillside Villas", tagline: "Nature Meets Prestige", img: "/images/bavdhan.jpg", link: "bavdhan" },
  { name: "Pashan", type: "Bespoke Residences", tagline: "Serene Low-Rise Luxury", img: "/images/pashan.jpg", link: "pashan" },
  { name: "Hinjewadi", type: "Tech-Core Townships", tagline: "The Innovation Epicenter", img: "/images/hinjewadi.jpg", link: "hinjewadi" },
  { name: "Punawale", type: "Grand Townships", tagline: "Family-Centric Masterpieces", img: "/images/punawale.jpeg", link: "punawale" },
  { name: "Ravet", type: "Iconic Skylines", tagline: "Scenic Waterfront Living", img: "/images/ravet.jpg", link: "ravet" },
  { name: "Mahalunge", type: "Smart Mega Cities", tagline: "The Future Frontier", img: "/images/mahalunge.jpg", link: "mahalunge" },
  { name: "Tathawade", type: "Modern Living Blocks", tagline: "Strategic Connectivity", img: "/images/tathawade.jpg", link: "tathawade" },
  { name: "Pimpri Chinchwad", type: "Corporate Hubs", tagline: "Industrial & Elite Retail", img: "/images/pimpri.avif", link: "pimpri-chinchwad" },
  { name: "Akurdi", type: "Industrial Lofts", tagline: "Urban Architectural Heritage", img: "/images/akurdi.jpg", link: "akurdi" },
  { name: "Pimple Saudagar", type: "Exclusive Clubs & Flats", tagline: "Vibrant Premium Living", img: "/images/pimple_saudagar.jpg", link: "pimple-saudagar" },
];

export default function LocationShowcase() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;

    const smoothScroll = () => {
      if (!isHovered.current) {
        slider.scrollLeft += 0.8; 
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleManualSlide = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    isHovered.current = true;
    const cardWidth = window.innerWidth >= 768 ? 384 : 324;
    
    slider.scrollBy({ left: direction === "right" ? cardWidth : -cardWidth, behavior: "smooth" });

    setTimeout(() => { isHovered.current = false; }, 1000);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="locations" className="bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#C7A26A]"></div>
              <span className="text-[#C7A26A] tracking-[0.3em] uppercase text-xs font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Strategic Geography</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Location <br /> We Operate
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => handleManualSlide("left")} className="w-14 h-14 rounded-full border border-white/20 hover:border-[#C7A26A] text-white hover:text-black flex items-center justify-center bg-white/5 backdrop-blur-md transition-all duration-500 hover:scale-105 group relative overflow-hidden z-10">
              <ArrowLeft size={20} className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1" />
              <div className="absolute inset-0 bg-[#C7A26A] scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 ease-out"></div>
            </button>
            <button onClick={() => handleManualSlide("right")} className="w-14 h-14 rounded-full border border-white/20 hover:border-[#C7A26A] text-white hover:text-black flex items-center justify-center bg-white/5 backdrop-blur-md transition-all duration-500 hover:scale-105 group relative overflow-hidden z-10">
              <ArrowRight size={20} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-[#C7A26A] scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 ease-out"></div>
            </button>
          </div>
        </div>

        <div 
          ref={sliderRef}
          onMouseEnter={() => isHovered.current = true}
          onMouseLeave={() => isHovered.current = false}
          onTouchStart={() => isHovered.current = true}
          onTouchEnd={() => isHovered.current = false}
          className="flex gap-6 overflow-x-hidden py-10 my-[-40px] px-4"
        >
          {[...locationsData, ...locationsData].map((loc, index) => (
            <div 
              key={index}
              onClick={scrollToContact} // THIS GUARANTEES THE SCROLL
              className="block w-[300px] md:w-[360px] h-[500px] shrink-0 relative rounded-2xl overflow-hidden bg-[#0a0a0a] group shadow-2xl border border-white/10 transition-transform duration-500 ease-out hover:scale-110 hover:-translate-y-4 hover:z-50 hover:shadow-[0_30px_60px_rgba(199,162,106,0.15)] cursor-pointer"
            >
              <div className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] scale-100 group-hover:scale-110">
                <Image src={loc.img} alt={loc.name} fill sizes="(max-width: 768px) 300px, 360px" className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100"></div>
              <div className="absolute inset-4 border border-[#C7A26A]/0 group-hover:border-[#C7A26A]/60 rounded-xl pointer-events-none transition-all duration-700 ease-out scale-95 group-hover:scale-100"></div>
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <MapPin size={12} className="text-[#FDE08B]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-white font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Pune Portfolio</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-xs uppercase tracking-[0.25em] text-[#FDE08B] font-bold block mb-2 opacity-80 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "'Montserrat', sans-serif" }}>{loc.type}</span>
                <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{loc.name}</h3>
                <p className="text-white/60 group-hover:text-white/95 text-sm font-light transition-all duration-500 ease-out leading-relaxed tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>{loc.tagline}</p>
                <div className="mt-4 flex items-center gap-2 text-[#C7A26A] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-xs tracking-widest uppercase font-semibold">
                  <span>Explore Location</span>
                  <ArrowRight size={14} className="transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}