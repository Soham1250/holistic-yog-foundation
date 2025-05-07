"use client";

import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

const AboutUsSection = ({
  title = "About us",
  description = "At Holistic Yog Foundation, we are a community-driven nonprofit dedicated to spreading the transformative power of yoga and mindfulness. Our mission is to empower individuals of all ages through the ancient wisdom of yoga blended with modern wellness practices.",
  vision = "To create a world where yoga education becomes a pillar of lifelong wellness, nurturing physical strength, emotional awareness, and inner peace for all generations.",
  mission = "To make yoga education universally accessible and inclusive, nurturing every individual especially seniors with practices that enhance physical vitality, mental clarity, and emotional well-being."
}) => {
  return (
    <div className="bg-[#fdf7f2] rounded-lg p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <img 
                    src="/images/pexels-yankrukov-8436587.jpg" 
                    alt="Yoga Group Session" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
              <SparklesIcon className="w-6 h-6 text-blue-500 mr-2" />
              {title}
            </h2>
          </div>
          
          <p className="text-gray-700 mb-6">
            {description}
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="flex items-center text-lg font-bold mb-2 text-black">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Our Vision
              </h3>
              <p className="text-gray-700 pl-4">
                {vision}
              </p>
            </div>
            
            <div>
              <h3 className="flex items-center text-lg font-bold mb-2 text-black">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Our Mission
              </h3>
              <p className="text-gray-700 pl-4">
                {mission}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
