"use client";

import React, { useEffect } from 'react';

import { useSectionContext } from '@/contexts/SectionContext';
import HeadingSection from '@/components/sections/HeadingSection';
import ImagesSection from '@/components/sections/ImagesSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BannerSection from '@/components/sections/BannerSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import MembershipSection from '@/components/sections/MembershipSection';

export default function Home() {
  const { setActiveSection } = useSectionContext();

  // Set the active section when this page loads
  useEffect(() => {
    setActiveSection('home');
  }, [setActiveSection]);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <HeadingSection />
        </div>
        <div className="md:w-1/3">
          <ImagesSection />
        </div>
      </div>
      
      {/* Display remaining sections */}
      <BannerSection />
      <AboutUsSection />
      <ServicesSection />
      <WhyUsSection />
      <MembershipSection />
    </div>
  );
}
