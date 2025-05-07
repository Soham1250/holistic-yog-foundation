"use client";

import React, { useRef, useState } from 'react';
import { 
  AcademicCapIcon, 
  LanguageIcon, 
  ClockIcon, 
  CheckBadgeIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

// Default qualification data
const defaultQualifications = [
  {
    title: "Trained 500+ members",
    description: "Successfully trained over 500 individuals, helping them transform their lifestyle through personalized yoga sessions."
  },
  {
    title: "Fluent in Hindi, Marathi, and English",
    description: "Fluent in Hindi, Marathi, and English, making sessions comfortable for a diverse range of learners."
  },
  {
    title: "20+ Years of Teaching Experience",
    description: "Bringing over 20 years of rich experience, guiding students of all age groups with patience and wisdom."
  },
  {
    title: "Certified in Hatha, Vinyasa & Pranayama",
    description: "Professionally certified in Hatha, Vinyasa, and Pranayama, offering a balanced and holistic yoga journey."
  }
];

// Default instructors data
const defaultInstructors = [
  {
    id: '1',
    name: 'Sophia Bennett',
    specialty: 'Senior Yoga Instructor',
    qualifications: defaultQualifications
  },
  {
    id: '2',
    name: 'Liam Chen',
    specialty: 'Meditation & Mindfulness',
    qualifications: defaultQualifications
  },
  {
    id: '3',
    name: 'Anika Patel',
    specialty: 'Vinyasa Flow Expert',
    qualifications: defaultQualifications
  },
  {
    id: '4',
    name: 'Michael Rodriguez',
    specialty: 'Therapeutic Yoga',
    qualifications: defaultQualifications
  },
  {
    id: '5',
    name: 'Priya Sharma',
    specialty: 'Hatha Yoga Specialist',
    qualifications: defaultQualifications
  },
  {
    id: '6',
    name: 'David Wilson',
    specialty: 'Yoga for Seniors',
    qualifications: defaultQualifications
  },
  {
    id: '7',
    name: 'Maya Gupta',
    specialty: 'Prenatal Yoga',
    qualifications: defaultQualifications
  },
  {
    id: '8',
    name: 'Raj Malhotra',
    specialty: 'Ashtanga Yoga',
    qualifications: defaultQualifications
  }
];

const InstructorsSection = ({
  title = "Connect and Grow With Top Instructor",
  subtitle = "Join our sessions led by experienced instructors and take your yoga practice to the next level with guidance, community, and inspiration.",
  instructors = defaultInstructors
}) => {
  const scrollContainerRef = useRef(null);
  const [activeInstructor, setActiveInstructor] = useState(instructors[0]);
  
  // Handle mouse drag scrolling
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    
    const slider = scrollContainerRef.current;
    let isDown = true;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;
    
    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk;
    };
    
    const handleMouseUp = () => {
      isDown = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  return (
    <div className="bg-white rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>
      
      {/* Horizontal instructor images */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-6 hide-scrollbar mb-8" 
        onMouseDown={handleMouseDown}
        style={{ 
          cursor: 'grab', 
          userSelect: 'none',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none' // IE/Edge
        }}
      >
        <div className="flex space-x-6 pl-4">
          {instructors.map((instructor) => (
            <div 
              key={instructor.id} 
              className={`flex-shrink-0 w-48 cursor-pointer transition-all duration-200 ${activeInstructor.id === instructor.id ? 'bg-blue-50 rounded-lg shadow-md transform scale-105' : ''}`}
              onClick={() => setActiveInstructor(instructor)}
              style={{ userSelect: 'none' }}
            >
              <div className="rounded-full overflow-hidden h-48 w-48 mb-3 bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
                  <span className="text-3xl font-semibold text-white">
                    {instructor.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-black">{instructor.name}</h3>
                <p className="text-sm text-gray-600">{instructor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Instructor qualifications in grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column: First two qualifications */}
        <div className="space-y-8">
          {activeInstructor.qualifications.slice(0, 2).map((qualification, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center mb-2">
                {index === 0 && <UserGroupIcon className="w-5 h-5 text-blue-500 mr-2" />}
                {index === 1 && <LanguageIcon className="w-5 h-5 text-blue-500 mr-2" />}
                <h3 className="font-bold text-black">{qualification.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{qualification.description}</p>
            </div>
          ))}
        </div>
        
        {/* Right column: Last two qualifications */}
        <div className="space-y-8">
          {activeInstructor.qualifications.slice(2, 4).map((qualification, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center mb-2">
                {index === 0 && <ClockIcon className="w-5 h-5 text-blue-500 mr-2" />}
                {index === 1 && <CheckBadgeIcon className="w-5 h-5 text-blue-500 mr-2" />}
                <h3 className="font-bold text-black">{qualification.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{qualification.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-8">
        <button className="text-gray-700 font-medium border-b-2 border-gray-700 pb-1 hover:text-gray-900 hover:border-gray-900 transition-colors flex items-center justify-center mx-auto">
          VIEW ALL INSTRUCTORS
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
      
      {/* Add custom styles for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default InstructorsSection;
