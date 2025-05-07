"use client";

import React from 'react';
import HeadingSection from './sections/HeadingSection';
import ImagesSection from './sections/ImagesSection';
import AboutUsSection from './sections/AboutUsSection';
import ServicesSection from './sections/ServicesSection';
import CoursesSection from './sections/CoursesSection';
import BannerSection from './sections/BannerSection';
import InstructorsSection from './sections/InstructorsSection';
import WhyUsSection from './sections/WhyUsSection';
import MembershipSection from './sections/MembershipSection';

// Define section types as string constants
export const SECTION_TYPES = {
  HOME: 'home',
  ABOUT: 'about',
  SERVICES: 'services',
  COURSES: 'courses',
  INSTRUCTORS: 'instructors',
  WHY_US: 'why-us',
  MEMBERSHIP: 'membership',
  BANNER: 'banner'
};

const ContentDisplay = ({ activeSection = 'home' }) => {
  // Function to determine if a section should be visible
  const isSectionVisible = (section) => {
    // Home page shows all sections
    if (activeSection === 'home') {
      return true;
    }
    
    // Otherwise, only show the active section
    return section === activeSection;
  };

  return (
    <div className="space-y-8">
      {isSectionVisible('home') && (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <HeadingSection />
          </div>
          <div className="md:w-1/3">
            <ImagesSection />
          </div>
        </div>
      )}
      
      {isSectionVisible('about') && <AboutUsSection />}
      {isSectionVisible('services') && <ServicesSection />}
      {isSectionVisible('courses') && <CoursesSection />}
      {isSectionVisible('banner') && <BannerSection />}
      {isSectionVisible('instructors') && <InstructorsSection />}
      {isSectionVisible('why-us') && <WhyUsSection />}
      {isSectionVisible('membership') && <MembershipSection />}
    </div>
  );
};

export default ContentDisplay;
