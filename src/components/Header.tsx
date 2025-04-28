"use client";
import React, { useState } from "react";
import Image from "next/image";

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <header
      className="sticky top-0 z-50 w-full flex items-center justify-between px-4 sm:px-8 py-3 bg-gradient-to-b from-[#b6e3ff] via-[#b6e3ff] to-white"
      aria-label="Main navigation header"
    >
      {/* Hamburger */}
      <button
        aria-label="Open sidebar menu"
        className="relative mr-2 p-2 rounded-lg hover:bg-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
        onClick={onSidebarToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-8 h-6 flex flex-col justify-between">
          <span className={`h-1 w-full bg-black rounded-full transform transition-all duration-300 ease-in-out ${isHovered ? 'w-3/4' : 'w-full'}`}></span>
          <span className={`h-1 w-full bg-black rounded-full transition-all duration-300 ease-in-out ${isHovered ? 'w-full' : 'w-3/4'}`}></span>
          <span className={`h-1 w-full bg-black rounded-full transform transition-all duration-300 ease-in-out ${isHovered ? 'w-2/3' : 'w-full'}`}></span>
        </div>
      </button>
      {/* Logo & Title */}
      <div className="flex items-center gap-5">
        {/* Placeholder for logo */}
        <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-xs text-gray-500">Logo</span>
        </div>
        <span className="font-mono font-semibold text-xl tracking-wide text-[#1a2a3a]">HOLISTIC YOG FOUNDATION</span>
      </div>
      {/* Sign In Button */}
      <button
        className="bg-[#E05E0E] text-white font-semibold px-10 py-4 rounded-full shadow hover:bg-[#f5a366] focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors text-base"
        aria-label="Sign in"
      >
        Sign In
      </button>
    </header>
  );
};

export default Header;
