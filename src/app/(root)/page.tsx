import ContactUsSection from '@/components/ContactUsSection';
import Hero from '@/components/Hero';
import ProjectSection from '@/components/ProjectSection';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import React from 'react';

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
