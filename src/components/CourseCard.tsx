"use client";
import React from 'react';

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  currentPrice: number;
  originalPrice: number;
  isPremium: boolean;
  isBestseller: boolean;
  imageType: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  rating,
  reviewCount,
  currentPrice,
  originalPrice,
  isPremium,
  isBestseller,
  imageType,
}) => {
  // Generate star rating display
  const renderStars = () => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={`text-yellow-400 text-sm ${star <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[280px] max-w-[280px]">
      {/* Course Image */}
      <div className="relative h-48 w-full bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200">
          {/* This would be replaced with an actual image in production */}
        </div>
      </div>
      
      {/* Course Details */}
      <div className="p-4 flex flex-col">
        <h3 className="font-semibold text-lg text-gray-800 mb-1 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-1">{instructor}</p>
        
        {/* Rating */}
        <div className="flex items-center mb-1">
          <span className="font-bold text-sm text-gray-900 mr-1">{rating.toFixed(1)}</span>
          {renderStars()}
          <span className="text-gray-500 text-xs ml-1">({reviewCount.toLocaleString()})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center mb-2">
          <span className="font-bold text-lg text-gray-900">₹ {currentPrice}</span>
          <span className="text-gray-500 line-through text-sm ml-2">₹{originalPrice}</span>
        </div>
        
        {/* Badges */}
        <div className="flex gap-2">
          {isPremium && (
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">Premium</span>
          )}
          {isBestseller && (
            <span className="border border-gray-800 text-gray-800 text-xs px-3 py-1 rounded-full">Bestseller</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
