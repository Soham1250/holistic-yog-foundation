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
    <div className="flex top-[100px] left-[1078px] w-[351.56px] h-[304.04px] rounded-tl-[300px] rounded-tr-[300px] rounded-br-[4px] rounded-bl-[4px] bg-gray-200">
      <Image
        src={images[0].src}
        alt={images[0].alt}
        width={491.5605163574219}
        height={444.03692626953125}
        top={174}
        left={878}
        border-top-left-radius={300}
        border-top-right-radius={300}
        border-bottom-right-radius={4}
        border-bottom-left-radius={4}
      />
    </div>
  );
};

export default ImagesSection;
