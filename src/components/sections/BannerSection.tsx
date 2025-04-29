"use client";

import React from 'react';
import ComingSoonButton from '../ui/ComingSoonButton';

interface EventDetails {
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
}

interface BannerSectionProps {
  title?: string;
  subtitle?: string;
  event?: EventDetails;
  buttonText?: string;
}

const defaultEvent: EventDetails = {
  title: "Ayurveda & Mindfulness Conference",
  description: "Dive into traditional healing practices and their integration into modern lifestyle therapies.",
  date: "July 8, 2025",
  time: "10:00 AM - 5:30 PM",
  venue: "Matunga Mumbai, India"
};

const BannerSection: React.FC<BannerSectionProps> = ({
  title = "Upcoming",
  subtitle = "Stay informed. Stay connected. Be a part of our next big gathering.",
  event = defaultEvent,
  buttonText = "Register Now"
}) => {
  return (
    <div className="bg-[#FDF7F2] rounded-lg p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      
      <div className="bg-blue-100 rounded-xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Event Image */}
          <div className="md:w-2/5">
            <div className="h-48 md:h-full rounded-lg overflow-hidden relative bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <p className="text-white">Conference Image</p>
              </div>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="md:w-3/5">
            <div className="flex items-start mb-4">
              <div className="bg-white p-2 rounded-lg mr-3">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
            </div>
            
            <div className="ml-10 mb-6">
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <p className="text-gray-700">{event.description}</p>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3 ml-10">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p className="text-gray-700">Date: {event.date}</p>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-700">Time: {event.time}</p>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="text-gray-700">Venue: {event.venue}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <ComingSoonButton text={buttonText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
