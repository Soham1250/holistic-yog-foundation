"use client";

import React, { useState } from 'react';
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

export default function AllCoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [courseType, setCourseType] = useState('All');
  const [level, setLevel] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample course data
  const courses = [
    {
      id: '1',
      title: 'Yoga for Beginners',
      instructor: 'Vinay Mishra',
      rating: 4.6,
      reviewCount: 12923,
      price: 499,
      originalPrice: 1499,
      image: '/images/pexels-olly-3775593.jpg',
      category: 'Yoga',
      level: 'Beginner'
    },
    {
      id: '2',
      title: 'Mindful Meditation Yoga',
      instructor: 'Priya Sharma',
      rating: 4.8,
      reviewCount: 8765,
      price: 599,
      originalPrice: 1599,
      image: '/images/pexels-olly-917732.jpg',
      category: 'Meditation',
      level: 'Intermediate'
    },
    {
      id: '3',
      title: 'Yoga for Stress Relief',
      instructor: 'Rahul Kumar',
      rating: 4.7,
      reviewCount: 9432,
      price: 549,
      originalPrice: 1449,
      image: '/images/pexels-prasanthinturi-1051838.jpg',
      category: 'Yoga',
      level: 'All Levels'
    },
    {
      id: '4',
      title: 'Chair Yoga for Seniors',
      instructor: 'Ananya Patel',
      rating: 4.9,
      reviewCount: 5678,
      price: 649,
      originalPrice: 1699,
      image: '/images/pexels-kampus-6698513.jpg',
      category: 'Yoga',
      level: 'Beginner'
    },
    {
      id: '5',
      title: 'Evening Relaxation',
      instructor: 'Deepak Verma',
      rating: 4.6,
      reviewCount: 7890,
      price: 499,
      originalPrice: 1499,
      image: '/images/pexels-vlada-karpovich-4534689.jpg',
      category: 'Relaxation',
      level: 'All Levels'
    },
    {
      id: '6',
      title: 'Morning Energizer',
      instructor: 'Sonali Gupta',
      rating: 4.7,
      reviewCount: 6543,
      price: 579,
      originalPrice: 1579,
      image: '/images/pexels-yankrukov-8436715.jpg',
      category: 'Yoga',
      level: 'Intermediate'
    },
    {
      id: '7',
      title: 'Hatha Yoga Fundamentals',
      instructor: 'Arjun Singh',
      rating: 4.8,
      reviewCount: 8765,
      price: 629,
      originalPrice: 1629,
      image: '/images/pexels-gabby-k-5384538.jpg',
      category: 'Yoga',
      level: 'Advanced'
    },
    {
      id: '8',
      title: 'Vinyasa Flow',
      instructor: 'Meera Kapoor',
      rating: 4.9,
      reviewCount: 4321,
      price: 699,
      originalPrice: 1799,
      image: '/images/pexels-gustavo-fring-3984340.jpg',
      category: 'Yoga',
      level: 'All Levels'
    },
    {
      id: '9',
      title: 'Pranayama Breathing',
      instructor: 'Vikram Mehta',
      rating: 4.7,
      reviewCount: 5432,
      price: 549,
      originalPrice: 1549,
      image: '/images/pexels-yankrukov-8436587.jpg',
      category: 'Meditation',
      level: 'Intermediate'
    },
    {
      id: '10',
      title: 'Yoga for Back Pain',
      instructor: 'Nisha Joshi',
      rating: 4.8,
      reviewCount: 7654,
      price: 599,
      originalPrice: 1599,
      image: '/images/pexels-olly-3775593.jpg',
      category: 'Yoga',
      level: 'All Levels'
    },
    {
      id: '11',
      title: 'Mindfulness Meditation',
      instructor: 'Rajat Khanna',
      rating: 4.6,
      reviewCount: 6789,
      price: 529,
      originalPrice: 1529,
      image: '/images/pexels-olly-917732.jpg',
      category: 'Meditation',
      level: 'Beginner'
    },
    {
      id: '12',
      title: 'Ashtanga Yoga',
      instructor: 'Kavita Sharma',
      rating: 4.7,
      reviewCount: 5432,
      price: 649,
      originalPrice: 1649,
      image: '/images/pexels-prasanthinturi-1051838.jpg',
      category: 'Yoga',
      level: 'Advanced'
    }
  ];

  // Filter courses based on search query, course type, and level
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = courseType === 'All' || course.category === courseType;
    const matchesLevel = level === 'All' || course.level === level;
    
    return matchesSearch && matchesType && matchesLevel;
  });

  // Pagination
  const coursesPerPage = 9;
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  
  // Generate page numbers for pagination
  let pageNumbers = [];
  if (totalPages <= 7) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= 4) {
      pageNumbers = [1, 2, 3, 4, 5, 6, 7];
    } else if (currentPage >= totalPages - 3) {
      pageNumbers = Array.from({ length: 7 }, (_, i) => totalPages - 6 + i);
    } else {
      pageNumbers = [
        currentPage - 3,
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        currentPage + 3
      ];
    }
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Yoga Courses</h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover a wide range of yoga courses designed to help you improve your physical and mental well-being.
              From beginners to advanced practitioners, we have something for everyone.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for courses or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Course Listing Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="course-type" className="block text-sm font-medium text-gray-700 mb-1">Course Type</label>
            <select
              id="course-type"
              value={courseType}
              onChange={(e) => setCourseType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            >
              <option value="All">All Types</option>
              <option value="Yoga">Yoga</option>
              <option value="Meditation">Meditation</option>
              <option value="Relaxation">Relaxation</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">Level</label>
            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">Showing {filteredCourses.length} courses</p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCourses.map(course => (
            <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-gray-800 mr-1">{course.rating}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({course.reviewCount.toLocaleString()})</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-800">₹{course.price}</span>
                  <span className="text-xs text-gray-500 line-through ml-2">₹{course.originalPrice}</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <button className="bg-orange-500 text-white text-xs font-medium py-1 px-3 rounded-full hover:bg-orange-600 transition-colors flex-1">
                    
                  </button>
                  <button className="border border-gray-300 text-gray-700 text-xs font-medium py-1 px-3 rounded-full hover:bg-gray-50 transition-colors flex-1">
                    <Link href={`/course-info/${course.id}`} className="block w-full h-full">
                      Quickview
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav className="flex items-center">
            <button 
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500 hover:bg-blue-50'}`}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            
            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`mx-1 w-8 h-8 flex items-center justify-center rounded-full ${
                  currentPage === number 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                {number}
              </button>
            ))}
            
            {totalPages > 7 && (
              <>
                <span className="mx-1">...</span>
                <button
                  onClick={() => paginate(totalPages)}
                  className="mx-1 w-8 h-8 flex items-center justify-center rounded-full text-gray-700 hover:bg-blue-50"
                >
                  {totalPages}
                </button>
              </>
            )}
            
            <button 
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-500 hover:bg-blue-50'}`}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>

      {/* Custom styles for hiding scrollbar */}
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
}
