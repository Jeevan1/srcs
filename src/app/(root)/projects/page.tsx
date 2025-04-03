'use client';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import StartProject from '@/components/StartProject';
import TabsList from '@/components/ui/TabsList';
import { Projects } from '@/types';
import React, { useState } from 'react';

const projectsData: Projects[] = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'commercial',
    description:
      'A state-of-the-art 50,000 sq. ft. office complex featuring open workspaces, collaboration zones, and sustainable design elements.',
    location: 'Downtown Business District',
    completionDate: '2023',
    client: 'TechHub Enterprises',
    image:
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=800',
    features: [
      'LEED Certified',
      'Smart Building Technology',
      'Floor-to-ceiling Windows',
      'Collaborative Spaces',
    ],
  },
  {
    id: 2,
    title: 'Luxury Residential Tower',
    category: 'residential',
    description:
      'A 15-story luxury residential tower with 30 premium units, offering panoramic city views and high-end amenities.',
    location: 'Riverfront Heights',
    completionDate: '2022',
    client: 'Elite Development Group',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800',
    features: [
      'Rooftop Garden',
      'Fitness Center',
      '24/7 Concierge',
      'Smart Home Integration',
    ],
  },
  {
    id: 3,
    title: 'Historic Building Renovation',
    category: 'renovation',
    description:
      'Careful restoration of a 100-year-old historic landmark, preserving original architectural details while modernizing systems.',
    location: 'Heritage District',
    completionDate: '2021',
    client: 'City Preservation Foundation',
    image:
      'https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=800',
    features: [
      'Historical Preservation',
      'Structural Reinforcement',
      'Modern Amenities',
      'Accessibility Upgrades',
    ],
  },
  {
    id: 4,
    title: 'Industrial Warehouse',
    category: 'industrial',
    description:
      'A 100,000 sq. ft. industrial warehouse with advanced logistics systems, energy-efficient design, and flexible storage solutions.',
    location: 'Metro Industrial Park',
    completionDate: '2023',
    client: 'Global Distribution Inc.',
    image:
      'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=800',
    features: [
      'Automated Systems',
      'High Bay Storage',
      'Loading Dock Area',
      'Energy Efficient Design',
    ],
  },
  {
    id: 5,
    title: 'Sustainable Community Center',
    category: 'commercial',
    description:
      'A multipurpose community center built with sustainable materials and powered by renewable energy sources.',
    location: 'Greenview Neighborhood',
    completionDate: '2022',
    client: 'Greenview Community Association',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800',
    features: [
      'Solar Panels',
      'Rainwater Harvesting',
      'Community Gardens',
      'Multipurpose Spaces',
    ],
  },
  {
    id: 6,
    title: 'Contemporary Beach House',
    category: 'residential',
    description:
      'A modern beach house with floor-to-ceiling windows, natural materials, and an indoor-outdoor living design.',
    location: 'Coastal Shores',
    completionDate: '2021',
    client: 'Private Client',
    image:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800',
    features: [
      'Ocean Views',
      'Natural Materials',
      'Infinity Pool',
      'Smart Home Technology',
    ],
  },
  {
    id: 7,
    title: 'Urban Retail Center',
    category: 'commercial',
    description:
      'A mixed-use retail center with storefronts, restaurants, and flexible event spaces in a prime urban location.',
    location: 'City Center',
    completionDate: '2023',
    client: 'Urban Development LLC',
    image:
      'https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=800',
    features: [
      'Flexible Spaces',
      'Outdoor Plaza',
      'Underground Parking',
      'Digital Signage',
    ],
  },
  {
    id: 8,
    title: 'Manufacturing Facility Expansion',
    category: 'industrial',
    description:
      'A 75,000 sq. ft. expansion of an existing manufacturing facility, including new production lines and warehouse space.',
    location: 'Industrial Valley',
    completionDate: '2022',
    client: 'Precision Manufacturing Co.',
    image:
      'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=800',
    features: [
      'Production Lines',
      'Quality Control Areas',
      'Staff Facilities',
      'Loading Bays',
    ],
  },
];

const ProjectPage = () => {
  //get category
  const projectsCategory = projectsData
    .map((project) => project.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="container">
        <SectionHeading
          title="Portfolio"
          subtitle="Our Projects"
          description="Explore our diverse portfolio of successfully completed construction projects across various sectors."
        />
        <div className="">
          <TabsList
            data={projectsCategory}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeTab === 'all' ? (
              projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            ) : projectsData.filter((project) => project.category === activeTab)
                .length !== 0 ? (
              projectsData
                .filter((project) => project.category === activeTab)
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))
            ) : (
              <p>No projects found</p>
            )}
          </div>
        </div>
        <StartProject />
      </div>
    </section>
  );
};

export default ProjectPage;
