"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: Foundation Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <a href='tel:+919979583723'>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-sm">+919820596638</span>
              </div>
            </a>
            <a href="tel:+919960764653">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-sm">+919960764653</span>
              </div>
            </a>

            <a href="mailto:holisticyog09@gmail.com" className="flex items-center hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-sm">holisticyog09@gmail.com</span>
            </a>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/membership" className="text-gray-300 hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/conferences" className="text-gray-300 hover:text-white transition-colors">Conferences</Link></li>
              <li><Link href="/articles" className="text-gray-300 hover:text-white transition-colors">Articles</Link></li>
            </ul>

            {/* Commented out Workshops section
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Workshops</h3>
              <ul className="space-y-2">
                <li><Link href="/workshops/hatha" className="text-gray-300 hover:text-white transition-colors">Hatha Yoga</Link></li>
                <li><Link href="/workshops/vinyasa" className="text-gray-300 hover:text-white transition-colors">Vinyasa Yoga</Link></li>
                <li><Link href="/workshops/beginner" className="text-gray-300 hover:text-white transition-colors">Beginner Yoga</Link></li>
              </ul>
            </div>
            */}
          </div>


        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">© 2025 Holistic Yog Foundation All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
