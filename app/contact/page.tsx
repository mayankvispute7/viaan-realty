"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import OfficeLocationSection from "@/components/sections/OfficeLocationSection";

// Custom Instagram Icon matching lucide-react styling
const InstagramIcon = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic entrance for the contact page elements
      gsap.fromTo(
        ".contact-anim",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen overflow-hidden">
      
      {/* 3D Animation CSS for Social Icons */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-spin {
          0% { transform: perspective(1000px) translateY(0) rotateY(0deg); }
          50% { transform: perspective(1000px) translateY(-6px) rotateY(180deg); }
          100% { transform: perspective(1000px) translateY(0) rotateY(360deg); }
        }
        .social-3d-loop {
          animation: float-spin 6s ease-in-out infinite;
          transform-style: preserve-3d;
          display: inline-block;
        }
        .social-group:hover .social-3d-loop {
          animation-duration: 1.5s; 
        }
      `}} />

      {/* ========================================================= */}
      {/* SECTION 1: BLACK THEME (THE FORM) - 1 PAGE FIT            */}
      {/* ========================================================= */}
      <section className="relative min-h-screen lg:h-screen bg-[#050505] flex items-center justify-center pt-24 pb-12 px-6 md:px-12 border-b border-white/10">
        
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image src="/images/about-hero.jpg" alt="VIAAN Architecture" fill sizes="100vw" className="object-cover blur-xl grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Soft Gold Glow behind the form */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C7A26A] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        {/* Side-by-Side Layout */}
        <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
          
          {/* LEFT SIDE: Typography */}
          <div className="w-full lg:w-5/12 flex flex-col contact-anim">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#C7A26A]"></div>
              <span className="text-[#C7A26A] tracking-[0.4em] uppercase text-[10px] font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Inquire Now</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-2" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              LET'S FIND <br className="hidden lg:block"/> YOUR
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#C7A26A] italic font-light mb-8 drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Perfect Property
            </h1>
            
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
              Connect with VIAAN Realty for trusted real-estate guidance and premium property solutions across Pune. Absolute discretion guaranteed.
            </p>
          </div>

          {/* RIGHT SIDE: Animated Form */}
          <div className="w-full lg:w-7/12 contact-anim">
            {/* Added hover:-translate-y-2 and a stronger glow on hover for the form animation */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(199,162,106,0.15)] transform hover:-translate-y-2 transition-all duration-700 ease-out text-left relative overflow-hidden group">
              
              {/* Sweeping shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                <div className="col-span-1 md:col-span-2">
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 outline-none text-white placeholder:text-white/40 focus:border-[#C7A26A] transition-colors font-light text-sm" placeholder="Full Name" style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div className="col-span-1">
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-3 outline-none text-white placeholder:text-white/40 focus:border-[#C7A26A] transition-colors font-light text-sm" placeholder="Phone Number" style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div className="col-span-1">
                  <input type="email" className="w-full bg-transparent border-b border-white/20 pb-3 outline-none text-white placeholder:text-white/40 focus:border-[#C7A26A] transition-colors font-light text-sm" placeholder="Email Address" style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div className="col-span-1">
                  <select defaultValue="" className="w-full bg-transparent border-b border-white/20 pb-3 outline-none text-white focus:border-[#C7A26A] transition-colors font-light text-sm appearance-none cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <option value="" disabled className="text-black">Select Property Type</option>
                    <option value="Apartment" className="text-black">Luxury Apartment</option>
                    <option value="Villa" className="text-black">Villa / Row House</option>
                    <option value="Commercial" className="text-black">Commercial Space</option>
                    <option value="Plot" className="text-black">Premium Plot</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 outline-none text-white placeholder:text-white/40 focus:border-[#C7A26A] transition-colors font-light text-sm" placeholder="Preferred Location (e.g. Baner)" style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <textarea rows={3} className="w-full bg-transparent border-b border-white/20 pb-3 outline-none text-white placeholder:text-white/40 focus:border-[#C7A26A] transition-colors font-light text-sm resize-none" placeholder="How can we assist you?" style={{ fontFamily: "'Inter', sans-serif" }}></textarea>
                </div>
                <div className="col-span-1 md:col-span-2 mt-2">
                  <button type="button" className="w-full py-4 bg-[#C7A26A] hover:bg-white text-black font-bold uppercase tracking-[0.2em] text-xs rounded-xl transition-all duration-500 flex items-center justify-center gap-3 group/btn shadow-lg">
                    <span>Send Inquiry</span>
                    <ArrowRight size={16} className="transform group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: CREAM THEME (SOCIAL CHANNELS)                  */}
      {/* ========================================================= */}
      <section className="relative bg-[#F7F3EE] py-24 px-6 md:px-12 border-b border-black/5">
        
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply pointer-events-none">
          <Image src="/images/about-hero.jpg" alt="Texture" fill sizes="100vw" className="object-cover blur-md" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 contact-anim">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Connect With <span className="italic font-light">Us</span>
            </h2>
            <p className="text-gray-600 font-light text-sm leading-relaxed max-w-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Reach out via our direct channels below, or submit an inquiry for a callback from our concierge team.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* WhatsApp */}
            <a href="https://wa.me/919890548878" target="_blank" rel="noreferrer" className="social-group flex items-center gap-5 w-max cursor-pointer">
              <div className="w-14 h-14 rounded-full border border-black/10 bg-white shadow-sm flex items-center justify-center text-[#25D366] hover:border-[#25D366] transition-all duration-500 overflow-visible">
                <div className="social-3d-loop text-[#25D366]">
                  <MessageCircle size={22} strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-[#1A1A1A] font-semibold tracking-widest group-hover:text-[#25D366] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>WhatsApp Us</p>
            </a>

            {/* Gmail */}
            <a href="mailto:viaanrealityindia@gmail.com" className="social-group flex items-center gap-5 w-max cursor-pointer">
              <div className="w-14 h-14 rounded-full border border-black/10 bg-white shadow-sm flex items-center justify-center text-[#EA4335] hover:border-[#EA4335] transition-all duration-500 overflow-visible">
                <div className="social-3d-loop text-[#EA4335]">
                  <Mail size={22} strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-[#1A1A1A] font-semibold tracking-wider group-hover:text-[#EA4335] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email Concierge</p>
            </a>

            {/* Instagram using custom SVG */}
            <a href="https://instagram.com/viaanrealty" target="_blank" rel="noreferrer" className="social-group flex items-center gap-5 w-max cursor-pointer">
              <div className="w-14 h-14 rounded-full border border-black/10 bg-white shadow-sm flex items-center justify-center text-[#E1306C] hover:border-[#E1306C] transition-all duration-500 overflow-visible">
                <div className="social-3d-loop text-[#E1306C]">
                  <InstagramIcon size={22} strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-[#1A1A1A] font-semibold tracking-widest group-hover:text-[#E1306C] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>@ViaanRealty</p>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: OFFICE LOCATION & MAP                          */}
      {/* ========================================================= */}
      <div className="contact-anim">
        <OfficeLocationSection />
      </div>

    </main>
  );
}