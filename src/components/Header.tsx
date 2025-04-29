"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-b from-[#b6e3ff] via-[#b6e3ff] to-transparent pt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger button */}
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
            onClick={onSidebarToggle}
            aria-label="Toggle sidebar"
          >
            <Bars3Icon className="h-6 w-6 text-gray-800" aria-hidden="true" />
          </button>
          
          {/* Brand/Logo */}
          <Link href="/" className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
            <div className="w-9 h-9 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-400 to-orange-400 flex items-center justify-center overflow-hidden">
                  <div className="w-7 h-7 flex items-center justify-center text-white">
                    <span className="text-lg">🧘</span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-lg font-mono font-semibold tracking-wide text-[#1a2a3a]">HOLISTIC YOG FOUNDATION</h1>
          </Link>
          
          {/* Sign In Button */}
          <button
            className="bg-[#E05E0E] text-white font-semibold px-6 py-2.5 rounded-full shadow hover:bg-[#f5a366] focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors text-sm"
            aria-label="Sign in"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
