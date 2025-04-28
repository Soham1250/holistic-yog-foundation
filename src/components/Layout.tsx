"use client";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarHovered, setSidebarHovered] = useState(false);

  return (
    <div className="min-h-screen flex bg-white">
      <Sidebar 
        isOpen={sidebarOpen || sidebarHovered} 
        onClose={() => setSidebarOpen(false)}
        onMouseEnter={() => setSidebarHovered(true)}
        onMouseLeave={() => setSidebarHovered(false)}
      />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header onSidebarToggle={() => setSidebarOpen((open) => !open)} />
        <main className="flex-1 bg-white pt-2">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
