'use client';

import React from 'react';
import Image from 'next/image';

const committeeMembers = [
  {
    id: 1,
    name: 'Dr. Balwant Singh',
    designation: 'President',
    image: '/images/Committee-members/BalwantSingh.jpg',
  },
  {
    id: 2,
    name: 'Dr. Nilesh Bansode',
    designation: 'Vice President',
    image: '/images/Committee-members/NileshBansode.jpg',
  },
  {
    id: 3,
    name: 'Dr. Rashmita Sabat',
    designation: 'Director',
    image: '/images/Committee-members/RashmitaSabat.jpg',
  },
  {
    id: 4,
    name: 'Mrs. Suchita Dhamale',
    designation: 'Director',
    image: '/images/Committee-members/SuchitaDhamale.jpg',
  },
  {
    id: 5,
    name: 'Dr. Yadnyeshar Bagrao',
    designation: 'Events Coordinator',
    image: '/images/Committee-members/DrYadnyesharBagrao.jpg',
  },
];

const CommitteeMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-64 w-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-orange-500 text-sm font-medium">{member.designation}</p>
      </div>
    </div>
  );
};

export default function CommitteeMembersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Committee Members</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
      Our members are passionate individuals from all walks of life, united by a shared commitment to holistic living, mindfulness, and continuous personal growth through yoga.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {committeeMembers.map((member) => (
          <CommitteeMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
