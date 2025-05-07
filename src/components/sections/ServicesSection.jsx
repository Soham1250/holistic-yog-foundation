"use client";

import React from 'react';

// Default services data
const defaultServices = [
  {
    id: '1',
    title: 'Yoga for Seniors',
    description: 'Specialized gentle classes designed to enhance flexibility, balance, and joint mobility. Restoring independence and joy in everyday living.',
    icon: '🧘‍♀️',
    iconBg: 'bg-blue-200'
  },
  {
    id: '2',
    title: 'Therapeutic Yoga',
    description: 'Specialized sessions with certified lifestyle consultants like hypertension, arthritis, stress, and anxiety conditions.',
    icon: '💆',
    iconBg: 'bg-blue-200'
  },
  {
    id: '3',
    title: 'Teacher Training & Certification',
    description: 'Workshops and nature retreats designed to recharge your body, mind, and soul while learning to integrate ancient wisdom with modern wellness practices.',
    icon: '🎓',
    iconBg: 'bg-blue-200'
  },
  {
    id: '4',
    title: 'Workshops & Retreats',
    description: 'Comprehensive courses for those seeking to become certified yoga instructors, rooted in traditional principles adapted for modern needs.',
    icon: '🏕️',
    iconBg: 'bg-blue-200'
  }
];

const ServicesSection = ({
  title = "Achieve More With Our Services",
  description = "At Holistic Yog Foundation, we offer a comprehensive range of carefully designed services designed to support every stage of life with the healing, empowering, and transformative power of yoga.",
  services = defaultServices
}) => {
  return (
    <div className="bg-white rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-medium mb-4 text-black">{title}</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-blue-100 rounded-xl p-6 flex flex-col text-black"
          >
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 ${service.iconBg} rounded-full flex items-center justify-center text-xl`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
            </div>
            <p className="text-gray-700 flex-grow">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="text-gray-700 font-medium border-b-2 border-gray-700 pb-1 hover:text-gray-900 hover:border-gray-900 transition-colors">
          VIEW ALL SERVICES
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
