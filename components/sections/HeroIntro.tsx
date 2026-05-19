"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Building2, Store, Home, Map } from "lucide-react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const taglineChars = "Where Dreams Meet Reality".split(""); 
const loopingProperties = ["Apartments", "Villas", "Commercial Spaces", "Plots"];

export default function HeroIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propertyLoopRef = useRef<HTMLSpanElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null); 
  
  const frameCount = 103; 

  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context || !containerRef.current || !loaderRef.current) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    const ctx = gsap.context(() => {}, containerRef);

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const index = i.toString().padStart(3, "0");
      img.src = `/intro-frames/ezgif-frame-${index}.jpg`; 

      const handleLoadComplete = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          if (!isMounted) return;
          gsap.to(loaderRef.current, {
            opacity: 0, duration: 1, pointerEvents: "none",
            onComplete: () => {
              if (!isMounted) return;
              renderFrame(1); 
              initializeAnimations(); 
            }
          });
        }
      };
      img.onload = handleLoadComplete;
      img.onerror = handleLoadComplete; 
      images.push(img);
    }

    const renderFrame = (index: number) => {
      if (images[index - 1]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        const img = images[index - 1];
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    const initializeAnimations = () => {
      ctx.add(() => {
        
        const playhead = { frame: 1 };
        
        const bgAnimation = gsap.to(playhead, {
          frame: frameCount,
          snap: "frame",
          ease: "none",
          duration: 5, 
          repeat: -1, 
          onUpdate: () => renderFrame(playhead.frame),
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top bottom", 
          end: "bottom top",   
          onEnter: () => bgAnimation.play(),
          onLeave: () => bgAnimation.pause(),
          onEnterBack: () => bgAnimation.play(),
          onLeaveBack: () => bgAnimation.pause(),
        });

        const introTl = gsap.timeline();
        introTl.fromTo(".title-reveal",
          { clipPath: "inset(-20% 100% -20% -10%)", filter: "blur(12px)", scale: 1.05 },
          { clipPath: "inset(-20% -10% -20% -10%)", filter: "blur(0px)", scale: 1, duration: 1.8, ease: "power3.inOut" }
        )
        .fromTo(".char-tagline", 
          { opacity: 0, y: 15, filter: "blur(8px)" }, 
          { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.04, duration: 1, ease: "power2.out" },
          "+=0.2"
        )
        .fromTo(".animated-sentence-static", 
          { opacity: 0, y: 20, filter: "blur(6px)" }, 
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" },
          "+=0.2"
        )
        .fromTo(".static-categories",
          { opacity: 0, y: 30, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power2.out" },
          "+=0.2"
        );

        if (propertyLoopRef.current) {
          const propertyItems = propertyLoopRef.current.querySelectorAll('.dynamic-property');
          if(propertyItems.length >= 2) {
            const loopTl = gsap.timeline({ repeat: -1 });
            propertyItems.forEach((item) => {
                loopTl
                .set(item, { display: "inline-block" }) 
                .fromTo(item, { opacity: 0, filter: "blur(10px)", y: 15 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.2, ease: "power3.out" })
                .to(item, { opacity: 1, duration: 2.5 }) 
                .to(item, { opacity: 0, filter: "blur(10px)", y: -15, duration: 1, ease: "power3.in" })
                .set(item, { display: "none" }); 
            });
          }
        }
      });
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(1);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      ctx.revert(); 
    };
  }, []);

  return (
    <>
      <div ref={loaderRef} className="fixed inset-0 z-50 flex items-center justify-center bg-[#F7F3EE]">
        <p className="text-2xl md:text-3xl font-serif animate-pulse text-[#2C2C2C] tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Loading Cinematic Experience...
        </p>
      </div>

      <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center">
        
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-10 flex flex-col items-center justify-center text-center mt-[-4vh]">
          
          {/* CHANGED: 
            1. Font family is back to 'Montserrat'.
            2. Added 'uppercase' and 'tracking-[0.2em]' (letter spacing) back for that premium luxury look.
            3. Changed text to ALL CAPS.
          */}
          <h1 className="title-reveal text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-none text-white pb-2 cursor-default font-bold uppercase tracking-[0.2em] w-full drop-shadow-md" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            VIAAN REALTY
          </h1>
          
          <div className="w-20 h-[1px] bg-[#C7A26A] my-5 drop-shadow-[0_0_8px_rgba(199,162,106,0.8)]"></div>
          
          <p className="text-white flex flex-wrap justify-center overflow-hidden drop-shadow-xl">
            {taglineChars.map((char, i) => (
              <span key={i} className="char-tagline opacity-0 text-xl md:text-3xl font-light text-[#fcfcfc] tracking-wider" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>

          <div className="animated-sentence-static opacity-0 text-xs md:text-sm text-white font-medium tracking-[0.2em] uppercase flex items-center justify-center mt-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <span>Looking For</span>
            <span ref={propertyLoopRef} className="flex items-center justify-center mx-3 md:mx-4 text-[#FDE08B] font-bold drop-shadow-[0_0_15px_rgba(253,224,139,0.9)]">
              {loopingProperties.map((prop, i) => (
                <span key={i} className="dynamic-property hidden whitespace-nowrap">{prop}</span>
              ))}
            </span>
            <span>In Pune</span>
          </div>

          <p className="animated-sentence-static opacity-0 text-[#FDE08B] text-[10px] md:text-xs tracking-[0.25em] uppercase font-semibold mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            No Brokerage | Strong Negotiations
          </p>

          <div className="static-categories opacity-0 flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
            {[
              { name: "Apartment", icon: Building2 },
              { name: "Commercial", icon: Store },
              { name: "Villa", icon: Home },
              { name: "Plot", icon: Map }
            ].map((cat, index) => (
              <div key={index} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white text-[10px] md:text-xs tracking-wider uppercase font-semibold cursor-default" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <cat.icon size={16} className="text-[#C7A26A]" />
                {cat.name}
              </div>
            ))}
          </div>

        </div>

        <div className="absolute bottom-6 left-0 right-0 mx-auto flex flex-col items-center justify-center text-white/80 gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase drop-shadow-md" style={{ fontFamily: "'Montserrat', sans-serif" }}>Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#FDE08B] drop-shadow-lg" />
        </div>
      </section>
    </>
  );
}