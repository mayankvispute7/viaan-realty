"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Scale, Gem, Handshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: ShieldCheck,
    title: "Zero Brokerage",
    desc: "Experience complete transparency. We charge absolutely zero brokerage on our curated luxury properties, maximizing your investment value."
  },
  {
    icon: Scale,
    title: "Direct-to-Developer Advantage",
    desc: "Skip the chaos of pushy brokers, endless calls, and hidden fees. We connect you directly with top developers, eliminating stressful middlemen entirely. Enjoy a transparent, relief-filled buying experience with zero brokerage, official builder inventory, and the absolute lowest market prices. Your dream home, straight from the source."
  },
  {
    icon: Gem,
    title: "Curated Portfolio",
    desc: "We don't list everything. We only showcase hand-picked, ultra-premium estates and commercial spaces that meet the VIAAN standard."
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    desc: "From initial viewing to legal documentation and final handover, our concierge team handles every detail for a seamless transition."
  }
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { opacity: 0, y: 80, rotationX: -45, transformPerspective: 1000 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.2, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="bg-[#F7F3EE] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-spin {
          0% { transform: perspective(1000px) translateY(0) rotateY(0deg); }
          50% { transform: perspective(1000px) translateY(-4px) rotateY(180deg); }
          100% { transform: perspective(1000px) translateY(0) rotateY(360deg); }
        }
        .icon-3d-loop { animation: float-spin 6s ease-in-out infinite; transform-style: preserve-3d; display: inline-block; }
        .group:hover .icon-3d-loop { animation-duration: 1.5s; }
      `}} />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#C7A26A]"></div>
            <span className="text-[#C7A26A] tracking-[0.3em] uppercase text-xs font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              The VIAAN Advantage
            </span>
            <div className="w-12 h-[1px] bg-[#C7A26A]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            WHY CHOOSE US
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white p-8 rounded-2xl border border-black/5 transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]" style={{ transformStyle: "preserve-3d" }}>
              <div className="w-16 h-16 rounded-full bg-[#F7F3EE] border border-[#C7A26A]/30 flex items-center justify-center mb-6 relative overflow-visible group-hover:border-[#C7A26A] transition-colors duration-500">
                <div className="absolute inset-0 bg-[#C7A26A]/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                <div className="relative z-10 icon-3d-loop text-[#1A1A1A] group-hover:text-[#C7A26A] transition-colors duration-500">
                  <feature.icon size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                {feature.desc}
              </p>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#C7A26A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}