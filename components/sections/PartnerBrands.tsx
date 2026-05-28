"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// ROW 1 (9 Brands based exactly on your screenshot)
const rowOneItems = [
  { id: "godrej", name: "Godrej", src: "/companylogo/Godrej.jpeg" },
  { id: "lodha", name: "Lodha", src: "/companylogo/Lodha.jpeg" },
  { id: "hiranandani", name: "Hiranandani", src: "/companylogo/Hiranandani.jpeg" },
  { id: "kasturi", name: "Kasturi", src: "/companylogo/Kasturi.jpeg" },
  { id: "krisala", name: "Krisala", src: "/companylogo/Krisala.png" },
  { id: "kumar", name: "Kumar", src: "/companylogo/Kumar.png" },
  { id: "mahindra", name: "Mahindra", src: "/companylogo/Mahindra.png" },
  { id: "shapoorji", name: "Shapoorji", src: "/companylogo/Shapoorji.png" },
  { id: "jhamtani", name: "Jhamtani", src: "/companylogo/Jhamtani.png" },
];

// ROW 2 (9 Brands based exactly on your screenshot)
const rowTwoItems = [
  { id: "kohinoor", name: "Kohinoor", src: "/companylogo/Kohinoor.jpeg" },
  { id: "kolte_patil", name: "Kolte Patil", src: "/companylogo/Kolte Patil.jpeg" },
  { id: "rohan", name: "Rohan", src: "/companylogo/Rohan.jpeg" },
  { id: "gera", name: "Gera", src: "/companylogo/Gera.jpeg" },
  { id: "majestique", name: "Majestique", src: "/companylogo/Majestique.jpeg" },
  { id: "mantra", name: "Mantra", src: "/companylogo/Mantra.png" },
  { id: "nyati", name: "Nyati", src: "/companylogo/Nyati.png" },
  { id: "saheel", name: "Saheel", src: "/companylogo/Saheel.png" },
  { id: "vtp", name: "VTP", src: "/companylogo/VTP.png" },
];

// CRASH-SAFE COMPONENT: Prevents your whole site from crashing if an image extension is slightly off
const BrandLogo = ({ partner }: { partner: { id: string; name: string; src: string } }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-32 h-20 md:w-40 md:h-24 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer shine-effect bg-white border border-black/5 p-4 flex items-center justify-center">
      {hasError ? (
        <span className="text-[10px] md:text-xs font-bold text-[#1A1A1A]/40 uppercase tracking-widest text-center select-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {partner.name}
        </span>
      ) : (
        <Image 
          src={partner.src} 
          alt={partner.name} 
          fill 
          className="object-contain p-2" 
          sizes="160px" 
          onError={() => setHasError(true)} 
        />
      )}
    </div>
  );
};

export default function PartnerBrands() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".partner-animate",
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 1.2, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[#F7F3EE] overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 partner-animate">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 font-light text-sm max-w-md mx-auto uppercase tracking-widest mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Collaborating with industry leaders
          </p>
        </div>

        {/* CHANGED: Animation duration reduced from 30s to 20s to make it slightly faster */}
        <style dangerouslySetInnerHTML={{__html: `
          .marquee-wrapper { display: flex; flex-direction: column; gap: 2rem; width: 100%; overflow: hidden; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
          .marquee-container { display: flex; width: max-content; gap: 4rem; }
          .marquee-content { display: flex; align-items: center; justify-content: space-around; gap: 4rem; animation: scroll-left 20s linear infinite; }
          .marquee-content.reverse { animation: scroll-right 20s linear infinite; }
          
          .marquee-container:hover .marquee-content { animation-play-state: paused; }
          
          @keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @keyframes scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }

          .shine-effect { position: relative; overflow: hidden; border-radius: 12px; }
          .shine-effect::after {
            content: ''; position: absolute; top: 0; left: -150%; width: 50%; height: 100%;
            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
            transform: skewX(-25deg); transition: 0s; pointer-events: none; z-index: 10;
          }
          .shine-effect:hover::after { left: 200%; transition: 0.8s ease-in-out; }
        `}} />

        <div className="marquee-wrapper partner-animate">
          
          {/* ROW 1: Scrolling Left */}
          <div className="marquee-container">
            {[1, 2].map((iteration) => (
              <div key={iteration} className="marquee-content" aria-hidden={iteration === 2}>
                {rowOneItems.map((partner, idx) => (
                  <BrandLogo key={`row1-${iteration}-${partner.id}-${idx}`} partner={partner} />
                ))}
              </div>
            ))}
          </div>

          {/* ROW 2: Scrolling Right (Reverse) */}
          <div className="marquee-container">
            {[1, 2].map((iteration) => (
              <div key={iteration} className="marquee-content reverse" aria-hidden={iteration === 2}>
                {rowTwoItems.map((partner, idx) => (
                  <BrandLogo key={`row2-${iteration}-${partner.id}-${idx}`} partner={partner} />
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}