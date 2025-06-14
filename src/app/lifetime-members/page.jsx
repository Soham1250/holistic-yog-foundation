'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LifeTimeMembers = [
  {
    id: '1',
    name: 'Dr. Rohini Shetty',
    membershipNumber: 'HYF/LM/001',
    image: '/images/lifetime-members/DrRohiniShetty.jpg',
    qualification:'B.Com, B.P.Ed, NSNIS (Kabaddi), M.P.Ed, Ph.D. (Physical Education)',
    achievementsPdf: '/pdfs/DrRohiniShetty.pdf',
  },
  {
    id: '2',
    name: 'Mohammad kaleem Ali Rizvi',
    membershipNumber: 'HYF/LM/002',
    image: '/images/lifetime-members/MohammadkaleemAliRizvi.jpg',
    qualification:'B.A., M.A., B.P.Ed, M.P.Ed, Ph.D. (Physical Education)',
    achievementsPdf: '/pdfs/MohammadkaleemAliRizvi.pdf',
  },
];

const LifeTimeMemberCard = ({ member }) => {
  return (
    <Link href={`/lifetime-members/${member.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
        {/* <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div> */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
            {member.name}
          </h3>
          <p className="text-orange-500 text-sm font-medium mt-1">Lifetime Membership Number: {member.membershipNumber}</p>
          {/* <p className="text-xs text-orange-500 font-sm mt-1">{member.qualification}</p> */}
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
    <div className="container mx-auto bg-[#FDF8F3] px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Lifetime Members</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
        Our lifetime members are dedicated individuals who have made significant contributions to our community and are committed to the principles of holistic living and yoga.
      </p>
      
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
