"use client";

import React, { useRef } from 'react';

interface CourseItem {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  buttonText?: string;
}

interface CoursesSectionProps {
  title?: string;
  description?: string;
  courses?: CourseItem[];
}

const defaultCourses: CourseItem[] = [
  {
    id: '1',
    title: 'Beginner Yoga',
    description: 'Easy yoga poses for a fresh start',
    imageSrc: '/placeholder-yoga-1.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '2',
    title: 'Vinyasa Yoga',
    description: 'A dynamic class, linking breath to movement',
    imageSrc: '/placeholder-yoga-2.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '3',
    title: 'Hatha Yoga',
    description: 'A gentle class focusing on slow paced stretching',
    imageSrc: '/placeholder-yoga-3.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '4',
    title: 'Power Yoga',
    description: 'A gentle class focusing on slow paced stretching',
    imageSrc: '/placeholder-yoga-4.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '5',
    title: 'Restorative Yoga',
    description: 'Gentle poses to relax and rejuvenate',
    imageSrc: '/placeholder-yoga-5.jpg',
    buttonText: 'JOIN NOW'
  },
  {
    id: '6',
    title: 'Yin Yoga',
    description: 'Deep stretching for improved flexibility',
    imageSrc: '/placeholder-yoga-6.jpg',
    buttonText: 'JOIN NOW'
  }
];

const CoursesSection: React.FC<CoursesSectionProps> = ({
  title = "Explore Our Yoga Courses For Every Level",
  description = "At Holistic Yog, we offer courses for all levels. Whether you're a beginner or advanced, our sessions help you build strength, flexibility, and inner peace.",
  courses = defaultCourses
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Handle mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    
    const slider = scrollContainerRef.current;
    let isDown = true;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;
    
    const handleMouseMove = (e: MouseEvent) => {
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
        <h2 className="text-2xl font-bold mb-3 text-black">{title}</h2>
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
              className="flex-shrink-0 w-64 rounded-t-full overflow-hidden shadow-sm border border-gray-100"
              style={{ userSelect: 'none' }}
            >
              {/* Rounded top image */}
              <div className="h-48 rounded-t-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                  <p className="text-white">Yoga Image</p>
                </div>
              </div>
              
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-black mb-1">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full text-sm transition-colors w-full">
                  {course.buttonText || 'JOIN NOW'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-6">
        <button className="text-gray-700 font-medium border-b-2 border-gray-700 pb-1 hover:text-gray-900 hover:border-gray-900 transition-colors">
          VIEW ALL COURSES
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

export default CoursesSection;
