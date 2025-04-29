"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SectionType } from '@/components/ContentDisplay';

interface SectionContextType {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

interface SectionProviderProps {
  children: ReactNode;
  defaultSection?: SectionType;
}

export const SectionProvider: React.FC<SectionProviderProps> = ({ 
  children, 
  defaultSection = 'home' 
}) => {
  const [activeSection, setActiveSection] = useState<SectionType>(defaultSection);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

// Custom hook to use the section context
export const useSectionContext = (): SectionContextType => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
};
