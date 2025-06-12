"use client";

import React from 'react';
import { 
  SparklesIcon, 
  CalendarIcon, 
  CheckBadgeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

// Default items data
const defaultItems = [
  {
    id: '1',
    title: 'Holistic Approach',
    description: 'We don\'t just teach yoga poses, we focus on breathwork, mindfulness, nutrition, and emotional well-being.',
    icon: '✡️'
  },
  {
    id: '2',
    title: 'Workshops & Events',
    description: 'From city-wide workshops to community camps, we engage communities through regular events and learning programs.',
    icon: '🏛️'
  },
  {
    id: '3',
    title: 'Certified & Trusted',
    description: 'Our team is certified in Hatha, Vinyasa, and Pranayama and has trained over 500+ individuals across all age groups.',
    icon: '📋'
  }
];

const WhyUsSection = ({
  title = "Why Holistic Yog?",
  description = "Our community-driven approach focuses on the complete well-being of body, mind, and spirit through yoga, meditation, and holistic wellness practices.",
  items = defaultItems,
  phoneNumber = "+919820596638",
  phoneNumber2 = "+919960764653"
}) => {
  return (
    <div className="bg-[#fdf7f2] rounded-lg p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-700 mb-8">{description}</p>
          
          <div className="relative h-64 md:h-72 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gray-200">
              <img 
                src="/images/pexels-gustavo-fring-3984340.jpg" 
                alt="Yoga class" 
                className="w-full h-full object-cover"
                loading="lazy"
                width="600"
                height="400"
                onError={(e) => {
                  const target = e.target;
                  target.onerror = null;
                  target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20800%20600%22%3E%3Crect%20fill%3D%22%23f0f0f0%22%20width%3D%22800%22%20height%3D%22600%22%2F%3E%3Ctext%20fill%3D%22%23999%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2236%22%20x%3D%22400%22%20y%3D%22300%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EYoga%20Class%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';
                }}
              />
            </div>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <a href={`tel:${phoneNumber}`} className="flex items-center border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <PhoneIcon className="w-4 h-4 mr-2 text-blue-500" />
              {phoneNumber}
            </a>
            <a href={`tel:${phoneNumber2}`} className="flex items-center border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <PhoneIcon className="w-4 h-4 mr-2 text-blue-500" />
              {phoneNumber2}
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex flex-col h-full">
          <div className="grid grid-cols-1 gap-8 h-full">
            {items.map((item, index) => (
              <div key={item.id} className="bg-blue-100 rounded-lg p-6 flex items-start">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  {index === 0 && <SparklesIcon className="w-6 h-6 text-blue-500" />}
                  {index === 1 && <CalendarIcon className="w-6 h-6 text-blue-500" />}
                  {index === 2 && <CheckBadgeIcon className="w-6 h-6 text-blue-500" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
