'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LifeTimeMembers = [
  {
    id: '1',
    name: 'Dr. Rohini Shetty',
    designation: 'Life Time Member',
    image: '/images/Committee-members/DrRohiniShetty.jpg',
    qualification:'B.Com, B.P.Ed, NSNIS (Kabaddi), M.P.Ed, Ph.D. (Physical Education)',
    achievementsPdf: '/pdfs/Achievements_of_Dr_Rohini_Prasad_Shetty.docx.pdf',
  },
];

const LifeTimeMemberCard = ({ member }) => {
  return (
    <Link href={`/lifetime-members/${member.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
            {member.name}
          </h3>
          <p className="text-orange-500 text-sm font-medium mt-1">{member.designation}</p>
          <p className="text-xs text-orange-500 font-sm mt-1">{member.qualification}</p>
          <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-700 transition-colors">
            Click to view achievements →
          </p>
        </div>
      </div>
    </Link>
  );
};

export default function LifeTimeMembersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredMembers = LifeTimeMembers.filter(member => 
    (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (member.designation && member.designation.toLowerCase().includes(searchTerm.toLowerCase()))) &&
    (activeTab === 'all' || member.designation.toLowerCase().includes(activeTab.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Lifetime Members</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
        Our lifetime members are dedicated individuals who have made significant contributions to our community and are committed to the principles of holistic living and yoga.
      </p>
      
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search members..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <LifeTimeMemberCard key={member.id} member={member} />
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">
            No members found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}
