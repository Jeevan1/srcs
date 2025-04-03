import Link from 'next/link';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 to-gray-800 py-28 text-white md:py-36">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
      />

      <div className="relative z-10 container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Building<span className="text-primary"> Tomorrow</span>, Today
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300 md:text-2xl">
            Premium construction services with unmatched quality, reliability,
            and craftsmanship.
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
