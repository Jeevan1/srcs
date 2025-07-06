'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import SectionHeading from './SectionHeading';
import data from '../utility/data.json';
import { ArrowLeft } from 'lucide-react';

const Testimonials = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <section id="testimonials" className="bg-white py-16">
      <div className="relative container">
        <SectionHeading
          title="Testimonials"
          subtitle="What Our Clients Say"
          description="We value our clients and their feedback. Here's what they have to say about our services."
        />
        <div className="relative">
          <div className="absolute top-1/2 z-1 hidden w-full -translate-y-1/2 justify-between space-x-2 md:flex">
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
            {data.testimonials.map((testimonial, index) => (
              <div key={index} className="min-h-full px-3 pb-3">
                <div className="flex flex-col justify-between overflow-hidden rounded-md bg-gray-50 shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <div className="">
                    <div className="flex items-center gap-4 p-4">
                      <p className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold">
                        {testimonial.name.split('')[0]}
                      </p>
                      <div>
                        <h2 className="text-md md:text-md line-clamp-2 font-bold">
                          {testimonial.name}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
                    <div className="min-h-[140px] px-4 pt-2 pb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-quote-icon lucide-quote text-gray-500"
                      >
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                      </svg>
                      <p className="text-md mt-2 text-gray-500 italic">
                        {testimonial.testimonial}
                      </p>
                    </div>
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

export default Testimonials;
