'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AosProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      delay: 100,
      offset: 50,
    });
  }, []);
  return <>{children}</>;
};

export default AosProvider;
