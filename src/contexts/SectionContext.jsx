"use client";

import React, { createContext, useContext, useState } from 'react';

// Define SectionType as a JavaScript object instead of TypeScript enum
const SectionTypes = {
  home: 'home',
  banner: 'banner',
  heading: 'heading',
  images: 'images',
  aboutUs: 'aboutUs',
  services: 'services',
  instructors: 'instructors',
  whyUs: 'whyUs',
  membership: 'membership',
  courses: 'courses'
};

const SectionContext = createContext(undefined);

export const SectionProvider = ({ 
  children, 
  defaultSection = 'home' 
}) => {
  const [activeSection, setActiveSection] = useState(defaultSection);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

// Custom hook to use the section context
export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
};

// Export the SectionTypes object for use in other components
export { SectionTypes };
