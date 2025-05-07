"use client";

import React, { useRef } from 'react';
import { 
  ArrowRightIcon, 
  AcademicCapIcon,
  BookOpenIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Default courses data
const defaultCourses = [
  {
    id: '1',
    title: 'Beginner Yoga',
    description: 'Easy yoga poses for a fresh start',
    imageSrc: '/images/pexels-olly-3775593.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '2',
    title: 'Vinyasa Yoga',
    description: 'A dynamic class, linking breath to movement',
    imageSrc: '/images/pexels-olly-917732.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '3',
    title: 'Hatha Yoga',
    description: 'A gentle class focusing on slow paced stretching',
    imageSrc: '/images/pexels-prasanthinturi-1051838.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '4',
    title: 'Power Yoga',
    description: 'A gentle class focusing on slow paced stretching',
    imageSrc: '/images/pexels-kampus-6698513.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '5',
    title: 'Restorative Yoga',
    description: 'Gentle poses to relax and rejuvenate',
    imageSrc: '/images/pexels-vlada-karpovich-4534689.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '6',
    title: 'Yin Yoga',
    description: 'Deep stretching for improved flexibility',
    imageSrc: '/images/pexels-yankrukov-8436715.jpg',
    buttonText: 'JOIN NOW'
  }
];

const CoursesSection = ({
  title = "Explore Our Yoga Courses For Every Level",
  description = "At Holistic Yog, we offer courses for all levels. Whether you're a beginner or advanced, our sessions help you build strength, flexibility, and inner peace.",
  courses = defaultCourses
}) => {
  const scrollContainerRef = useRef(null);
  
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
        <div className="flex items-center justify-center mb-3">
          <AcademicCapIcon className="w-6 h-6 text-blue-500 mr-2" />
          <h2 className="text-2xl font-bold text-black">{title}</h2>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          {description}
        </p>
      </div>
      
      {/* Scrollable container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-6 hide-scrollbar" 
        onMouseDown={handleMouseDown}
        style={{ 
          cursor: 'grab', 
          userSelect: 'none',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none' // IE/Edge
        }}
      >
        <div className="flex space-x-6 pl-4">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="flex-shrink-0 w-64 rounded-t-full overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              style={{ userSelect: 'none' }}
            >
              {/* Rounded top image */}
              <div className="h-48 rounded-t-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                  {course.imageSrc ? (
                    <img 
                      src={course.imageSrc} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="256"
                      height="192"
                    />
                  ) : (
                    <p className="text-white">Yoga Image</p>
                  )}
                </div>
              </div>
              
              <div className="p-4 text-center">
                <div className="flex items-center justify-center mb-1">
                  <BookOpenIcon className="w-4 h-4 text-blue-500 mr-1" />
                  <h3 className="text-lg font-semibold text-black">{course.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full text-sm transition-colors w-full flex items-center justify-center">
                  {course.buttonText || 'JOIN NOW'}
                  <SparklesIcon className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-6">
        <Link href="/all-courses" className="text-gray-700 font-medium border-b-2 border-gray-700 pb-1 hover:text-gray-900 hover:border-gray-900 transition-colors flex items-center justify-center mx-auto">
          VIEW ALL COURSES
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
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

export default CoursesSection;
