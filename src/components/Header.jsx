"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Header = ({ onSidebarToggle }) => {
  return (
    <header className="sticky top-0 z-10 bg-transparent">
      <div className="w-full bg-gradient-to-b from-[#b6e3ff] via-[#b6e3ff] to-transparent">
        <div className="flex items-center h-16">
          {/* Hamburger button */}
          <div className="pl-4 w-16 flex justify-start">
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              onClick={onSidebarToggle}
              aria-label="Toggle sidebar"
            >
              <Bars3Icon className="h-6 w-6 text-gray-800" aria-hidden="true" />
            </button>
          </div>
          
          {/* Brand/Logo - centered */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
              <div className="w-9 h-9 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/images/Logos/74587ee9da3e12de144be0d9d111f4cdddd719e0.png" alt="Logo" width={192} height={192} />
                </div>
              </div>
              <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-poppins font-extrabold tracking-wide text-[#1a2a3a] whitespace-nowrap">HOLISTIC YOG FOUNDATION</h1>
            </Link>
          </div>
          
          {/* Empty div to balance the layout */}
          <div className="w-16"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
