"use client";

import React from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  CalendarIcon, 
  UserIcon, 
  InformationCircleIcon 
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const menuItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'All Courses', href: '/all-courses', icon: AcademicCapIcon },
  { name: 'Membership', href: '/membership', icon: UserGroupIcon },
  { name: 'Conferences', href: '/conferences', icon: CalendarIcon },
  { name: 'Members', href: '/members', icon: UserIcon },
  { name: 'About Us', href: '/about', icon: InformationCircleIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onMouseEnter, onMouseLeave }) => {
  return (
    <aside
      className={`fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] bg-[#353232]/80 backdrop-blur-sm transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64 px-2' : 'w-16 px-1'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <nav className="h-full flex flex-col pt-2">
        <ul className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center px-5 py-3 text-white hover:bg-[#474343] transition-colors rounded-md"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <span 
                  className={`ml-4 text-sm font-medium tracking-wider whitespace-nowrap transition-opacity duration-300 ${
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
  );
};

export default Sidebar;
