"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import HeroSearchBar from "./HeroSearchBar"; 

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

    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,600&family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

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
            opacity: 0,
            duration: 1,
            pointerEvents: "none",
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
        
        // ==========================================
        // 1. SCROLL TIMELINE (Background Only)
        // ==========================================
        const playhead = { frame: 1 };
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=3000", 
            scrub: 1,      
            pin: true,     
          }
        });

        scrollTl.to(playhead, {
          frame: frameCount,
          snap: "frame",
          ease: "none",
          duration: 100, 
          onUpdate: () => renderFrame(playhead.frame),
        }, 0); 

        // Hide scroll indicator as they scroll down
        scrollTl.to(".scroll-indicator", { opacity: 0, duration: 5 }, 2);


        // ==========================================
        // 2. AUTO-PLAY INTRO TIMELINE (Text & UI)
        // Completely independent of the scroll!
        // ==========================================
        const introTl = gsap.timeline();

        // 1st: VIAAN REALTY slides in and unblurs
        introTl.fromTo(
          ".title-reveal",
          { clipPath: "inset(-20% 100% -20% -10%)", filter: "blur(12px)", scale: 1.05 },
          { clipPath: "inset(-20% -10% -20% -10%)", filter: "blur(0px)", scale: 1, duration: 1.8, ease: "power3.inOut" }
        )
        // 2nd: Tagline characters fade in
        .fromTo(
          ".char-tagline", 
          { opacity: 0, y: 15, filter: "blur(8px)" }, 
          { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.04, duration: 1, ease: "power2.out" },
          "+=0.3" // Waits a moment after the title
        )
        // 3rd: "Looking for..." fades in
        .fromTo(
          ".animated-sentence-static", 
          { opacity: 0, y: 20, filter: "blur(6px)" }, 
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" },
          "+=0.4" // Waits a moment after the tagline
        )
        // 4th: The massive search widget fades in
        .fromTo(
          ".search-widget",
          { opacity: 0, y: 30, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power2.out" },
          "+=0.4" // Waits a moment after the looking for sentence
        );


        // ==========================================
        // 3. PROPERTY LOOP ANIMATION
        // ==========================================
        if (propertyLoopRef.current) {
          const propertyItems = propertyLoopRef.current.querySelectorAll('.dynamic-property');
          if(propertyItems.length >= 2) {
            const loopTl = gsap.timeline({ repeat: -1 });
            propertyItems.forEach((item) => {
                loopTl
                .set(item, { display: "inline-block" }) 
                .fromTo(
                    item, 
                    { opacity: 0, filter: "blur(10px)", y: 15 }, 
                    { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.2, ease: "power3.out" }
                )
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
      <style>{`
        .glass-sweep-hover { position: relative; overflow: hidden; display: inline-block; }
        .glass-sweep-hover::after {
          content: ''; position: absolute; top: 0; left: -150%; width: 50%; height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg); z-index: 10; pointer-events: none;
        }
        .glass-sweep-hover:hover::after { animation: glass-sweep 0.7s ease-in-out forwards; }
        @keyframes glass-sweep { 0% { left: -150%; } 100% { left: 150%; } }
        
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #C7A26A; border-radius: 10px; }
      `}</style>

      <div ref={loaderRef} className="fixed inset-0 z-50 flex items-center justify-center bg-[#F7F3EE]">
        <p className="text-2xl md:text-3xl font-serif animate-pulse text-[#2C2C2C] tracking-widest" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
          Loading Cinematic Experience...
        </p>
      </div>

      <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center">
        
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-10 flex flex-col items-center justify-center text-center mt-[-4vh]">
          
          <h1 className="title-reveal glass-sweep-hover text-5xl md:text-[6rem] leading-none text-white tracking-wider pb-2 pr-4 cursor-default font-bold uppercase" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            VIAAN REALTY
          </h1>
          
          <div className="w-20 h-[1px] bg-[#C7A26A] my-5 drop-shadow-[0_0_8px_rgba(199,162,106,0.8)]"></div>
          
          <p className="text-white flex flex-wrap justify-center overflow-hidden drop-shadow-xl">
            {taglineChars.map((char, i) => (
              <span key={i} className="char-tagline opacity-0 text-2xl md:text-3xl font-light text-[#fcfcfc] tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
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

          <HeroSearchBar />

        </div>

        <div className="scroll-indicator absolute bottom-4 left-0 right-0 mx-auto flex flex-col items-center justify-center text-white/80 gap-2">
          <span className="text-xs tracking-[0.3em] uppercase drop-shadow-md" style={{ fontFamily: "'Montserrat', sans-serif" }}>Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce text-[#FDE08B] drop-shadow-lg" />
        </div>
      </section>
    </>
  );
}