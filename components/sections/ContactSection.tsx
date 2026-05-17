"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aura-animate",
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 1.2, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      // Keeps the perfect single-screen fit you liked!
      className="relative min-h-screen lg:h-screen w-full bg-[#F7F3EE] flex items-center justify-center overflow-hidden py-20 px-6 md:px-12 border-t border-[#C7A26A]/20"
    >
      
      {/* Subtle Texture Overlay for Cream Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply pointer-events-none">
        <Image src="/images/about-hero.jpg" alt="Texture" fill sizes="100vw" className="object-cover blur-md" />
      </div>

      {/* Soft Ambient White Glow behind the form for that premium "Aura" */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

      <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
        
        {/* LEFT SIDE: Big Typography (Now in Dark Charcoal & Gold) */}
        <div className="w-full lg:w-5/12 flex flex-col aura-animate">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#C7A26A]"></div>
            <span className="text-[#C7A26A] tracking-[0.4em] uppercase text-[10px] font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Secure Your Legacy</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1] mb-4" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            LET'S FIND <br/> YOUR
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#C7A26A] italic font-light mb-8 drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            Perfect Property
          </h2>
          
          <p className="text-gray-600 font-light text-sm leading-relaxed mb-10 max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
            Connect with VIAAN Realty for trusted real-estate guidance and premium property solutions across Pune. Absolute discretion guaranteed.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5 group cursor-pointer w-max">
              <div className="w-12 h-12 rounded-full border border-black/10 bg-white/50 flex items-center justify-center text-[#C7A26A] group-hover:bg-[#C7A26A] group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone size={16} />
              </div>
              <p className="text-[#1A1A1A] font-semibold tracking-widest group-hover:text-[#C7A26A] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>+91 98905 48878</p>
            </div>
            <div className="flex items-center gap-5 group cursor-pointer w-max">
              <div className="w-12 h-12 rounded-full border border-black/10 bg-white/50 flex items-center justify-center text-[#C7A26A] group-hover:bg-[#C7A26A] group-hover:text-white transition-all duration-300 shadow-sm">
                <Mail size={16} />
              </div>
              <p className="text-[#1A1A1A] font-semibold tracking-wider group-hover:text-[#C7A26A] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>Viaanrealityindia@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Minimalist Form on Frosted White Glass */}
        <div className="w-full lg:w-7/12 aura-animate">
          <div className="bg-white/60 backdrop-blur-3xl border border-white p-8 md:p-12 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] relative overflow-hidden group">
            
            {/* Sweeping shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
              
              <div className="col-span-1 md:col-span-2">
                <input type="text" className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] placeholder:text-black/30 focus:border-[#C7A26A] transition-colors font-medium text-sm" placeholder="Full Name" style={{ fontFamily: "'Inter', sans-serif" }} />
              </div>

              <div className="col-span-1">
                <input type="tel" className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] placeholder:text-black/30 focus:border-[#C7A26A] transition-colors font-medium text-sm" placeholder="Phone Number" style={{ fontFamily: "'Inter', sans-serif" }} />
              </div>

              <div className="col-span-1">
                <input type="email" className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] placeholder:text-black/30 focus:border-[#C7A26A] transition-colors font-medium text-sm" placeholder="Email Address" style={{ fontFamily: "'Inter', sans-serif" }} />
              </div>

              <div className="col-span-1">
                <select defaultValue="" className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] focus:border-[#C7A26A] transition-colors font-medium text-sm appearance-none cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <option value="" disabled className="text-gray-400">Select Property Type</option>
                  <option value="Apartment">Luxury Apartment</option>
                  <option value="Villa">Villa / Row House</option>
                  <option value="Commercial">Commercial Space</option>
                  <option value="Plot">Premium Plot</option>
                </select>
              </div>

              <div className="col-span-1">
                <input type="text" className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] placeholder:text-black/30 focus:border-[#C7A26A] transition-colors font-medium text-sm" placeholder="Preferred Location (e.g. Baner)" style={{ fontFamily: "'Inter', sans-serif" }} />
              </div>

              <div className="col-span-1 md:col-span-2">
                <textarea rows={3} className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] placeholder:text-black/30 focus:border-[#C7A26A] transition-colors font-medium text-sm resize-none" placeholder="How can we assist you?" style={{ fontFamily: "'Inter', sans-serif" }}></textarea>
              </div>

              <div className="col-span-1 md:col-span-2 mt-4">
                <button type="button" className="w-full py-5 bg-[#1A1A1A] hover:bg-[#C7A26A] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-xl transition-all duration-500 flex items-center justify-center gap-3 shadow-xl group/btn">
                  <span>Send Inquiry</span>
                  <ArrowRight size={16} className="transform group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}