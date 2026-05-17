"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Content Fade In (Slides up gently)
      gsap.fromTo(
        textRef.current?.children ? Array.from(textRef.current.children) : [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // 2. Image Reveal (Slight zoom and fade)
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // 3. Stats Stagger
      gsap.fromTo(
        statsRef.current?.children ? Array.from(statsRef.current.children) : [],
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-[#050505] text-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: The Brand Story */}
        <div ref={textRef} className="w-full lg:w-1/2 flex flex-col items-start">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#C7A26A]"></div>
            <span className="text-[#C7A26A] tracking-[0.3em] uppercase text-xs font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Our Philosophy
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Redefining <br/>
            <span className="text-[#C7A26A] italic font-light" style={{ fontFamily: "'Playfair Display', serif" }}>Luxury Living</span> <br/>
            in Pune.
          </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            At VIAAN Realty, we don't just sell square footage; we curate lifestyles. With a deep understanding of Pune's most exclusive neighborhoods, our firm is built on a foundation of uncompromising integrity, absolute discretion, and a relentless pursuit of perfection. 
          </p>

          {/* Golden Milestone Stats */}
          <div ref={statsRef} className="flex flex-wrap gap-10 md:gap-16 border-t border-white/10 pt-10 w-full">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-[#FDE08B] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>15+</span>
              <span className="text-white/50 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Years of Excellence</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-[#FDE08B] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>₹2K<span className="text-2xl">Cr+</span></span>
              <span className="text-white/50 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Sales Volume</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-[#FDE08B] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>200+</span>
              <span className="text-white/50 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Curated Estates</span>
            </div>
          </div>

        </div>

        {/* Right Side: Cinematic Image */}
        <div ref={imageRef} className="w-full lg:w-1/2 relative h-[500px] md:h-[700px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {/* A luxurious architectural staircase/interior shot */}
          <Image 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80" 
            alt="VIAAN Realty Luxury Interior" 
            fill 
            className="object-cover"
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
          
          {/* Floating Gold Accent */}
          <div className="absolute bottom-10 left-10 border-l-2 border-[#C7A26A] pl-6 backdrop-blur-md bg-black/20 p-4 rounded-r-lg">
            <p className="text-white/90 text-sm md:text-base font-light italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              "Excellence is not an act, <br/> but a habit."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}