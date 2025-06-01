"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, MapPinIcon, ClockIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Conference data
const conferences = [
  {
    id: 1,
    title: 'Yoga, Sports and Wellbeing: A Holistic Approach',
    description: 'Join us for a transformative experience exploring the ancient wisdom of yoga, sports and its modern applications for holistic well-being.',
    date: 'June 28, 2025',
    time: 'All Day',
    location: 'Teju Leela Auditorium, Shishuvan School, 426, Shraddhanand Road, King\'s Circle, Matunga Central, Mumbai-400019',
    image: '/images/conference/pexels-bertellifotografia-3321791.jpg',
  }
];

export default function ConferencesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter conferences based on search term
  const filteredConferences = conferences.filter(conference => {
    return conference.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conference.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Conferences</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our expert-led conferences and workshops to deepen your knowledge and connect with like-minded individuals.
        </p>
      </div>

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

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search conferences..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900 placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Conferences Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredConferences.map((conference) => (
          <div key={conference.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            {/* Image with gradient overlay */}
            <div className="relative h-48">
              <Image
                src={conference.image}
                alt={conference.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white line-clamp-2">{conference.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{conference.date}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>{conference.time}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 line-clamp-3">{conference.description}</p>

              {/* Location */}
              <div className="flex items-start text-sm text-gray-500 mb-6">
                <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-600">{conference.location}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScYVhWJ5s0hwffZE57OALRwqVFOuxxhCRxc5xraTBhe_yqF2Q/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2.5 border border-transparent rounded-md text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors"
                >
                  Register Now
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredConferences.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">No conferences found</h3>
          <p className="mt-1 text-gray-500">Try adjusting your search term</p>
        </div>
      )}
    </div>
  );
}