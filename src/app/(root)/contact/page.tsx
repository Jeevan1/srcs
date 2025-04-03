import ContactUsSection from '@/components/ContactUsSection';
import GoogleMap from '@/components/GoogleMap';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="pb-8">
      <ContactUsSection />
      <div className="py-12">
        <h1 className="mb-8 text-center text-xl font-bold">Location</h1>
        <GoogleMap />
      </div>
    </div>
  );
};

export default ContactPage;
