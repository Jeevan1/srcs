import Faq from '@/components/Faq';
import SectionHeading from '@/components/SectionHeading';
import StartProject from '@/components/StartProject';
import { Service } from '@/types';
import {
  ArrowRight,
  Building,
  Factory,
  Hammer,
  Home,
  LucideProps,
} from 'lucide-react';
import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

const servicesData: Service[] = [
  {
    id: 'residential',
    title: 'Residential Construction',
    description:
      'Custom homes, renovations, and additions tailored to your lifestyle and preferences.',
    icon: Home,
    features: [
      'Custom home design and construction',
      'Home renovations and remodeling',
      'Additions and extensions',
      'Luxury home construction',
      'Energy-efficient home solutions',
    ],
    faqs: [
      {
        id: 1,
        question: 'How long does it typically take to build a custom home?',
        answer:
          'The timeline for a custom home varies depending on size, complexity, and other factors. Typically, our custom homes take between 8-14 months from design to completion.',
      },
      {
        id: 2,
        question: 'Do you handle all the permits and approvals?',
        answer:
          'Yes, we manage all aspects of the permitting process, including obtaining necessary approvals from local authorities and ensuring compliance with building codes.',
      },
      {
        id: 3,
        question: 'Can I make changes during the construction process?',
        answer:
          'We accommodate reasonable changes during construction, though significant modifications may impact the timeline and budget. We manage change orders professionally to ensure clear communication.',
      },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description:
      'Office buildings, retail spaces, and restaurants built to the highest standards.',
    icon: Building,
    features: [
      'Office building construction',
      'Retail space development',
      'Restaurant and hospitality construction',
      'Medical facility construction',
      'Tenant improvement projects',
    ],
    faqs: [
      {
        id: 1,
        question:
          'How do you minimize disruption to neighboring businesses during construction?',
        answer:
          'We implement carefully planned construction schedules, noise reduction strategies, and dust control measures. We also maintain open communication with neighboring businesses to address concerns.',
      },
      {
        id: 2,
        question: 'Do you offer design-build services for commercial projects?',
        answer:
          'Yes, we offer comprehensive design-build services that streamline the process from concept to completion, providing a single point of responsibility for your project.',
      },
      {
        id: 3,
        question: 'Can you work with our existing architectural plans?',
        answer:
          'Absolutely. We can work with your architectural plans or collaborate with your chosen architect to bring your commercial vision to life.',
      },
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial Construction',
    description:
      'Factories, warehouses, and production facilities designed for efficiency and durability.',
    icon: Factory,
    features: [
      'Manufacturing plant construction',
      'Warehouse and distribution centers',
      'Industrial retrofitting and upgrades',
      'Clean room and specialized facilities',
      'Heavy equipment foundations',
    ],
    faqs: [
      {
        id: 1,
        question:
          'What experience do you have with specialized industrial requirements?',
        answer:
          'Our team has extensive experience with various industrial specifications, including clean rooms, specialized HVAC systems, heavy equipment foundations, and regulatory compliance for different industries.',
      },
      {
        id: 2,
        question:
          'Can you accommodate our production schedule during construction?',
        answer:
          'Yes, we develop phased construction plans that work around your operational needs, minimizing downtime and disruption to your production schedule.',
      },
      {
        id: 3,
        question: 'Do you handle large-scale industrial projects?',
        answer:
          'Absolutely. We have the capability, experience, and resources to manage industrial projects of all sizes, from small retrofits to large-scale new construction.',
      },
    ],
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    description:
      'Transform existing spaces with our expert renovation and remodeling services.',
    icon: Hammer,
    features: [
      'Complete property renovations',
      'Historic building restoration',
      'Office and retail space remodeling',
      'Kitchen and bathroom renovations',
      'Structural repairs and upgrades',
    ],
    faqs: [
      {
        id: 1,
        question: 'Can we stay in our home during renovation?',
        answer:
          'Depending on the scope of work, many renovations allow homeowners to remain in their homes. We implement containment strategies to minimize dust and disruption to other areas.',
      },
      {
        id: 2,
        question:
          'How do you handle unexpected issues discovered during renovation?',
        answer:
          'Our experienced team anticipates potential challenges with thorough pre-construction inspections. When unexpected issues arise, we communicate promptly and present cost-effective solutions.',
      },
      {
        id: 3,
        question:
          'Do you specialize in period-appropriate restoration for older buildings?',
        answer:
          'Yes, we have specialized craftsmen and processes for historic restoration, ensuring we maintain the character and integrity of older structures while modernizing systems.',
      },
    ],
  },
];

const ServicePage = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="container">
        <SectionHeading
          title="Our Expertise"
          subtitle="Construction Services"
          description="We offer a comprehensive range of construction services to meet all your building needs."
        />
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${index > 0 ? 'mt-20' : ''}`}
          >
            {/* Content Section */}
            <div className={index % 2 === 0 ? '' : 'order-2 lg:order-1'}>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>

                {/* Key Features */}
                <div className="mt-4">
                  <h3 className="font-medium">Key Features:</h3>
                  <ul className="mt-2 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ Section */}
                <div className="mt-8">
                  <Faq faqs={service.faqs} />
                </div>

                <div className="pt-6">
                  <a
                    href="/contact"
                    className="block w-full rounded-lg bg-gray-300 py-2 text-center font-semibold text-accent transition hover:bg-primary hover:text-white"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className={index % 2 === 0 ? 'order-1 lg:order-2' : ''}>
              <img
                src={`https://images.unsplash.com/photo-${
                  index === 0
                    ? '1487958449943-2429e8be8625'
                    : index === 1
                      ? '1488972685288-c3fd157d7c7a'
                      : index === 2
                        ? '1459767129954-1b1c1f9b9ace'
                        : '1527576539890-dfa815648363'
                }?q=80&w=800`}
                alt={service.title}
                className="h-full w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        ))}
        <StartProject />
      </div>
    </section>
  );
};

export default ServicePage;
