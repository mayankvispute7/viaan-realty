"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowLeft, Construction } from "lucide-react";
import Image from "next/image";

export default function ComingSoonPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current?.children ? Array.from(contentRef.current.children) : [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen relative flex items-center justify-center overflow-hidden">
      
      {/* Cinematic Background Blur */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image src="/images/about-hero.jpg" alt="VIAAN Architecture" fill sizes="100vw" className="object-cover blur-md" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      <div ref={contentRef} className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
        
        <div className="w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(199,162,106,0.1)]">
          <Construction size={32} className="text-[#C7A26A]" />
        </div>

        <span className="text-[#C7A26A] tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-6 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Under Development
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
          Curating <span className="font-light italic text-[#C7A26A]" style={{ fontFamily: "'Playfair Display', serif" }}>Perfection</span>
        </h1>
        
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-12 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
          This section of the VIAAN Realty portal is currently being crafted by our team. We are meticulously preparing the finest property selections and location details for you.
        </p>

        <Link href="/" className="inline-flex items-center gap-3 bg-white hover:bg-[#C7A26A] text-[#1A1A1A] hover:text-white px-8 py-4 rounded-full font-bold tracking-[0.2em] text-xs uppercase transition-colors duration-300 shadow-lg group">
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Return to Home
        </Link>

      </div>
    </main>
  );
}