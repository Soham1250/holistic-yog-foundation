"use client";

import React from 'react';

const defaultOfferings = [
  {
    id: '1',
    title: 'Beginner Yoga',
    description: 'Easy yoga poses for a fresh start',
    imageSrc: '/placeholder-yoga-1.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '2',
    title: 'Meditation Classes',
    description: 'Find your inner peace with guided sessions',
    imageSrc: '/placeholder-yoga-2.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '3',
    title: 'Senior Yoga',
    description: 'Gentle poses for improved mobility',
    imageSrc: '/placeholder-yoga-3.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '4',
    title: 'Yoga Therapy',
    description: 'Healing sessions for specific conditions',
    imageSrc: '/placeholder-yoga-4.jpg',
    buttonText: 'JOIN NOW'
  }
];

const OfferingsSection = ({
  title = "Explore Our Offerings",
  description = "Discover our range of yoga classes and programs designed for all levels and needs",
  offerings = defaultOfferings
}) => {
  return (
    <div className="bg-white rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-3 text-black">{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {offerings.map((offering) => (
          <div 
            key={offering.id} 
            className="rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col"
          >
            {/* Temple-like semicircular structure */}
            <div className="relative">
              {/* Main image container */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {/* Semicircular arch overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <p className="text-white">Yoga Image</p>
                </div>
                
                {/* Semicircular arch cutout at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden">
                  <div 
                    className="absolute w-[140%] h-24 bg-white rounded-full -bottom-12 left-1/2 transform -translate-x-1/2"
                    style={{ borderTopLeftRadius: '100%', borderTopRightRadius: '100%' }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-black mb-1">{offering.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{offering.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full text-sm transition-colors w-full">
                {offering.buttonText || 'JOIN NOW'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferingsSection;
