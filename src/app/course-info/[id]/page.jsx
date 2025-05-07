'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, StarIcon, ClockIcon, ChartBarIcon, UserGroupIcon, BookOpenIcon, CheckIcon, SparklesIcon, QuestionMarkCircleIcon, ClipboardDocumentListIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function CourseInfoPage({ params }) {
  const [course, setCourse] = useState(null);
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
        const mockCourse = {
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
            'Certificate of completion',
            'One-on-one feedback session with instructor'
          ]
        };
        
        setCourse(mockCourse);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [params.id]);

  // Generate stars for rating
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            className={`w-4 h-4 ${star <= Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/all-courses" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : course ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: Course details */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                <div className="flex items-center">
                  {renderStars(course.rating)}
                  <span className="ml-2 text-sm text-gray-600">{course.rating} ({course.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <UserGroupIcon className="w-4 h-4 mr-1" />
                  {course.students?.toLocaleString()} students
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ChartBarIcon className="w-4 h-4 mr-1" />
                  {course.level}
                </div>
              </div>
              
              <div className="relative w-full h-0 pb-[56.25%] mb-6 rounded-lg overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <button className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                    <PlayIcon className="w-8 h-8 text-blue-600 ml-1" />
                  </button>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-8">
                  {['overview', 'curriculum', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                        activeTab === tab
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Tab content */}
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Description</h2>
                  <p className="text-gray-700 mb-6">{course.description}</p>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {course.features?.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Instructor</h2>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-gray-500 text-xl font-semibold">
                        {course.instructor.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{course.instructor}</h3>
                      <p className="text-sm text-gray-600">Yoga & Meditation Expert</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'curriculum' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Course Curriculum</h2>
                    <div className="text-sm text-gray-600">
                      <BookOpenIcon className="w-4 h-4 inline mr-1" />
                      {course.lessons} lessons
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {course.curriculum?.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                          <h3 className="font-medium text-gray-900">{section.title}</h3>
                          <div className="text-sm text-gray-600">{section.duration}</div>
                        </div>
                        <div className="divide-y divide-gray-200">
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="px-4 py-3 flex justify-between items-center">
                              <div className="flex items-center">
                                {item.preview ? (
                                  <button className="mr-3 text-blue-600">
                                    <PlayIcon className="w-5 h-5" />
                                  </button>
                                ) : (
                                  <ClipboardDocumentListIcon className="w-5 h-5 mr-3 text-gray-400" />
                                )}
                                <span className={item.preview ? 'text-blue-600' : 'text-gray-700'}>
                                  {item.title}
                                  {item.preview && <span className="ml-2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded">Preview</span>}
                                </span>
                              </div>
                              <div className="text-sm text-gray-600">{item.duration}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="text-4xl font-bold text-gray-900 mr-4">{course.rating}</div>
                      <div>
                        <div className="flex mb-1">
                          {renderStars(course.rating)}
                        </div>
                        <div className="text-sm text-gray-600">Course Rating</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="text-sm text-gray-600 mr-2">{course.reviewCount.toLocaleString()} reviews</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
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
            
            {/* Right column: Course card */}
            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-gray-900">₹{course.price}</div>
                      <div className="text-base text-gray-500 line-through">₹{course.originalPrice}</div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>Limited time offer</span>
                    </div>
                    
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors mb-3">
                      Enroll Now
                    </button>
                    
                    <button className="w-full border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      Add to Wishlist
                    </button>
                    
                    <div className="mt-6">
                      <h3 className="font-medium text-gray-900 mb-3">This course includes:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-600">
                          <ClockIcon className="w-4 h-4 mr-2 text-gray-400" />
                          {course.duration} of on-demand video
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <ClipboardDocumentListIcon className="w-4 h-4 mr-2 text-gray-400" />
                          {course.lessons} lessons
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <SparklesIcon className="w-4 h-4 mr-2 text-gray-400" />
                          Full lifetime access
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <UserGroupIcon className="w-4 h-4 mr-2 text-gray-400" />
                          Access on mobile and TV
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckIcon className="w-4 h-4 mr-2 text-gray-400" />
                          Certificate of completion
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button className="w-full flex items-center justify-center text-sm text-blue-600 hover:text-blue-800">
                        <QuestionMarkCircleIcon className="w-4 h-4 mr-2" />
                        Have a question? Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course not found</h2>
            <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
            <Link href="/all-courses" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ChevronRightIcon className="w-4 h-4 mr-2" />
              Browse all courses
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// Simple play icon component
function PlayIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
  );
}
