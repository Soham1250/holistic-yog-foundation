'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, StarIcon, ClockIcon, ChartBarIcon, UserGroupIcon, BookOpenIcon, CheckIcon } from '@heroicons/react/24/outline';

// Define course type
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
  description?: string;
  duration?: string;
  students?: number;
  lessons?: number;
  curriculum?: {
    title: string;
    duration: string;
    items: {
      title: string;
      duration: string;
      preview?: boolean;
    }[];
  }[];
  features?: string[];
}

export default function CourseInfoPage({ params }: { params: { id: string } }) {
  const [course, setCourse] = useState<CourseType | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // This would be replaced with an actual API call in the future
    const fetchCourse = async () => {
      setLoading(true);
      try {
        // Simulating API call with timeout
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data - would be replaced with actual API response
        const mockCourse: CourseType = {
          id: params.id,
          title: 'Evening Relaxation',
          instructor: 'Deepak Verma',
          rating: 4.6,
          reviewCount: 7890,
          price: 499,
          originalPrice: 1499,
          image: '/images/pexels-vlada-karpovich-4534689.jpg',
          category: 'Relaxation',
          level: 'All Levels',
          description: 'This evening relaxation course is crafted to help you unwind, de-stress, and recharge after a long day. This 8-week guided program focuses on flexibility, mental clarity, and restorative practices through mindful breathing and restorative poses, preparing you for a peaceful night\'s rest. Perfect for all levels, each session builds progressively to enhance your evening routine.',
          duration: '8 Weeks',
          students: 25000,
          lessons: 24,
          curriculum: [
            {
              title: 'Week 1: Introduction to Evening Relaxation',
              duration: '3 hours',
              items: [
                { title: 'Understanding the Importance of Evening Relaxation', duration: '15 min', preview: true },
                { title: 'Basic Breathing Techniques', duration: '20 min' },
                { title: 'Simple Stretching Sequence', duration: '25 min' },
                { title: 'Guided Relaxation Meditation', duration: '15 min' }
              ]
            },
            {
              title: 'Week 2: Deepening Your Practice',
              duration: '3 hours',
              items: [
                { title: 'Progressive Muscle Relaxation', duration: '20 min', preview: true },
                { title: 'Gentle Yoga Flow for Evening', duration: '30 min' },
                { title: 'Mindfulness Techniques for Better Sleep', duration: '25 min' },
                { title: 'Restorative Poses with Props', duration: '25 min' }
              ]
            },
            {
              title: 'Week 3: Focus on Stress Relief',
              duration: '3 hours',
              items: [
                { title: 'Identifying Stress Patterns', duration: '15 min' },
                { title: 'Yoga Nidra Introduction', duration: '30 min', preview: true },
                { title: 'Gentle Back and Neck Release', duration: '25 min' },
                { title: 'Calming Visualization Practices', duration: '20 min' }
              ]
            }
          ],
          features: [
            'Lifetime access to all course materials',
            'Downloadable relaxation audio guides',
            'Printable evening routine checklists',
            'Access to private community forum',
            'Monthly live Q&A sessions with instructor',
            'Certificate of completion'
          ]
        };
        
        setCourse(mockCourse);
      } catch (error) {
        console.error('Error fetching course:', error);
        // Handle error state
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Link href="/all-courses" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Back to All Courses
        </Link>
      </div>
    );
  }

  // Generate stars for rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon 
          key={i} 
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <Link href="/all-courses" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeftIcon className="w-4 h-4 mr-1" />
            Back to All Courses
          </Link>
        </div>
      </div>

      {/* Course header */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Course image */}
            <div className="md:w-1/3">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            
            {/* Right: Course details */}
            <div className="md:w-2/3">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {course.category}
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {course.level}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{course.title}</h1>
              
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(course.rating)}
                </div>
                <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                <span className="text-sm text-gray-500 ml-1">({course.reviewCount.toLocaleString()} reviews)</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <div className="flex items-center mr-4">
                  <UserGroupIcon className="w-4 h-4 mr-1" />
                  <span>{course.students?.toLocaleString()} students</span>
                </div>
                <div className="flex items-center mr-4">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpenIcon className="w-4 h-4 mr-1" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-gray-900">₹{course.price}</span>
                <span className="text-lg text-gray-500 line-through ml-2">₹{course.originalPrice}</span>
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                </span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
                  Enroll Now
                </button>
                <button className="border border-gray-300 text-gray-700 font-medium py-2 px-6 rounded-full hover:bg-gray-50 transition-colors">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course tabs */}
      <div className="bg-white border-t border-b mt-6">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button 
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 ${activeTab === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 ${activeTab === 'curriculum' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('curriculum')}
            >
              Curriculum
            </button>
            <button 
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 ${activeTab === 'instructor' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('instructor')}
            >
              Instructor
            </button>
            <button 
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 ${activeTab === 'reviews' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Course Overview</h2>
            <p className="text-gray-700 mb-6">
              {course.description}
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {course.features?.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <ClockIcon className="w-5 h-5 text-blue-500 mr-2" />
                  <h4 className="font-medium text-gray-900">Duration</h4>
                </div>
                <p className="text-gray-700">{course.duration}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <ChartBarIcon className="w-5 h-5 text-blue-500 mr-2" />
                  <h4 className="font-medium text-gray-900">Level</h4>
                </div>
                <p className="text-gray-700">{course.level}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <BookOpenIcon className="w-5 h-5 text-blue-500 mr-2" />
                  <h4 className="font-medium text-gray-900">Lessons</h4>
                </div>
                <p className="text-gray-700">{course.lessons} lessons</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'curriculum' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-900">Course Curriculum</h2>
              <p className="text-gray-600">
                {course.lessons} lessons • {course.duration} total
              </p>
            </div>
            
            <div className="divide-y">
              {course.curriculum?.map((section, index) => (
                <div key={index} className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                    <span className="text-sm text-gray-600">{section.duration}</span>
                  </div>
                  
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <PlayIcon className="w-5 h-5 text-gray-400 mr-3" />
                          <span className="text-gray-800">{item.title}</span>
                          {item.preview && (
                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                              Preview
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-600">{item.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'instructor' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About the Instructor</h2>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-white">
                    {course.instructor.charAt(0)}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{course.instructor}</h3>
                <p className="text-gray-600 mb-2">Yoga & Meditation Expert</p>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="flex mr-2">
                    {renderStars(4.8)}
                  </div>
                  <span>4.8 Instructor Rating</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              {course.instructor} is a certified yoga instructor with over 10 years of experience in teaching various yoga styles and meditation techniques. Specializing in evening relaxation and stress relief practices, they have helped thousands of students improve their sleep quality and overall well-being.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Courses</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900">50,000+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="md:w-1/3 flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
                <div className="text-5xl font-bold text-gray-900 mb-2">{course.rating}</div>
                <div className="flex mb-2">
                  {renderStars(course.rating)}
                </div>
                <div className="text-gray-600">{course.reviewCount.toLocaleString()} reviews</div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Rating Distribution</h3>
                
                {[5, 4, 3, 2, 1].map(star => {
                  // Calculate percentage based on star rating
                  const percentage = star === 5 ? 78 : 
                                    star === 4 ? 15 : 
                                    star === 3 ? 5 : 
                                    star === 2 ? 1.5 : 0.5;
                  
                  return (
                    <div key={star} className="flex items-center mb-2">
                      <div className="flex items-center w-24">
                        <span className="text-sm text-gray-600 mr-2">{star}</span>
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className="bg-yellow-400 h-2.5 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12">{percentage}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Reviews</h3>
              
              <div className="space-y-6">
                {/* Sample reviews - would be replaced with actual data */}
                {[
                  {
                    name: 'Aarav Patel',
                    rating: 5,
                    date: '2 weeks ago',
                    comment: 'This course has completely transformed my evening routine. The instructor explains everything clearly and the pace is perfect for beginners. Highly recommended!'
                  },
                  {
                    name: 'Priya Singh',
                    rating: 4,
                    date: '1 month ago',
                    comment: 'Great course with practical techniques that are easy to implement. I\'ve noticed improved sleep quality after just two weeks of following the program.'
                  },
                  {
                    name: 'Rahul Sharma',
                    rating: 5,
                    date: '2 months ago',
                    comment: 'Excellent content and structure. The instructor is knowledgeable and engaging. The progressive approach helped me build a sustainable evening practice.'
                  }
                ].map((review, index) => (
                  <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    <div className="flex mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="border border-gray-300 text-gray-700 font-medium py-2 px-6 rounded-full hover:bg-gray-50 transition-colors">
                  Load More Reviews
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Simple play icon component
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
  );
}
