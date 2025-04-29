"use client";

import React from 'react';

interface CatalogueItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price?: number;
  imageUrl?: string;
}

interface CatalogueSectionProps {
  title?: string;
  items?: CatalogueItem[];
  category?: string;
}

const defaultItems: CatalogueItem[] = [
  {
    id: '1',
    title: 'Hatha Yoga for Beginners',
    description: 'A gentle introduction to the practice of Hatha Yoga, suitable for all levels.',
    category: 'courses',
    price: 499
  },
  {
    id: '2',
    title: 'Advanced Meditation Techniques',
    description: 'Deepen your meditation practice with advanced techniques and guidance.',
    category: 'courses',
    price: 699
  },
  {
    id: '3',
    title: 'Yoga Teacher Training',
    description: 'Comprehensive training program for aspiring yoga teachers.',
    category: 'programs',
    price: 1499
  },
  {
    id: '4',
    title: 'Wellness Retreat',
    description: 'A weekend retreat focused on yoga, meditation, and holistic wellness.',
    category: 'programs',
    price: 999
  }
];

const CatalogueSection: React.FC<CatalogueSectionProps> = ({
  title = "Explore Our Offerings",
  items = defaultItems,
  category
}) => {
  // Filter items by category if specified
  const filteredItems = category 
    ? items.filter(item => item.category === category)
    : items;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-black">{title}</h2>
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-300 flex items-center justify-center">
                <span className="text-white font-medium">Course Image</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium">₹{item.price}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-hover transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No items available in this category.</p>
      )}
    </div>
  );
};

export default CatalogueSection;
