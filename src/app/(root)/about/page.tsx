import SectionHeading from '@/components/SectionHeading';
import StartProject from '@/components/StartProject';
import { Award, AwardIcon, CheckCircle, User2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
const counterData = [
  {
    id: 1,
    title: 'Years of Experience',
    value: '20+',
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
              src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=800"
              alt="About Us"
              width={800}
              height={800}
              className="h-144 w-full rounded-md"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              Founded in 1995, BuildRight Construction has established itself as
              a leader in the construction industry with a simple mission: to
              deliver exceptional building services with integrity, innovation,
              and attention to detail. Our team of dedicated professionals is
              committed to transforming your vision into reality.
            </p>

            <h2 className="text-2xl font-bold">Our Approach</h2>
            <p className="text-muted-foreground">
              We believe in collaborative partnerships with our clients,
              architects, and subcontractors. This collaborative approach,
              combined with our technical expertise and innovative solutions,
              ensures projects are completed to the highest standards, on time,
              and within budget.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Quality Assurance</h3>
                  <p className="text-muted-foreground text-sm">
                    Rigorous quality control standards
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Safety First</h3>
                  <p className="text-muted-foreground text-sm">
                    Top safety protocols on every site
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Innovative Solutions</h3>
                  <p className="text-muted-foreground text-sm">
                    Modern construction techniques
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Sustainability</h3>
                  <p className="text-muted-foreground text-sm">
                    Eco-friendly building practices
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
