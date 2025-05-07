"use client";

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only run on client-side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMouseEnter = () => {
    setSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setSidebarOpen(false);
  };

  // Return a simpler layout during server-side rendering
  if (!mounted) {
    return (
      <div className="flex flex-col h-screen bg-white overflow-hidden">
        <Header onSidebarToggle={() => {}} />
        <div className="flex flex-1 overflow-hidden">
          <div className="w-16 h-full" />
          <main className="flex-1 overflow-y-auto pl-5">
            <div className="p-5 sm:p-6 lg:p-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Client-side render with full interactivity
  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      <Header onSidebarToggle={toggleSidebar} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        
        <main className={`flex-1 overflow-y-auto transition-all duration-300 ${sidebarOpen ? 'pl-5 ml-2' : 'pl-5'}`}>
          <div className="p-5 sm:p-6 lg:p-8">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
