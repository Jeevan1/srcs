import ContactUsSection from '@/components/ContactUsSection';
import GoogleMap from '@/components/GoogleMap';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Services | Santosh Raj Construction and Suppliers',
  description: 'Santosh Raj Construction and Suppliers',
};

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
