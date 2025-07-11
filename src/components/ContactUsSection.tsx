import React from 'react';
import SectionHeading from './SectionHeading';
import GoogleMap from './GoogleMap';
import { AlarmClockCheck, MailCheck, MapPinned, Phone } from 'lucide-react';

const ContactUsSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Contact Us"
          description="We're here to help! Reach out to us for any inquiries, project proposals, or collaboration opportunities."
        />
        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            className="rounded-lg border border-gray-100 bg-white p-6 shadow-md"
            data-aos="fade-right"
          >
            <div className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold md:text-2xl">
                Contact Information
              </h2>
              <p className="text-gray-600">
                Reach out to us through any of these channels.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="flex items-center gap-1.5 font-medium text-primary">
                  <MapPinned size={16} />
                  Address
                </h3>
                <p className="text-gray-500">Chapali, Kathmandu</p>
              </div>
              <div>
                <h3 className="flex items-center gap-1.5 font-medium text-primary">
                  <Phone size={16} />
                  Phone
                </h3>
                <p className="text-gray-500">(+977) 9860316903</p>
              </div>
              <div>
                <h3 className="flex items-center gap-1.5 font-medium text-primary">
                  <MailCheck size={16} />
                  Email
                </h3>
                <p className="text-gray-500">srconstruction@gmail.com</p>
              </div>
              <div>
                <h3 className="flex items-center gap-1.5 font-medium text-primary">
                  <AlarmClockCheck size={16} /> Hours
                </h3>
                <p className="text-gray-500">
                  Opens 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="rounded-lg border border-gray-100 bg-white shadow-md"
            data-aos="fade-left"
          >
            {/* <div className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold md:text-2xl">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Fill out this form and we&#39;ll get back to you ASAP
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input label="Name" placeholder="John Doe" />
                <Input label="Email" placeholder="your.email@example.com" />
                <Input label="Phone" placeholder="123-456-7890" />
                <Input label="Subject" placeholder="What is this regarding?" />
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-black">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    className=" mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-primary sm:text-sm"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="text-md w-full cursor-pointer rounded-lg bg-gray-200 py-2 font-semibold text-black/70 transition hover:bg-primary hover:text-white hover:shadow-md"
              >
                Send Message
              </button>
            </form> */}
            <div className="h-96 md:h-full">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
