"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  const isAboutPage = pathname === "/about";

  useEffect(() => {
    if (isAboutPage) return; 

    const handleScroll = () => {
      if (window.scrollY > 3100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAboutPage]);

  const positionClass = isAboutPage 
    ? "absolute top-6" 
    : `fixed transition-all duration-700 ease-in-out ${isVisible ? "top-6 translate-y-0 opacity-100" : "-top-10 -translate-y-full opacity-0 pointer-events-none"}`;

  return (
    <header className={`left-0 right-0 z-50 mx-auto w-[95%] max-w-[1400px] ${positionClass}`}>
      <div className="w-full rounded-full flex items-center justify-between px-6 md:px-10 py-3 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <div className="relative w-9 h-9 md:w-11 md:h-11">
            <Image src="/logo/logo.png" alt="VIAAN Realty" fill sizes="44px" className="object-contain drop-shadow-md brightness-0 invert" priority />
          </div>
          {/* FIXED: Unified the text to perfectly match the Hero section font and casing */}
          <h1 className="hidden md:block text-xl text-white drop-shadow-md font-bold tracking-widest uppercase" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            VIAAN REALTY
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-[14px] text-white font-medium drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          
          <Link href="/#locations" className="relative group px-1 py-1 overflow-hidden flex flex-col items-center">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#C7A26A]">Locations</span>
            <span className="absolute bottom-1 w-0 h-[1px] bg-[#C7A26A] transition-all duration-500 ease-out group-hover:w-full"></span>
          </Link>
          
          <Link href="/about" className="relative group px-1 py-1 overflow-hidden flex flex-col items-center">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#C7A26A]">About Us</span>
            <span className="absolute bottom-1 w-0 h-[1px] bg-[#C7A26A] transition-all duration-500 ease-out group-hover:w-full"></span>
          </Link>

        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <a href="/#contact" className="px-6 py-2.5 rounded-full text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-300 border border-[#C7A26A]/50 bg-transparent text-white hover:bg-[#C7A26A] hover:text-black hover:border-[#C7A26A] shrink-0" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            Contact Us
          </a>
        </div>

      </div>
    </header>
  );
}