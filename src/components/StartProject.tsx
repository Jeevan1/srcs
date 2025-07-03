import React from 'react';

const StartProject = () => {
  return (
    <div className="border-md mt-12 flex flex-col items-center justify-center gap-4 rounded-md bg-gray-100 p-8 text-center shadow-md">
      <h3 className="text-xl font-bold md:text-2xl">
        Need a Custom Material Solution?
      </h3>
      <p className="m-auto max-w-[700px] text-gray-500">
        Our team provides tailored material sourcing and supply strategies to
        meet your specific project requirements and site challenges.
      </p>
      <button
        type="button"
        className="inline-block cursor-pointer rounded-md bg-primary/90 px-6 py-2 font-semibold text-white hover:bg-primary"
      >
        Discuss Your Project
      </button>
    </div>
  );
};

export default StartProject;
