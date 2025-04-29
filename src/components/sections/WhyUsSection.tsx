"use client";

import React from 'react';
import ComingSoonButton from '../ui/ComingSoonButton';

interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  iconBg?: string;
}

interface WhyUsSectionProps {
  title?: string;
  description?: string;
  items?: WhyUsItem[];
  phoneNumber?: string;
}

const defaultItems: WhyUsItem[] = [
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

const WhyUsSection: React.FC<WhyUsSectionProps> = ({
  title = "Why Holistic Yog?",
  description = "Our community-driven approach focuses on the complete well-being of body, mind, and spirit through yoga, meditation, and holistic wellness practices.",
  items = defaultItems,
  phoneNumber = "9723456789"
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
                src="/yoga-class.jpg" 
                alt="Yoga class" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20800%20600%22%3E%3Crect%20fill%3D%22%23f0f0f0%22%20width%3D%22800%22%20height%3D%22600%22%2F%3E%3Ctext%20fill%3D%22%23999%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2236%22%20x%3D%22400%22%20y%3D%22300%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EYoga%20Class%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';
                }}
              />
            </div>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <ComingSoonButton text="JOIN NOW" />
            <a href={`tel:${phoneNumber}`} className="flex items-center border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              {phoneNumber}
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-blue-100 rounded-lg p-4 flex items-start">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-xl">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
