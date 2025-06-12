import React from 'react';
import Image from 'next/image';

// Sample image data - replace with your actual images
const galleryImages = [
  { id: 1, 
    src: '/images/gallery/image1.jpg', 
    alt: 'Yoga Session 1' 
  },
  { id: 2, 
    src: '/images/gallery/image2.jpg', 
    alt: 'Yoga Session 2' 
  },
  { id: 3, 
    src: '/images/gallery/image3.jpg', 
    alt: 'Yoga Session 3' 
  },
  { id: 4, 
    src: '/images/gallery/image4.jpg', 
    alt: 'Yoga Session 4' 
  },
  { id: 5, 
    src: '/images/gallery/image5.jpg', 
    alt: 'Yoga Session 5' 
  },
  { id: 6, 
    src: '/images/gallery/image6.jpg', 
    alt: 'Yoga Session 6' 
  },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-[#FDF8F3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore moments from our yoga sessions, workshops, and community events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg bg-white border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
