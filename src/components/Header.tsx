"use client";

import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger button */}
          <button
            type="button"
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={onSidebarToggle}
            aria-label="Toggle sidebar"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          
          {/* Brand/Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">Holistic Yog Foundation</h1>
          </div>
          
          {/* Sign In Button */}
          <div className="flex items-center">
            <button
              type="button"
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
