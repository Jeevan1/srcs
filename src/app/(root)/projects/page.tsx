'use client';
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import StartProject from '@/components/StartProject';
import TabsList from '@/components/ui/TabsList';
import { Projects } from '@/types';
import data from '../../../utility//data.json';

const ProjectPage = () => {
  //get category
  const projectsCategory = data.projects
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
              data.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            ) : data.projects.filter(
                (project) => project.category === activeTab,
              ).length !== 0 ? (
              data.projects
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
