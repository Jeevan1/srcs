import Link from 'next/link';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-400 to-gray-500 py-28 text-white md:py-36">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-gray-900 opacity-80"
        style={{
          backgroundImage: `url('/assets/banner/banner.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-10 container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Building<span className="text-primary"> Tomorrow</span>, Today
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-50 md:text-2xl">
            Supplying top-tier materials for every foundation — from homes to
            highways.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/projects">
              <Button className="px-8 font-semibold md:text-lg">
                View Our Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="px-8 font-semibold md:text-lg">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
