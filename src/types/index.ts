import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type Faq = {
  id: number;
  question: string;
  answer: string;
};
export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  features: string[];
  faqs: Faq[];
};

export type Projects = {
  id: number;
  title: string;
  category: string;
  description: string;
  location: string;
  completionDate?: string;
  client?: string;
  imageUrl: string;
  features?: string[];
};
