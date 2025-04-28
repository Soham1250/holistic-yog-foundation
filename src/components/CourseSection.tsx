"use client";
import React, { useRef, useState } from 'react';
import CourseCard from './CourseCard';

// Sample course data
const coursesData = [
  {
    id: 1,
    title: "Yoga for Beginners",
    instructor: "Vinay Mishra",
    rating: 4.6,
    reviewCount: 12923,
    currentPrice: 499,
    originalPrice: 1499,
    isPremium: true,
    isBestseller: true,
    imageType: 'yoga'
  },
  {
    id: 2,
    title: "Mindful Meditation Yoga",
    instructor: "Vinay Mishra",
    rating: 4.6,
    reviewCount: 12923,
    currentPrice: 499,
    originalPrice: 1499,
    isPremium: true,
    isBestseller: true,
    imageType: 'meditation'
  },
  {
    id: 3,
    title: "Yoga for Stress Relief",
    instructor: "Vinay Mishra",
    rating: 4.6,
    reviewCount: 12923,
    currentPrice: 499,
    originalPrice: 1499,
    isPremium: true,
    isBestseller: true,
    imageType: 'stress'
  },
  {
    id: 4,
    title: "Chair Yoga for Seniors",
    instructor: "Vinay Mishra",
    rating: 4.6,
    reviewCount: 12923,
    currentPrice: 499,
    originalPrice: 1499,
    isPremium: true,
    isBestseller: true,
    imageType: 'chair'
  },
  {
    id: 5,
    title: "Advanced Vinyasa Flow",
    instructor: "Vinay Mishra",
    rating: 4.7,
    reviewCount: 8745,
    currentPrice: 699,
    originalPrice: 1999,
    isPremium: true,
    isBestseller: false,
    imageType: 'vinyasa'
  },
  {
    id: 6,
    title: "Prenatal Yoga Journey",
    instructor: "Vinay Mishra",
    rating: 4.8,
    reviewCount: 5621,
    currentPrice: 599,
    originalPrice: 1699,
    isPremium: true,
    isBestseller: false,
    imageType: 'prenatal'
  }
];

const CourseSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag scrolling functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftValue, setScrollLeftValue] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftValue(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeftValue - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Courses Catalog Search Section */}
      <div className="mb-12 p-6 bg-blue-50 rounded-lg shadow-sm">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Courses Catalog</h2>
        <p className="text-gray-600 max-w-3xl mb-8">
          Explore a diverse range of yoga courses crafted for every level. 
          Whether you're a beginner or an advanced practitioner, find the perfect 
          program to deepen your practice and transform your journey
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="What do you want to learn today?"
            className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="absolute right-0 top-0 h-full bg-[#E05E0E] text-white px-6 rounded-r-full hover:bg-[#d05000] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Most Popular Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6 border-t border-gray-200 pt-6">
          <h3 className="text-2xl font-bold text-gray-800">Most Popular</h3>
          <button 
            onClick={scrollRight}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Scrollable Cards Container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              userSelect: 'none'
            }}
          >
            {coursesData.map(course => (
              <CourseCard
                key={course.id}
                title={course.title}
                instructor={course.instructor}
                rating={course.rating}
                reviewCount={course.reviewCount}
                currentPrice={course.currentPrice}
                originalPrice={course.originalPrice}
                isPremium={course.isPremium}
                isBestseller={course.isBestseller}
                imageType={course.imageType}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
