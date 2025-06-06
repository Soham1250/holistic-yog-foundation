"use client";

import React from 'react';
import Image from 'next/image';

const defaultImages = [
  {
    id: '1',
    src: '/images/Figma/IMAGE-LANDING.png',
    alt: 'Yoga pose by the ocean',
  },
  {
    id: '2',
    src: '/images/Figma/Rectangle10.png',
    alt: 'Meditation session',
  }
];

const ImagesSection = ({
  images = defaultImages
}) => {
  return (
    <div className="relative w-full max-w-[351px] h-auto mx-auto md:mx-0">
      <div className="relative w-full pb-[125%] overflow-hidden rounded-t-full">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(max-width: 768px) 90vw, 351px"
          className="object-cover rounded-t-full"
          priority
        />
      </div>
    </div>
  );
};

export default ImagesSection;
