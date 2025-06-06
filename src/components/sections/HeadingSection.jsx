"use client";
import { Montserrat, Roboto } from 'next/font/google';

import React from 'react';
const HeadingSection = ({ 
  title = "Yoga Education for an Enlightened Future",
  subtitle = "Empowering seniors & communities through the transformative power of yoga. We blend ancient traditions with modern wellness practices to foster physical strength, mental clarity, emotional balance, and spiritual peace at every stage of life. Our holistic approach creates a supportive environment where individuals can thrive, connect, and discover their full potential through the timeless wisdom of yoga."
}) => {
  return (
    <div className="bg-white rounded-lg p-6 h-full flex flex-col justify-between">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4 font-montserrat">
          {title}
        </h1>
        <p className="text-lg text-gray-600 mb-6 font-montserrat">
          {subtitle}
        </p>
      </div>
      
      <div className="mt-4">
        <div className="flex gap-3 mb-4">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 px-6 rounded-full border border-gray-300 transition-colors">
            JOIN US
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-full border border-gray-300 transition-colors">
            VIEW DETAILS
          </button>
        </div>
        
        <div className="flex items-center mt-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 border-2 border-white overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-xs">
                  {i}
                </div>
              </div>
            ))}
          </div>
          <div className="ml-3">
            <span className="text-sm font-medium text-black">10k+</span>
            <p className="text-xs text-gray-500">More than 5k+ members are connected with us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
