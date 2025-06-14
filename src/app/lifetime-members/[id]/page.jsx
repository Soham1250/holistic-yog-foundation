'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Sample data - replace with your actual data source
const lifetimeMembers = [
  {
    id: '1',
    name: 'Dr. Rohini Shetty',
    membershipNumber: 'HYF/LM/001',
    qualification:'B.Com, B.P.Ed, NSNIS (Kabaddi), M.P.Ed, Ph.D. (Physical Education)',
    image: '/images/Committee-members/DrRohiniShetty.jpg',
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
  // Add more lifetime members as needed
];

export default function LifetimeMemberDetailPage() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundMember = lifetimeMembers.find(member => member.id === id);
    setMember(foundMember);
    setIsLoading(false);
  }, [id]);



  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Member not found</h2>
          <p className="mt-2 text-gray-600">The requested member could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/lifetime-members"
          className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-8 transition-colors text-sm"
        >
          <svg 
            className="w-4 h-4 mr-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Back to Members
        </Link>
        
        {/* Member Header */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 192px, 256px"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{member.name}</h1>
            <p className="text-xl text-orange-500 font-medium mt-2">Lifetime Membership Number: {member.membershipNumber}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Achievements Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Achievements & Credentials</h2>

          {/* PDF Viewer */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="w-full h-[80vh]">
              <iframe
                src={`/pdfs/${member.achievementsPdf.split('/').pop()}`}
                className="w-full h-full rounded-lg border border-gray-200"
                title={`${member.name}'s Achievements`}
              >
                <p className="text-center p-4">
                  Your browser does not support PDFs.
                  <a
                    href={`/pdfs/${member.achievementsPdf.split('/').pop()}`}
                    className="text-orange-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download the PDF
                  </a>
                </p>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
