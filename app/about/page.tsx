"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Eye, Target, ShieldCheck, Scale, BadgeCheck, Users, FileSearch, HeartHandshake } from "lucide-react";
import OfficeLocationSection from "@/components/sections/OfficeLocationSection";
import PartnerBrands from "@/components/sections/PartnerBrands";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.animate-element').forEach((el: any) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } }
        );
      });
      gsap.to(".hero-parallax", {
        yPercent: 30, ease: "none", scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true }
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="bg-[#F7F3EE] min-h-screen overflow-hidden">
      
      {/* 1. ABOUT HERO */}
      <section className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
        
        <div className="absolute inset-0 z-0 hero-parallax scale-110">
          <Image src="/images/about-hero.jpg" alt="VIAAN Realty Luxury" fill sizes="100vw" className="object-cover" priority />
        </div>
        
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[#C7A26A]/40 via-[#C7A26A]/10 to-transparent mix-blend-color-dodge z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-[#C7A26A]/40 via-[#C7A26A]/10 to-transparent mix-blend-color-dodge z-10 pointer-events-none"></div>
        
        <div className="relative z-20 text-center px-6 mt-20 max-w-4xl mx-auto flex flex-col items-center">
          <span className="animate-element text-white/80 tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-6 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>About VIAAN Realty</span>
          
          {/* FONT UPDATED: Montserrat & Playfair Display */}
          <h1 className="animate-element text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-xl uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Where Dreams <br/> <span className="font-light italic tracking-normal normal-case" style={{ fontFamily: "'Playfair Display', serif" }}>Meet Reality</span>
          </h1>
          
          <p className="animate-element text-white/90 text-sm md:text-lg max-w-2xl font-light tracking-wide leading-relaxed drop-shadow-md" style={{ fontFamily: "'Inter', sans-serif" }}>
            Delivering trusted real-estate solutions with professionalism, transparency, and customer-first commitment.
          </p>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="animate-element flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#1A1A1A]"></div>
              <span className="text-[#1A1A1A] tracking-[0.3em] uppercase text-xs font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Story</span>
            </div>
            <h2 className="animate-element text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              A Legacy of <span className="italic font-light">Trust & Excellence</span>
            </h2>
            <div className="animate-element space-y-6 text-[#1A1A1A] font-light leading-relaxed text-base md:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>VIAAN Realty is a dynamic real estate company committed to delivering exceptional property solutions with <span className="font-semibold">honesty, professionalism, and a customer-first approach.</span></p>
              <p>With deep market understanding and <span className="font-semibold">strong negotiation expertise</span>, the company ensures that every client receives the best possible value and a smooth property-buying experience.</p>
              <p>At VIAAN Realty, relationships are built on <span className="font-semibold">trust, transparency, and long-term commitment.</span> Every client has unique requirements, and the team focuses on personalized guidance, clear communication, and dedicated support throughout the real estate journey.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] animate-element group">
            <Image src="/images/about-intro.jpg" alt="VIAAN Realty Office" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* 3. OUR VISION & MISSION */}
      <section className="py-20 px-6 md:px-12 border-y border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-element bg-white border border-black/5 p-10 md:p-16 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-500 relative overflow-hidden group">
            <Eye size={40} className="text-[#1A1A1A] mb-8 transition-transform duration-500 group-hover:scale-110" />
            {/* FONT UPDATED: Playfair Display */}
            <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h3>
            <p className="text-[#1A1A1A] font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>To redefine the luxury real estate landscape in Pune by setting the highest standards of architectural excellence, absolute transparency, and bespoke lifestyle curation.</p>
          </div>
          <div className="animate-element bg-white border border-black/5 p-10 md:p-16 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-500 relative overflow-hidden group">
            <Target size={40} className="text-[#1A1A1A] mb-8 transition-transform duration-500 group-hover:scale-110" />
            {/* FONT UPDATED: Playfair Display */}
            <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
            <p className="text-[#1A1A1A] font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>To meticulously match extraordinary individuals with extraordinary properties, ensuring every transaction is governed by unyielding integrity, discretion, and a commitment to protecting our clients' legacies.</p>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE VIAAN REALTY */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-element">
          {/* FONT UPDATED: Playfair Display */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>The VIAAN Standard</h2>
          <p className="text-[#1A1A1A] tracking-[0.2em] uppercase text-xs font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Why Choose Us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Trusted Guidance", desc: "Honest, data-driven advice at every step of your investment." },
            { icon: Scale, title: "Strong Negotiation", desc: "Leveraging market authority to secure your asset at the best price." },
            { icon: BadgeCheck, title: "Verified Properties", desc: "Every estate undergoes rigorous legal and architectural vetting." },
            { icon: Users, title: "Customer-First Approach", desc: "Your unique requirements dictate our entire curation process." },
            { icon: FileSearch, title: "Transparent Process", desc: "Zero hidden costs, zero brokerage, absolute clarity." },
            { icon: HeartHandshake, title: "Personalized Support", desc: "A dedicated concierge team for a seamless transition." }
          ].map((feature, i) => (
            <div key={i} className="animate-element bg-white p-8 rounded-2xl border border-black/5 hover:-translate-y-2 hover:shadow-lg transition-all duration-500 group">
              <div className="w-12 h-12 bg-[#F7F3EE] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1A1A1A] transition-colors duration-500">
                <feature.icon size={20} className="text-[#1A1A1A] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{feature.title}</h3>
              <p className="text-[#1A1A1A] text-sm font-light leading-relaxed opacity-80" style={{ fontFamily: "'Inter', sans-serif" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BRANDS WE COLLABORATE WITH */}
      <PartnerBrands />

      {/* 6. OFFICE LOCATION & CONTACT INFO */}
      <div className="animate-element bg-[#F7F3EE]">
        <OfficeLocationSection />
      </div>

    </main>
  );
}