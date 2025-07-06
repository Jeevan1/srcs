'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import SectionHeading from './SectionHeading';
import data from '../utility/data.json';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const ProjectSection = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="relative container">
        <SectionHeading
          title="Our Projects"
          subtitle="Featured Projects"
          description="We have a diverse range of projects that showcase our expertise and commitment to excellence."
        />
        <div className="relative">
          <div className="absolute top-1/2 z-1 flex w-full -translate-y-1/2 justify-between space-x-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="cursor-pointer rounded-lg bg-gray-400 p-1 text-white transition hover:bg-primary md:-ml-5"
            >
              <ArrowLeft className="" size={20} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="cursor-pointer rounded-lg bg-gray-400 p-1 text-white transition hover:bg-primary md:-mr-6"
            >
              <ArrowLeft className="rotate-180" size={20} />
            </button>
          </div>
          <Slider {...settings} className="mb-3 pb-3 md:-mx-3" ref={sliderRef}>
            {data.projects.map((project, index) => (
              <div key={index} className="px-3 pb-3" data-aos="fade-left">
                <div className="flex h-full flex-col justify-between overflow-hidden rounded-md bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <div className="w-full flex-shrink-0">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </div>
                  <div className="min-h-[120px] p-4">
                    <h2 className="line-clamp-2 text-lg font-bold md:text-xl">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
