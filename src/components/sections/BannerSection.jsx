"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  BoltIcon,
  MegaphoneIcon,
  XMarkIcon,
  DocumentTextIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';


// Default event data
const defaultEvent = {
  title: "Yoga, Sports and Wellbeing: A Holistic Approach",
  description: "Join us for a transformative experience exploring the ancient wisdom of yoga, sports and its modern applications for holistic well-being.",
  date: "June 28, 2025",
  time: "All Day",
  venue: "Teju Leela Auditorium, Shishuvan School, 426, Shraddhanand Road, King's Circle, Matunga Central, Mumbai-400019"
};

const BannerSection = ({
  title = "Upcoming",
  subtitle = "Stay informed. Stay connected. Be a part of our next big gathering.",
  event = defaultEvent,
  buttonText = "Register Now"
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#FDF7F2] rounded-lg p-8">
      {/* PDF Viewer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-black text-lg font-medium">Event Details</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <div className="w-full h-full">
                <iframe
                  src="/pdfs/Brochure_V10-1.pdf"
                  className="w-full h-[80vh] border-0 rounded-lg"
                  title="Event Details PDF"
                >
                  <p>Your browser does not support PDFs. Please download the PDF to view it: 
                    <a href="/pdfs/Brochure_V10-1.pdf" className="text-blue-500 hover:underline">
                      Download PDF
                    </a>
                  </p>
                </iframe>
              </div>
            </div>
            <div className="p-4 border-t flex justify-end items-center">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
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
              
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScYVhWJ5s0hwffZE57OALRwqVFOuxxhCRxc5xraTBhe_yqF2Q/viewform" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
                    Register Now
                  </button>
                </Link>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white flex-1 flex items-center justify-center gap-2 border border-orange-500 font-medium py-2 px-6 rounded-full transition-colors"
                >
                  <DocumentTextIcon className="w-5 h-5" />
                  View Details
                </button>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;