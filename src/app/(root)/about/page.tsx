import SectionHeading from '@/components/SectionHeading';
import StartProject from '@/components/StartProject';
import { Award, AwardIcon, CheckCircle, User2 } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
const counterData = [
  {
    id: 1,
    title: 'Years of Experience',
    value: '7+',
    icon: Award,
  },
  {
    id: 2,
    title: 'Projects Completed',
    value: '100+',
    icon: CheckCircle,
  },
  {
    id: 3,
    title: 'Clients Served',
    value: '50+',
    icon: User2,
  },
  {
    id: 4,
    title: 'Awards Won',
    value: '10+',
    icon: AwardIcon,
  },
];

export const metadata: Metadata = {
  title: 'About | Santosh Raj Construction and Suppliers',
  description: 'Santosh Raj Construction and Suppliers',
};

const AboutPage = () => {
  return (
    <section id="bout" className="bg-gray-50 py-16">
      <div className="container">
        <SectionHeading
          title="Our Story"
          subtitle="About Santosh Raj Construction and Suppliers"
          description="Explore our diverse portfolio of successfully completed construction projects across various sectors."
        />
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Image
              src="/assets/about.jpg"
              alt="About Us"
              width={800}
              height={800}
              className="h-144 w-full rounded-md"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              Founded in 2017, Santosh Raj Suppliers has proudly established
              itself as a trusted leader in the construction materials supply
              industry. Guided by a simple yet meaningful mission — to provide
              exceptional quality materials with integrity, innovation, and
              careful attention to every detail. Our dedicated team is committed
              to supporting your projects by delivering reliable supplies that
              help turn your vision into reality.
            </p>

            <h2 className="text-2xl font-bold">Our Approach</h2>
            <p className="text-muted-foreground">
              At Santosh Raj Suppliers, we firmly believe in building strong,
              collaborative partnerships with our clients, architects, and
              subcontractors. This spirit of teamwork, paired with our technical
              knowledge and innovative material solutions, ensures that every
              project receives the highest quality supplies — delivered on time
              and within budget.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Quality Materials</h3>
                  <p className="text-sm text-gray-500">
                    Sourced from trusted manufacturers with strict quality
                    checks
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Reliable Delivery</h3>
                  <p className="text-sm text-gray-500">
                    Timely supply to keep your projects on schedule
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Wide Product Range</h3>
                  <p className="text-sm text-gray-500">
                    Comprehensive selection to meet all construction material
                    needs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Sustainability</h3>
                  <p className="text-sm text-gray-500">
                    Offering eco-friendly and sustainable building materials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
          {counterData.map((counter) => (
            <div
              key={counter.id}
              className="flex flex-col items-center rounded-md border border-gray-100 p-6 text-center shadow-md transition duration-200 hover:bg-white hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <counter.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">{counter.value}</h3>
              <p className="text-muted-foreground">{counter.title}</p>
            </div>
          ))}
        </div>
        <StartProject />
      </div>
    </section>
  );
};

export default AboutPage;
