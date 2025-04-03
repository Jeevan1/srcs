import React from 'react';

const SectionHeading = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) => {
  return (
    <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
      <h5 className="inline-block rounded-lg bg-primary/15 px-3 py-1 text-sm text-accent">
        {title}
      </h5>
      <h1 className="max-w-2xl text-3xl leading-tight font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {subtitle}
      </h1>
      <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
