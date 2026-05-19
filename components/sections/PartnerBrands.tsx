"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { id: 1, src: "/companylogo/logo1.png" },
  { id: 2, src: "/companylogo/logo2.jpeg" }, 
  { id: 3, src: "/companylogo/logo3.png" },
  { id: 4, src: "/companylogo/logo4.jpeg" },
  { id: 5, src: "/companylogo/logo5.png" },
  { id: 6, src: "/companylogo/logo6.png" },
  { id: 7, src: "/companylogo/logo7.jpeg" },
  { id: 8, src: "/companylogo/logo8.jpeg" },
  { id: 9, src: "/companylogo/logo9.jpeg" },
  { id: 10, src: "/companylogo/logo10.jpeg" },
  { id: 11, src: "/companylogo/logo11.jpeg" },
];

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

  const rowOneItems = partners.slice(0, 6);
  const rowTwoItems = partners.slice(6);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[#F7F3EE] overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 partner-animate">
          {/* CHANGED TO MONTSERRAT */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 font-light text-sm max-w-md mx-auto uppercase tracking-widest mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Collaborating with industry leaders
          </p>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .marquee-wrapper { display: flex; flex-direction: column; gap: 2rem; width: 100%; overflow: hidden; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
          .marquee-container { display: flex; width: max-content; gap: 4rem; }
          .marquee-content { display: flex; align-items: center; justify-content: space-around; gap: 4rem; animation: scroll-left 30s linear infinite; }
          .marquee-content.reverse { animation: scroll-right 30s linear infinite; }
          
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
          <div className="marquee-container">
            {[1, 2].map((iteration) => (
              <div key={iteration} className="marquee-content reverse" aria-hidden={iteration === 2}>
                {rowTwoItems.map((partner) => (
                  <div key={`${iteration}-${partner.id}`} className="relative w-32 h-20 md:w-40 md:h-24 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer shine-effect bg-white border border-black/5 p-4 flex items-center justify-center">
                    <Image src={partner.src} alt={`Partner ${partner.id}`} fill className="object-contain p-2" sizes="160px" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="marquee-container">
            {[1, 2].map((iteration) => (
              <div key={iteration} className="marquee-content" aria-hidden={iteration === 2}>
                {rowOneItems.map((partner) => (
                  <div key={`${iteration}-${partner.id}`} className="relative w-32 h-20 md:w-40 md:h-24 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer shine-effect bg-white border border-black/5 p-4 flex items-center justify-center">
                    <Image src={partner.src} alt={`Partner ${partner.id}`} fill className="object-contain p-2" sizes="160px" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}