'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const committeeMembers = [
  {
    id: '1',
    name: 'Dr. Balwant Singh',
    designation: 'President',
    Qualification:' M A (Hindi) M Sc (Yoga) M P Ed (Ph D)',
    image: '/images/Committee-members/DrBalwantSingh.jpg',
    achievementsPdf: '/pdfs/DrBalwantSingh.pdf',
  },
  {
    id: '2',
    name: 'Dr. Nilesh Bansode',
    designation: 'Vice President',
    Qualification:'M P Ed, Ph D',
    image: '/images/Committee-members/DrNileshBansode.jpg',
    achievementsPdf: '/pdfs/DrNileshBansode.pdf',
  },
  {
    id: '3',
    name: 'Dr. Yadnyeshar Bagrao',
    designation: 'Secretary',
    Qualification:'M P Ed, Ph D',
    image: '/images/Committee-members/DrYadnyesharBagrao.jpg',
    achievementsPdf: '/pdfs/DrYadnyesharBagrao.pdf',
  },
  {
    id: '4',
    name: 'Dr. Vijay Singh',
    designation: 'Treasurer',
    Qualification:'M P Ed, Ph D',
    image: '/images/Committee-members/DrVijaySingh.jpg',
    achievementsPdf: '/pdfs/DrVijaySingh.pdf',
  },
  {
    id: '5',
    name: 'Dr. Rashmita Sabat',
    designation: 'Director',
    Qualification:'M A (Yoga) Ph D',
    image: '/images/Committee-members/DrRashmitaSabat.jpg',
    achievementsPdf: '/pdfs/DrRashmitaSabat.pdf',
  },
  {
    id: '6',
    name: 'Mrs. Suchita Dhamale',
    designation: 'Director',
    Qualification:'M A (Sanskrit) M P Ed, Ph D ',
    image: '/images/Committee-members/DrSuchitaDhamale.jpg',
    achievementsPdf: '/pdfs/DrSuchitaDhamale.pdf',
  },
  {
    id: '7',
    name: 'Dr. Vijay Shashikant Tandalekar',
    designation: 'Director',
    Qualification:'M A (Yoga) M P Ed, Ph D',
    image: '/images/Committee-members/DrVijayTandalekar.jpg',
    achievementsPdf: '/pdfs/DrVijayTandalekar.pdf',
  },
  {
    id: '8',
    name: 'Mr. Vinay Savla',
    designation: 'Website Developer',
    Qualification:'B. Tech',
    image: '/images/Committee-members/VinaySavla.jpg',
    achievementsPdf: '/pdfs/VinaySavla.pdf',
  },
];

const CommitteeMemberCard = ({ member }) => {
  return (
    <Link href={`/committee-members/${member.id}`} className="block group">
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
          <p className='text-orange-500 text-sm font-medium mt-1'>{member.Qualification}</p>
          <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-700 transition-colors">
            Click to view achievements →
          </p>
        </div>
      </div>
    </Link>
  );
};

export default function CommitteeMembersPage() {
  return (
    <div className="container mx-auto bg-[#FDF8F3] px-4 py-12">
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
