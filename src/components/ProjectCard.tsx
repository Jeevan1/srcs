import { Projects } from '@/types';
import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ project }: { project: Projects }) => {
  return (
    <div
      className="w-full transform cursor-pointer space-y-3 overflow-hidden rounded-md bg-white pb-4 shadow-sm duration-200 hover:shadow-lg"
      data-aos="fade-up"
    >
      <div className="overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={500}
          height={500}
          className="h-64 w-full transform object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-6 px-4 pt-1">
        <h2 className="text-lg font-semibold text-gray-600">{project.title}</h2>
        <p className="rounded-md border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-600 capitalize">
          {project.category}
        </p>
      </div>
      <p className="px-4 text-sm text-gray-500">{project.description}</p>
      <div className="flex flex-wrap items-center gap-[10%] space-y-2 px-4 pt-2 text-sm">
        <div>
          <p className="text-gray-400">Location</p>
          <p className="text-gray-600">{project.location}</p>
        </div>
        {/* <div className="">
          <p className="text-gray-400">Completion Date</p>
          <p>{project.completionDate}</p>
        </div> */}
        {/* <div>
          <p className="text-gray-400">Client</p>
          <p>{project.client}</p>
        </div> */}
      </div>
      {/* <div className="flex flex-wrap gap-3 px-4 pt-2 pb-6">
        {project.features.map((feature, index) => (
          <p key={index} className="rounded-md bg-gray-100 px-2 py-1 text-sm">
            {feature}
          </p>
        ))}
      </div> */}
    </div>
  );
};

export default ProjectCard;
