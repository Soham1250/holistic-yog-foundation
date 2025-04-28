"use client";

import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const menuItems = [
  { label: "Home", icon: (
    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10.5z"/><path d="M9 21V12h6v9"/></svg>
  ) },
  { label: "Courses", icon: (
    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M6 2v4"/><path d="M18 2v4"/><path d="M2 10h20"/><path d="M8 14h8"/><path d="M8 18h8"/></svg>
  ) },
  { label: "Programs", icon: (
    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M7 10v4m10-4v4"/><path d="M2 21h20"/><path d="M7 21v-7m10 7v-7"/></svg>
  ) },
  { label: "Membership", icon: (
    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><rect x="6" y="14" width="12" height="6" rx="3"/></svg>
  ) },
  { label: "Gallery", icon: (
    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
  ) },
  { label: "Articles", icon: (
    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h4"/></svg>
  ) },
  { label: "Workshop", icon: (
    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M2 11h20"/></svg>
  ) },
  { label: "Conferences", icon: (
    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M2 21h20"/><path d="M7 21v-4a5 5 0 0 1 10 0v4"/></svg>
  ) },
  { label: "Competitions", icon: (
    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.91z"/></svg>
  ) },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onMouseEnter, onMouseLeave }) => {
  return (
    <nav
      className={`fixed top-0 left-0 h-full z-40 bg-[#353232] transition-all duration-300 ease-in-out flex flex-col items-center ${isOpen ? 'w-48 shadow-lg' : 'w-14'} group`}
      aria-label="Sidebar navigation"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave || onClose}
    >
      <ul className="flex flex-col gap-2 mt-24 w-full mb-10">
        {menuItems.map((item, idx) => (
          <li key={item.label} className="flex items-center w-full group/sidebar">
            <button
              className="flex items-center w-full gap-4 py-3 px-2 hover:bg-[#474343] focus:bg-[#474343] rounded transition-all duration-200 focus:outline-none transform hover:translate-x-1"
              tabIndex={isOpen ? 0 : -1}
              aria-label={item.label}
            >
              <div className="transition-transform duration-300 ease-in-out transform group-hover/sidebar:scale-110">
                {item.icon}
              </div>
              <span className={`text-white text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 ml-1 translate-x-0' : 'opacity-0 -translate-x-4 ml-[-999px]'} group-hover/sidebar:opacity-100 group-hover/sidebar:ml-2`}>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
