"use client";

import React from 'react';
import { CreditCardIcon } from '@heroicons/react/24/outline';

// Default plan data
const defaultPlan = {
  id: '1',
  title: 'Annual Membership',
  price: 799,
  duration: 'month',
  features: [
    'Unlimited access to all yoga classes',
    'Access to guided meditation & mindfulness programs',
    'Priority booking for special events',
    '20% discount on workshops and retreats'
  ],
  isPopular: true
};

const MembershipSection = ({
  title = "Membership",
  description = "Join our community and transform your life with our holistic approach to wellness.",
  plan = defaultPlan
}) => {
  return (
    <div className="bg-[#fdf7f2] rounded-lg p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center">
            <CreditCardIcon className="w-6 h-6 text-blue-500 mr-2" />
            {plan.title}
          </h2>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-gray-900">{plan.price}rs</span>
            <span className="text-xl text-gray-600 ml-2">/ {plan.duration}</span>
          </div>
          
          <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden mt-4">
            <div className="absolute inset-0 bg-gray-200">
              <img 
                src="/images/join us.jpg" 
                alt="Yoga membership" 
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
        </div>
        
        <div className="md:w-1/2">
          <div className="relative">
            {/* Rectangular container with rounded corners */}
            <div className="bg-[#d3ebff] rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg text-black">What's included:</h3>
              </div>
              
              <ul className="space-y-4 max-w-md mx-auto">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-3 ml-2">•</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;
