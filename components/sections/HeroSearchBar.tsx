"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Search, MapPin, Building2, Store, Home, Map } from "lucide-react";

// Updated list with all required Pune micro-markets
const puneLocations = [
  "Baner", 
  "Wakad", 
  "Hinjewadi", 
  "Pashan", 
  "Bavdhan", 
  "Balewadi", 
  "Punawale", 
  "Ravet", 
  "Mahalunge", 
  "Tathawade", 
  "Pimpri Chinchwad", 
  "Akurdi", 
  "Pimple Saudagar"
];

const categories = [
  { name: "Apartment", icon: Building2 },
  { name: "Commercial", icon: Store },
  { name: "Villa", icon: Home },
  { name: "Plot", icon: Map },
];

export default function HeroSearchBar() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Route to coming-soon on search or category click
  const handleAction = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    router.push("/coming-soon");
  };

  return (
    <div className="search-widget opacity-0 w-full mt-8 flex flex-col items-center gap-4">
      
      <p className="text-[#FDE08B] text-[10px] md:text-xs tracking-[0.25em] uppercase font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        No Brokerage | Strong Negotiations
      </p>

      {/* SEARCH BAR */}
      <form onSubmit={handleAction} className="w-full flex flex-col md:flex-row bg-[#0a0a0a]/80 backdrop-blur-3xl border border-[#C7A26A]/40 rounded-2xl p-2 gap-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.9)]">
        
        {/* Location Dropdown */}
        <div className="relative md:w-1/4">
          <button 
            type="button"
            onClick={() => setIsLocationOpen(!isLocationOpen)}
            className="w-full flex items-center justify-between gap-3 px-5 py-3 md:py-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/5 relative z-20"
          >
            <div className="flex items-center gap-2 text-white text-sm font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <MapPin size={18} className="text-[#FDE08B]" /> 
              <span className="truncate">{selectedLocation}</span>
            </div>
            <ChevronDown size={16} className={`text-white/70 transition-transform duration-300 ${isLocationOpen ? "rotate-180" : ""}`} />
          </button>

          {/* The Scrollable Dropdown Menu */}
          <div className={`absolute top-full left-0 mt-2 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#C7A26A]/40 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden z-[100] transition-all duration-300 origin-top ${isLocationOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible pointer-events-none"}`}>
            {/* max-h-[220px] creates the short scroller effect */}
            <ul className="max-h-[220px] overflow-y-auto custom-scrollbar py-2">
              {puneLocations.map((loc, idx) => (
                <li 
                  key={idx}
                  onClick={() => { setSelectedLocation(loc); setIsLocationOpen(false); }}
                  className="px-5 py-3 text-white/80 hover:bg-[#C7A26A] hover:text-black cursor-pointer transition-colors text-sm font-medium border-b border-white/5 last:border-0"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Text Input */}
        <div className="flex-1 flex items-center bg-white/5 rounded-xl border border-white/5 px-5 py-3 md:py-4 group focus-within:bg-white/10 focus-within:border-[#C7A26A]/30 transition-all z-10 relative">
          <Search size={18} className="text-white/60 mr-3 shrink-0" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search By : Project Name / Developer / Location" 
            className="w-full bg-transparent outline-none text-white text-sm placeholder:text-white/50 font-medium" 
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-[#C7A26A] hover:bg-[#FDE08B] text-black px-8 py-3 md:py-4 rounded-xl transition-colors flex items-center justify-center font-bold text-sm tracking-widest uppercase shadow-lg z-10 relative">
          Search
        </button>
      </form>

      {/* CATEGORIES PILLS */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-2">
        {categories.map((cat, index) => (
          <button 
            key={index}
            onClick={() => handleAction()} 
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C7A26A]/30 bg-[#0a0a0a]/70 backdrop-blur-2xl hover:bg-[#C7A26A] hover:border-[#C7A26A] hover:text-black transition-all text-white hover:text-black text-[10px] md:text-xs tracking-wider uppercase font-semibold group shadow-[0_4px_16px_0_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <cat.icon size={16} className="text-[#FDE08B] group-hover:text-black transition-colors" />
            {cat.name}
          </button>
        ))}
      </div>

    </div>
  );
}