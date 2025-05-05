"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface ComingSoonButtonProps {
  text: string;
  className?: string;
}

const ComingSoonButton: React.FC<ComingSoonButtonProps> = ({ 
  text = "JOIN NOW", 
  className = "bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-8 rounded-full transition-colors"
}) => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/membership');
  };
  
  return (
    <button
      className={className}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ComingSoonButton;
