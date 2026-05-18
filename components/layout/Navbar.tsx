"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isStaticPage = pathname === "/about" || pathname === "/coming-soon";

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isStaticPage) return; 
    const handleScroll = () => {
      if (isMobileMenuOpen) return;
      if (window.scrollY > 3100) setIsVisible(false);
      else setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isStaticPage, isMobileMenuOpen]);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  const positionClass = isStaticPage 
    ? "absolute top-6" 
    : `fixed transition-all duration-700 ease-in-out ${isVisible ? "top-6 translate-y-0 opacity-100" : "-top-10 -translate-y-full opacity-0 pointer-events-none"}`;

  return (
    <>
      <header className={`left-0 right-0 z-50 mx-auto w-[95%] max-w-[1400px] ${positionClass}`}>
        <div className="w-full rounded-full flex items-center justify-between px-6 md:px-10 py-3 bg-[#050505]/60 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative z-50">
          
          <Link href="/" className="flex items-center gap-4 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative w-9 h-9 md:w-11 md:h-11">
              <Image src="/logo/logo.png" alt="VIAAN Realty" fill sizes="44px" className="object-contain drop-shadow-md brightness-0 invert" priority />
            </div>
            {/* NEW CLEAN FONT: Montserrat */}
            <h1 className="text-lg md:text-xl text-white drop-shadow-md font-bold tracking-widest uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              VIAAN REALTY
            </h1>
          </Link>

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

          {/* NOW SCROLLS TO #contact ON HOME PAGE */}
          <div className="hidden lg:flex items-center">
            <Link href="/#contact" className="px-6 py-2.5 rounded-full text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-300 border border-[#C7A26A]/50 bg-transparent text-white hover:bg-[#C7A26A] hover:text-black hover:border-[#C7A26A] shrink-0" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              Contact Us
            </Link>
          </div>

          <button className="lg:hidden text-white hover:text-[#C7A26A] transition-colors p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-3xl flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
        <nav className="flex flex-col items-center gap-8 text-center">
          <Link href="/" className="text-3xl font-light text-white hover:text-[#C7A26A] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/#locations" className="text-3xl font-light text-white hover:text-[#C7A26A] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }} onClick={() => setIsMobileMenuOpen(false)}>Locations</Link>
          <Link href="/about" className="text-3xl font-light text-white hover:text-[#C7A26A] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <div className="w-12 h-[1px] bg-[#C7A26A]/30 my-4"></div>
          <Link href="/#contact" className="px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-300 border border-[#C7A26A] bg-[#C7A26A] text-black font-bold shadow-[0_0_20px_rgba(199,162,106,0.2)]" style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={() => setIsMobileMenuOpen(false)}>
            Contact Concierge
          </Link>
        </nav>
      </div>
    </>
  );
}