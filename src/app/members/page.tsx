'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Member data
const memberData = [
  {
    id: 1,
    name: 'Sophia Bennett',
    image: '/images/People/pexels-olly-774095.jpg',
    type: 'Life Members'
  },
  {
    id: 2,
    name: 'Sophia Bennett',
    image: '/images/People/pexels-danxavier-1212984.jpg',
    type: 'Life Members'
  },
  {
    id: 3,
    name: 'Sophia Bennett',
    image: '/images/People/pexels-stefanstefancik-91227.jpg',
    type: 'Life Members'
  },
  {
    id: 4,
    name: 'Sophia Bennett',
    image: '/images/People/pexels-divinetechygirl-1181686.jpg',
    type: 'Life Members'
  },
  {
    id: 5,
    name: 'Sophia Bennett',
    image: '/images/People/pexels-creationhill-1681010.jpg',
    type: 'Life Members'
  },
  {
    id: 6,
    name: 'Sophia Bennett',
    image: '/images/People/pexels-danxavier-1239291.jpg',
    type: 'Life Members'
  }
];

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Life Members');
  
  const filteredMembers = memberData.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    member.type === activeTab
  );

  return (
    <div className="bg-white min-h-screen select-none">
      <div className="container mx-auto px-4 py-8">
        {/* Header and Search Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0 md:mr-8 md:max-w-xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Members</h1>
            <p className="text-gray-600">
              Our members are passionate individuals from all walks of life, united by a shared commitment to holistic living, mindfulness, and continuous growth through the ancient wisdom of yoga.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search our members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10 text-black bg-white"
              />
              <button className="absolute right-0 top-0 h-full px-3 bg-orange-500 text-white rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-black">
              <option>Style</option>
              <option>Hatha Yoga</option>
              <option>Vinyasa Flow</option>
              <option>Ashtanga Yoga</option>
              <option>Kundalini Yoga</option>
            </select>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['Life Members'].map((tab) => (
              <button
                key={tab}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {filteredMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <h3 className="font-medium text-black">{member.name}</h3>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-8 rounded-full transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
