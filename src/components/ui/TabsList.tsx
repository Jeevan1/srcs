'use client';
import React from 'react';

const TabsList = ({
  data,
  activeTab,
  setActiveTab,
}: {
  data: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className="m-auto flex max-w-3xl items-center justify-between gap-4 overflow-hidden rounded-md bg-gray-100 px-3 py-2 hover:overflow-x-auto">
      <button
        type="button"
        onClick={() => setActiveTab('all')}
        className={`cursor-pointer rounded-md px-4 py-1 text-sm capitalize hover:bg-white ${activeTab === 'all' ? 'bg-white' : 'bg-gray-50'}`}
      >
        All
      </button>
      {data.map((tab, index) => {
        const isActive = activeTab === tab;
        return (
          <button
            type="button"
            onClick={() => setActiveTab(tab)}
            key={index}
            className={`cursor-pointer rounded-md px-4 py-1 text-sm capitalize transition duration-200 ease-in-out hover:bg-white ${isActive ? 'bg-white' : 'bg-gray-50'}`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default TabsList;
