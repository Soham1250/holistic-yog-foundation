"use client";

import React, { useState } from 'react';
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

interface CourseType {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  level: string;
}

export default function AllCoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [courseType, setCourseType] = useState('All');
  const [level, setLevel] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample course data
  const courses: CourseType[] = [
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
      rating: 4.9,
      reviewCount: 3456,
      price: 749,
      originalPrice: 1849,
      image: '/images/pexels-prasanthinturi-1051838.jpg',
      category: 'Yoga',
      level: 'Advanced'
    },
    {
      id: '13',
      title: 'Prenatal Yoga',
      instructor: 'Priya Sharma',
      rating: 4.8,
      reviewCount: 8765,
      price: 599,
      originalPrice: 1599,
      image: '/images/pexels-olly-917732.jpg',
      category: 'Yoga',
      level: 'All Levels'
    },
    {
      id: '14',
      title: 'Yoga for Seniors',
      instructor: 'Deepak Verma',
      rating: 4.7,
      reviewCount: 9432,
      price: 549,
      originalPrice: 1549,
      image: '/images/pexels-kampus-6698513.jpg',
      category: 'Yoga',
      level: 'Beginner'
    },
    {
      id: '15',
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
      id: '16',
      title: 'Yoga for Stress Relief',
      instructor: 'Rahul Kumar',
      rating: 4.7,
      reviewCount: 9432,
      price: 549,
      originalPrice: 1549,
      image: '/images/pexels-prasanthinturi-1051838.jpg',
      category: 'Yoga',
      level: 'All Levels'
    },
    {
      id: '17',
      title: 'Yoga for Seniors',
      instructor: 'Deepak Verma',
      rating: 4.7,
      reviewCount: 9432,
      price: 549,
      originalPrice: 1549,
      image: '/images/pexels-kampus-6698513.jpg',
      category: 'Yoga',
      level: 'Beginner'
    },
    {
      id: '18',
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
      id: '19',
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
      id: '20',
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
      id: '21',
      title: 'Yoga for Back Pain',
      instructor: 'Nisha Joshi',
      rating: 4.8,
      reviewCount: 7654,
      price: 599,
      originalPrice: 1599,
      image: '/images/pexels-olly-3775593.jpg',
      category: 'Yoga',
      level: 'All Levels'
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
  const coursesPerPage = 6;
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen bg-white pb-12">
      {/* Header with search */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-black mb-2">Courses Catalog</h1>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Explore a diverse range of yoga courses crafted for every level. Whether you're a beginner or an advanced practitioner, find the perfect program to deepen your practice and transform your journey.
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-lg mb-8 text-black">
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="w-full py-3 px-4 pr-10 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-orange-500 rounded-r-full text-white hover:bg-orange-600 transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Most Popular Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Most Popular</h2>
              <button className="text-gray-600 hover:text-gray-800">
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
            
            {/* Course grid - horizontal scrolling for popular courses */}
            <div className="flex overflow-x-auto pb-4 hide-scrollbar space-x-6">
              {courses.slice(0, 4).map((course) => (
                <div 
                  key={course.id} 
                  className="flex-shrink-0 w-64 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40">
                    <Image 
                      src={course.image} 
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 256px"
                      priority
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
                    <div className="flex space-x-2 mt-3">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-1 px-3 rounded-full transition-colors flex-1">
                        Bestseller
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
          </div>

          {/* Highlighted Information Section */}
          <div className="bg-orange-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Master timeless yoga practices</h3>
                  <p className="text-sm text-gray-600">with expert-led sessions and guided courses.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Designed for all skill levels</h3>
                  <p className="text-sm text-gray-600">– beginner to Advanced</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Combination of Traditional and Modern Techniques</h3>
                  <p className="text-sm text-gray-600">for holistic wellness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Course Type Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Course Type</h2>
          <div className="flex flex-wrap gap-4">
            <select
              className="w-full sm:w-40 py-2 px-3 border border-gray-300 bg-white rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              value={courseType}
              onChange={(e) => setCourseType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Yoga">Yoga</option>
              <option value="Meditation">Meditation</option>
              <option value="Relaxation">Relaxation</option>
            </select>
            
            <select
              className="w-full sm:w-40 py-2 px-3 border border-gray-300 bg-white rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="All Levels">All Levels</option>
            </select>
          </div>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {currentCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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
