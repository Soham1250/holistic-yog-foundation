"use client";

import React, { useState } from 'react';

interface ComingSoonButtonProps {
  text: string;
  className?: string;
}

const ComingSoonButton: React.FC<ComingSoonButtonProps> = ({ 
  text = "JOIN NOW", 
  className = "bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-8 rounded-full transition-colors"
}) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button
        className={className}
        onClick={() => setShowModal(true)}
      >
        {text}
      </button>
      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl transform transition-all">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon!</h3>
              <p className="text-gray-600 mb-6">
                This feature is currently under development and will be available soon. Thank you for your patience!
              </p>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComingSoonButton;
