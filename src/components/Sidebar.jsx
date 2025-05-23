"use client";

import React from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  CalendarIcon, 
  PhotoIcon, 
  DocumentTextIcon, 
  BeakerIcon, 
  UserCircleIcon, 
  TrophyIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Courses', href: '/all-courses', icon: AcademicCapIcon },
  { name: 'Programs', href: '/', icon: UserGroupIcon },
  { name: 'Workshops', href: '/', icon: BeakerIcon },
  { name: 'Conferences', href: '/conferences', icon: UserCircleIcon },
  { name: 'Competitions', href: '/', icon: TrophyIcon },
  { name: 'Membership', href: '/membership', icon: CalendarIcon },
  { name: 'Articles', href: '/articles', icon: DocumentTextIcon },
  { name: 'Gallery', href: '/gallery', icon: PhotoIcon },
  { name: 'Volunteers', href: '/volunteers', icon: UserIcon },
  { name: 'Life Members', href: '/life-members', icon:  UserIcon},
  { name: 'Committee Members', href: '/committee-members', icon: UserIcon },
];

const Sidebar = ({ isOpen, onClose, onMouseEnter, onMouseLeave }) => {
  return (
    <aside
      className={`fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] bg-[#353232]/80 backdrop-blur-sm transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64 px-2' : 'w-16 px-1'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <nav className="h-[calc(100vh-4rem)] flex flex-col pt-2 ">
      <ul className="h-[calc(100vh-4rem)] flex flex-col pt-2 ">
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
  );
};

export default Sidebar;
