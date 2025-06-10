"use client";

import React from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  CalendarIcon, 
  UserCircleIcon,
  StarIcon, 
  IdentificationIcon,
  DocumentTextIcon, 
  PhotoIcon,
} from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  // { name: 'Courses', href: '/all-courses', icon: AcademicCapIcon },
  // { name: 'Programs', href: '/', icon: UserGroupIcon },
  // { name: 'Workshops', href: '/', icon: BeakerIcon },
  { name: 'Conferences', href: '/conferences', icon: UserCircleIcon },
  // { name: 'Competitions', href: '/', icon: TrophyIcon },
  { name: 'Membership', href: '/membershipform', icon: CalendarIcon },
  { name: 'Articles', href: '/articles', icon: DocumentTextIcon },
  { name: 'Gallery', href: '/gallery', icon: PhotoIcon },
  // { name: 'Volunteers', href: '/volunteers', icon: UserIcon },
  { name: 'Committee Members', href: '/committee-members', icon: IdentificationIcon },
  { name: 'Life Members', href: '/lifetime-members', icon: StarIcon },
];

const Sidebar = ({ isOpen, onClose, onMouseEnter, onMouseLeave }) => {
  return (
    <>
      {/* Overlay when sidebar is open */}
      {/* Overlay for mobile when sidebar is open */}
  {isOpen && (
    <div 
      className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-300"
      onClick={onClose}
      aria-hidden="true"
    />
  )}
  <aside
    className={`fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] bg-[#353232]/90 backdrop-blur-sm transition-all duration-300 ease-in-out transform ${
      isOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-16'
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
      boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)'
    }}
      >
      <nav className="h-full flex flex-col">
      <ul className="flex-1 overflow-y-auto py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-y">
      {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center px-5 py-2 text-white hover:bg-[#474343] transition-colors rounded-md"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <span 
                  className={`ml-2 text-sm font-medium tracking-wider whitespace-nowrap transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      </aside>
    </>
  );
};

export default Sidebar;
