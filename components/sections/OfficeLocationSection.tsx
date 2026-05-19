"use client";
import React from "react";
import { MapPin, Phone, Mail, BadgeCheck, MessageCircle } from "lucide-react";

const InstagramIcon = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function OfficeLocationSection() {
  return (
    <section className="bg-[#050505] py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-[#C7A26A]"></div>
          <span className="text-[#C7A26A] tracking-[0.3em] uppercase text-xs font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Headquarters</span>
        </div>
        
        {/* CHANGED TO MONTSERRAT */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          VISIT OUR OFFICE
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
          <div className="w-full lg:w-5/12 bg-[#F7F3EE] p-8 md:p-12 rounded-3xl flex flex-col justify-center">
            
            {/* CHANGED TO MONTSERRAT */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              VIAAN REALTY
            </h3>
            
            <div className="inline-flex items-center gap-3 bg-black/5 border border-black/10 px-4 py-2 rounded-full mb-10 w-max">
              <BadgeCheck size={16} className="text-[#1A1A1A]" />
              <span className="text-[#1A1A1A] text-[10px] font-bold tracking-widest uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                RERA: A031262601341
              </span>
            </div>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1"><MapPin size={18} className="text-[#1A1A1A]" /></div>
                <div>
                  <h4 className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Location</h4>
                  <p className="text-[#1A1A1A] font-medium text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Office Number 222, Vardhaman Moonstone,<br/>
                    Sr No 99, Opp. JSPM College,<br/>
                    Tathawade, Pune, Maharashtra – 411033
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1"><Phone size={18} className="text-[#1A1A1A]" /></div>
                <div>
                  <h4 className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Phone</h4>
                  <p className="text-[#1A1A1A] font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    +91 98905 48878
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1"><Mail size={18} className="text-[#1A1A1A]" /></div>
                <div>
                  <h4 className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email</h4>
                  <p className="text-[#1A1A1A] font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    viaanrealityindia@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://wa.me/919890548878" target="_blank" rel="noreferrer" className="flex-1 bg-[#1A1A1A] hover:bg-[#25D366] text-white py-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300">
                <MessageCircle size={18} />
                <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>WhatsApp Us</span>
              </a>
              <a href="https://instagram.com/viaanrealty" target="_blank" rel="noreferrer" className="w-14 h-14 bg-black/5 hover:bg-[#E1306C] hover:text-white rounded-xl flex items-center justify-center transition-colors duration-300 text-[#1A1A1A]">
                <InstagramIcon size={20} /> 
              </a>
            </div>
          </div>

          <div className="w-full lg:w-7/12 h-[400px] lg:h-auto min-h-[450px] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.332306899435!2d73.7495039760432!3d18.604118882505517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb005080b0bb%3A0x6b453965554f6764!2sVardhaman%20Moonstone!5e0!3m2!1sen!2sin!4v1716281781293!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}