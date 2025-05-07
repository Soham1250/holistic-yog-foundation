import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Add empty space to push footer down */}
      <div className="py-10 md:py-10"></div>
      
      {/* Placeholder content - can be replaced with actual content later */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Welcome to Holistic Yog Foundation</h1>
        <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
          Explore our courses, memberships, and conferences to begin your journey toward holistic well-being.
        </p>
      </div>
      
      {/* Additional space */}
      <div className="py-10"></div>
    </div>
  );
}
