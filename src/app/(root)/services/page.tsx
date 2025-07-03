import Faq from '@/components/Faq';
import SectionHeading from '@/components/SectionHeading';
import StartProject from '@/components/StartProject';
import { Service } from '@/types';
import { ArrowRight, Building, Factory, Hammer, Home } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Services | Santosh Raj Construction and Suppliers',
  description: 'Santosh Raj Construction and Suppliers',
};

const servicesData: Service[] = [
  {
    id: 'residential',
    title: 'Residential Material Supply',
    description:
      'High-quality construction materials for residential buildings, from foundation to finish.',
    icon: Home,
    image: '/assets/services/service.png',
    features: [
      'Bricks, cement, and aggregates',
      'Steel rods and TMT bars',
      'Roofing sheets and insulation',
      'Paints and finishes',
      'On-time site delivery',
    ],
    faqs: [
      {
        id: 1,
        question: 'What materials do you supply for home construction?',
        answer:
          'We supply a wide range of materials including cement, steel rods, bricks, sand, aggregates, roofing materials, and interior finishing products for residential projects.',
      },
      {
        id: 2,
        question: 'Do you deliver materials directly to the construction site?',
        answer:
          'Yes, we offer reliable site delivery to ensure your materials arrive safely and on time, minimizing project delays.',
      },
      {
        id: 3,
        question:
          'Do you provide bulk discounts for large residential projects?',
        answer:
          'Absolutely. We offer competitive pricing and discounts for bulk purchases to support large-scale residential developments.',
      },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Material Supply',
    description:
      'Supplying durable materials for office buildings, schools, hospitals, and retail spaces.',
    icon: Building,
    image: '/assets/services/service2.jpg',
    features: [
      'High-grade cement and structural steel',
      'Bulk brick and concrete supply',
      'Commercial roofing and insulation materials',
      'Flooring and finishing materials',
      'Material compliance with commercial standards',
    ],
    faqs: [
      {
        id: 1,
        question:
          'Do you supply materials for commercial complexes and offices?',
        answer:
          'Yes, we supply a complete range of commercial-grade materials for offices, retail centers, schools, and hospitals.',
      },
      {
        id: 2,
        question:
          'Can you provide material documentation for government/commercial projects?',
        answer:
          'Yes, we provide all necessary invoices, compliance certificates, and quality assurance documents for formal project requirements.',
      },
      {
        id: 3,
        question: 'Do you coordinate with contractors or site engineers?',
        answer:
          'Yes, we work directly with contractors and site supervisors to ensure timely and accurate delivery.',
      },
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial Material Supply',
    description:
      'Robust materials for factories, warehouses, and large-scale infrastructure projects.',
    icon: Factory,
    image: '/assets/services/service.png',
    features: [
      'Heavy-duty steel and rebar',
      'Precast concrete elements',
      'Bulk delivery and transport logistics',
      'Specialized industrial flooring',
      'Industrial-grade coatings and finishes',
    ],
    faqs: [
      {
        id: 1,
        question: 'Do you handle bulk industrial supply orders?',
        answer:
          'Yes, we have the capacity and logistics support to manage bulk supply orders for factories, plants, and warehouses.',
      },
      {
        id: 2,
        question:
          'Can you arrange materials for time-sensitive industrial projects?',
        answer:
          'Absolutely. We work with flexible delivery schedules to meet industrial project deadlines and reduce downtime.',
      },
      {
        id: 3,
        question: 'What makes your materials suitable for industrial use?',
        answer:
          'Our products meet industrial-grade strength, durability, and quality standards, ensuring performance in heavy-use environments.',
      },
    ],
  },
  {
    id: 'renovation',
    title: 'Renovation & Restoration Supplies',
    description:
      'Specialized materials for remodeling, repairs, and heritage building restoration.',
    icon: Hammer,
    image: '/assets/services/service2.jpg',
    features: [
      'Tiles, fixtures, and finishes',
      'Waterproofing and repair compounds',
      'Ready-mix concrete and patching materials',
      'Paints, plasters, and coatings',
      'Heritage-compatible supply options',
    ],
    faqs: [
      {
        id: 1,
        question: 'Do you supply materials for small renovation projects?',
        answer:
          'Yes, whether it’s a home remodel or a shop upgrade, we offer tailored material packages to suit project size and scope.',
      },
      {
        id: 2,
        question:
          'Do you have materials for historic or traditional structures?',
        answer:
          'We supply restoration-compatible products that preserve the original character while meeting modern quality standards.',
      },
      {
        id: 3,
        question: 'Can you help recommend materials for renovation use?',
        answer:
          'Yes, our team provides guidance on the best-suited materials for your renovation needs, including cost-effective and premium options.',
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
              <Image
                src={
                  service.image ||
                  `https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800`
                }
                width={800}
                height={800}
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
