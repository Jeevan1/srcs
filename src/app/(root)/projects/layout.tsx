import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Projects | Santosh Raj Construction and Suppliers',
  description: 'Santosh Raj Construction and Suppliers',
};

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ProjectLayout;
