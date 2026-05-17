import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"; // Removed Instagram!

export default function Footer() {
  const whatsappUrl = "https://wa.me/919890548878";

  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-8 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10">
                <Image src="/logo/logo.png" alt="VIAAN Logo" fill className="object-contain brightness-0 invert" />
              </div>
              <h2 className="text-xl font-bold tracking-widest text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                VIAAN <span className="font-light italic">Realty</span>
              </h2>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-light mb-6 pr-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Curating luxury lifestyles in Pune's most exclusive neighborhoods. Built on integrity, discretion, and absolute perfection.
            </p>
            <div className="inline-block border border-white/10 rounded-lg px-4 py-2">
              <span className="text-[#C7A26A] text-[10px] tracking-widest uppercase font-bold block mb-1">RERA Registered</span>
              <span className="text-white/80 text-xs font-mono">A031262601341</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>Exploration</h3>
            <ul className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              {["Home", "About Us", "Featured Properties", "Locations", "Contact"].map((item, i) => (
                <li key={i}>
                  <Link href={item === "Home" ? "/" : item === "About Us" ? "/about" : `#${item.toLowerCase().replace(" ", "-")}`} className="text-white/60 hover:text-[#C7A26A] text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#C7A26A] transition-all duration-300 group-hover:w-4"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>Headquarters</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-white/60 text-sm font-light">
                <MapPin size={16} className="text-[#C7A26A] mt-1 shrink-0" />
                <span className="leading-relaxed">Office 222, Vardhaman Moonstone,<br/>Tathawade, Pune - 411033</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm font-light">
                <Phone size={16} className="text-[#C7A26A] shrink-0" />
                <span>+91 98905 48878</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm font-light">
                <Mail size={16} className="text-[#C7A26A] shrink-0" />
                <span>Viaanrealityindia@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>Connect</h3>
            <div className="flex items-center gap-4 mb-8">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] transition-colors">
                <MessageCircle size={16} />
              </a>
              <a href="https://www.instagram.com/viaan_realty" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:border-transparent transition-all">
                {/* Bulletproof SVG Instagram Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
            <p className="text-white/40 text-xs leading-relaxed italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              "Designed with a premium experience in mind."
            </p>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
            &copy; {new Date().getFullYear()} VIAAN Realty. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-xs tracking-wide">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}