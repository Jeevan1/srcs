import ContactUsSection from '@/components/ContactUsSection';
import Hero from '@/components/Hero';
import ProjectSection from '@/components/ProjectSection';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home | Santosh Raj Construction and Suppliers',
  description: 'Santosh Raj Construction and Suppliers',
};

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <Services />
      <ProjectSection />
      <Testimonials />
      <ContactUsSection />
    </div>
  );
};

export default HomePage;
