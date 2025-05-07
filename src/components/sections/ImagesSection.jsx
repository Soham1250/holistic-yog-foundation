"use client";

import React from 'react';
import Image from 'next/image';

const defaultImages = [
  {
    id: '1',
    src: '/images/pexels-shu-lei-2809836-13849063.jpg',
    alt: 'Yoga pose by the ocean',
    width: 400,
    height: 300
  },
  {
    id: '2',
    src: '/images/pexels-gabby-k-5384538.jpg',
    alt: 'Meditation session',
    width: 400,
    height: 300
  }
];

const ImagesSection = ({
  images = defaultImages
}) => {
  return (
    <div className="bg-white rounded-lg p-6 h-full">
      <div className="grid grid-cols-1 gap-4 h-full">
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Decorative curved line */}
              <div className="absolute top-0 right-0 w-3/4 h-full">
                <div className="absolute top-0 right-0 w-1 h-full bg-orange-500 rounded-full"
                  style={{
                    clipPath: 'ellipse(100% 50% at 100% 50%)',
                    transform: 'scaleX(200) translateX(49%)'
                  }}>
                </div>
              </div>

              {/* First yoga image - person in meditation */}
              <div className="absolute bottom-0 left-0 w-1/2 h-2/3">
                <div className="relative w-full h-full rounded-tr-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-red-400 flex items-center justify-center">
                    <img 
                      src={images[1].src} 
                      alt={images[1].alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={images[1].width}
                      height={images[1].height}
                    />
                  </div>
                </div>
              </div>

              {/* Second yoga image - ocean view */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4">
                <div className="relative w-full h-full rounded-bl-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                    <img 
                      src={images[0].src} 
                      alt={images[0].alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={images[0].width}
                      height={images[0].height}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
