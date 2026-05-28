"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-anim",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id="contact" ref={sectionRef} className="bg-[#F7F3EE]">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-spin {
          0% { transform: perspective(1000px) translateY(0) rotateY(0deg); }
          50% { transform: perspective(1000px) translateY(-6px) rotateY(180deg); }
          100% { transform: perspective(1000px) translateY(0) rotateY(360deg); }
        }
        .social-3d-loop { animation: float-spin 6s ease-in-out infinite; transform-style: preserve-3d; display: inline-block; }
        .social-group:hover .social-3d-loop { animation-duration: 1.5s; }
      `}} />

      <section className="relative min-h-screen lg:h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C7A26A] rounded-full blur-[150px] opacity-15 pointer-events-none"></div>

        <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
          
          <div className="w-full lg:w-5/12 flex flex-col contact-anim">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#C7A26A]"></div>
              <span className="text-[#C7A26A] tracking-[0.4em] uppercase text-[10px] font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Inquire Now</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.2] mb-2 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              LET'S FIND <br className="hidden lg:block"/> YOUR
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#C7A26A] mb-8 uppercase tracking-widest drop-shadow-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              PERFECT PROPERTY
            </h1>
            
            <p className="text-gray-600 font-light text-sm leading-relaxed max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
              Connect with VIAAN Realty for trusted real-estate guidance and premium property solutions across Pune. Absolute discretion guaranteed.
            </p>
          </div>

          <div className="w-full lg:w-7/12 contact-anim">
            <div className="bg-white border border-black/5 p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_80px_rgba(199,162,106,0.1)] transform hover:-translate-y-2 transition-all duration-700 ease-out text-left relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-[#C7A26A]/5 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                <div className="col-span-1 md:col-span-2">
                  <input type="text" className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] placeholder:text-gray-400 focus:border-[#C7A26A] transition-colors font-medium text-sm" placeholder="Full Name" style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div className="col-span-1">
                  <input type="tel" className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] placeholder:text-gray-400 focus:border-[#C7A26A] transition-colors font-medium text-sm" placeholder="Phone Number" style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div className="col-span-1">
                  <input type="email" className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] placeholder:text-gray-400 focus:border-[#C7A26A] transition-colors font-medium text-sm" placeholder="Email Address" style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div className="col-span-1">
                  <select defaultValue="" className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] focus:border-[#C7A26A] transition-colors font-medium text-sm cursor-pointer appearance-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <option value="" disabled className="text-gray-400">Select Property Type</option>
                    <option value="Apartment">Luxury Apartment</option>
                    <option value="Villa">Villa / Row House</option>
                    <option value="Commercial">Commercial Space</option>
                    <option value="Plot">Premium Plot</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <input type="text" className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] placeholder:text-gray-400 focus:border-[#C7A26A] transition-colors font-medium text-sm" placeholder="Preferred Location" style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <textarea rows={3} className="w-full bg-transparent border-b border-black/20 pb-3 outline-none text-[#1A1A1A] placeholder:text-gray-400 focus:border-[#C7A26A] transition-colors font-medium text-sm resize-none" placeholder="How can we assist you?" style={{ fontFamily: "'Inter', sans-serif" }}></textarea>
                </div>
                <div className="col-span-1 md:col-span-2 mt-2">
                  <button type="button" className="w-full py-4 bg-[#1A1A1A] hover:bg-[#C7A26A] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-xl flex items-center justify-center gap-3 group/btn shadow-xl transition-all duration-500">
                    <span>Send Inquiry</span><ArrowRight size={16} className="transform group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      <section className="relative py-24 px-6 md:px-12 pb-32 flex flex-col items-center text-center">
        <div className="max-w-[1000px] mx-auto relative z-10 contact-anim flex flex-col items-center">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CONNECT WITH US
          </h2>
          <p className="text-gray-600 font-light text-sm max-w-md mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Reach out via our direct channels below, or submit an inquiry for a callback.
          </p>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <a href="https://wa.me/919890548878" target="_blank" rel="noreferrer" className="social-group flex flex-col items-center gap-4 cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-black/10 bg-white shadow-sm flex items-center justify-center text-[#25D366] hover:border-[#25D366] transition-all duration-500">
                <div className="social-3d-loop"><MessageCircle size={26} strokeWidth={1.5} /></div>
              </div>
              <p className="text-[#1A1A1A] font-semibold tracking-widest text-sm uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>WhatsApp</p>
            </a>
            <a href="mailto:viaanrealityindia@gmail.com" className="social-group flex flex-col items-center gap-4 cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-black/10 bg-white shadow-sm flex items-center justify-center text-[#EA4335] hover:border-[#EA4335] transition-all duration-500">
                <div className="social-3d-loop"><Mail size={26} strokeWidth={1.5} /></div>
              </div>
              <p className="text-[#1A1A1A] font-semibold tracking-wider text-sm uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}