'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/assets/banner/banner.webp',
  '/assets/banner/banner.png',
  '/assets/banner/banner2.jpg',
  '/assets/banner/banner3.jpg',
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          height={980}
          width={1440}
          alt={`Slide ${i + 1}`}
          className={`
            absolute inset-0 h-full w-full object-cover
            object-center
            transition-opacity duration-1000 ease-in-out
            ${i === index ? 'opacity-100' : 'opacity-0'}
          `}
        />
      ))}
      <div className="absolute inset-0 bg-accent opacity-60"></div>
    </div>
  );
}
