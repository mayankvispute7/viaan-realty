"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function OfficeLocationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children ? Array.from(contentRef.current.children) : [],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F7F3EE] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* CSS for Shine Effect */}
      <style dangerouslySetInnerHTML={{__html: `
        .map-shine { position: relative; overflow: hidden; }
        .map-shine::after {
          content: ''; position: absolute; top: 0; left: -150%; width: 50%; height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg); transition: 0s; pointer-events: none; z-index: 10;
        }
        .map-shine:hover::after { left: 200%; transition: 1s ease-in-out; }
      `}} />

      <div className="max-w-7xl mx-auto" ref={contentRef}>
        
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#1A1A1A]"></div>
            <span className="text-[#1A1A1A] tracking-[0.3em] uppercase text-xs font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Headquarters</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Visit Our Office</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          
          {/* Left: Clean Minimal Card (Removed white overlays) */}
          <div className="w-full lg:w-5/12 bg-white border border-black/5 p-8 md:p-12 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden group">
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>VIAAN Realty</h3>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7F3EE] border border-black/5 text-[#1A1A1A] rounded-lg mb-8 shadow-sm">
                <ShieldCheck size={16} className="text-[#1A1A1A]" />
                <span className="text-xs tracking-widest uppercase font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>RERA: A031262601341</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-[#F7F3EE] flex items-center justify-center shrink-0"><MapPin size={18} className="text-[#1A1A1A]" /></div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Location</p>
                    <p className="text-[#1A1A1A] text-sm md:text-base leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Office Number 222, Vardhaman Moonstone,<br />Sr No 99, Opp. JSPM College,<br />Tathawade, Pune, Maharashtra – 411033</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7F3EE] flex items-center justify-center shrink-0"><Phone size={18} className="text-[#1A1A1A]" /></div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Phone</p>
                    <p className="text-[#1A1A1A] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>+91 98905 48878</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7F3EE] flex items-center justify-center shrink-0"><Mail size={18} className="text-[#1A1A1A]" /></div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email</p>
                    <p className="text-[#1A1A1A] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Viaanrealityindia@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4 relative z-10">
              <a href="https://wa.me/919890548878" target="_blank" rel="noreferrer" className="flex-1 bg-[#1A1A1A] hover:bg-[#333333] text-white py-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 shadow-md">
                <MessageCircle size={18} />
                <span className="text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>WhatsApp Us</span>
              </a>
              <a href="https://www.instagram.com/viaan_realty" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#F7F3EE] hover:bg-[#EAE5DF] rounded-xl flex items-center justify-center transition-colors duration-300 text-[#1A1A1A]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>

          </div>

          {/* Right: Map with Shine Effect */}
          <div className="w-full lg:w-7/12 h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-black/5 relative map-shine">
            <iframe 
              src="https://maps.google.com/maps?q=Vardhaman%20Moonstone,%20Tathawade,%20Pune&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}