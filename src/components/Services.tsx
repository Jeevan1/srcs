import { Building, HardHat, Truck } from 'lucide-react';
import data from '../utility/data.json';
import SectionHeading from './SectionHeading';

const Services = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="container">
        <SectionHeading
          title="Our Expertise"
          subtitle="Supplying the Future of Construction"
          description="Whether you're building a home or a high-rise, we offer everything you need — reliable service, premium materials, and on-time delivery."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service, index) => (
            <div
              key={index}
              className="rounded-md border-none bg-gray-50 p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {service.icon === 'HardHat' ? (
                    <HardHat className="h-6 w-6 text-primary" />
                  ) : service.icon === 'Building' ? (
                    <Building className="h-6 w-6 text-primary" />
                  ) : (
                    <Truck className="h-6 w-6 text-primary" />
                  )}
                </div>
                <h2 className="text-xl font-bold md:text-2xl">
                  {service.title}
                </h2>
                <p className="mt-1 text-gray-600">{service.description}</p>
              </div>
              <div className="mt-4">
                <ul className="list-inside list-disc space-y-0.5 text-gray-600">
                  <li>Free consultation</li>
                  <li>Quality materials</li>
                  <li>Expert craftsmanship</li>
                  <li>On-Time Delivery</li>
                  <li>Bulk Order Support</li>
                  <li>Trusted Supplier Network</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
