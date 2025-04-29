import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Welcome to Holistic Yog Foundation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the path to holistic wellness through ancient yogic practices and modern wellness techniques.
          </p>
        </div>
        
        {/* Hero image placeholder */}
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-300 flex items-center justify-center">
            <p className="text-white text-2xl font-bold">Hero Image Placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
}
