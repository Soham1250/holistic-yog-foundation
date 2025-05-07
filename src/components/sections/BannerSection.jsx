"use client";

import React from 'react';
import Link from 'next/link';
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  BoltIcon,
  MegaphoneIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

// Default event data
const defaultEvent = {
  title: "Ayurveda & Mindfulness Conference",
  description: "Dive into traditional healing practices and their integration into modern lifestyle therapies.",
  date: "July 8, 2025",
  time: "10:00 AM - 5:30 PM",
  venue: "Matunga Mumbai, India"
};

const BannerSection = ({
  title = "Upcoming",
  subtitle = "Stay informed. Stay connected. Be a part of our next big gathering.",
  event = defaultEvent,
  buttonText = "Register Now"
}) => {
  return (
    <div className="bg-[#FDF7F2] rounded-lg p-8">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-2">
          <MegaphoneIcon className="w-6 h-6 text-blue-500 mr-2" />
          <h2 className="text-2xl font-bold text-black">{title}</h2>
        </div>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      
      <div className="bg-blue-100 rounded-xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Event Image */}
          <div className="md:w-2/5">
            <div className="h-48 md:h-full rounded-lg overflow-hidden relative bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <img 
                  src="/images/conference/pexels-bertellifotografia-3321791.jpg" 
                  alt="Conference Image" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="md:w-3/5">
            <div className="flex items-start mb-4">
              <div className="bg-white p-2 rounded-lg mr-3">
                <BoltIcon className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
            </div>
            
            <div className="ml-10 mb-6">
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-700">{event.description}</p>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3 ml-10">
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 text-blue-500 mr-3" />
                <p className="text-gray-700">Date: <span className="font-medium">{event.date}</span></p>
              </div>
              
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 text-blue-500 mr-3" />
                <p className="text-gray-700">Time: <span className="font-medium">{event.time}</span></p>
              </div>
              
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 text-blue-500 mr-3" />
                <p className="text-gray-700">Venue: <span className="font-medium">{event.venue}</span></p>
              </div>
              
              <div className="mt-6">
                <Link href="/conferences">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
