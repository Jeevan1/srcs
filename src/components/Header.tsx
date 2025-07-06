'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full  bg-white/90 shadow-md backdrop-blur-md">
      <div className="container flex h-24 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={100}
            height={70}
            className="h-16 w-28"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            href="/"
            className="md:text-md font-semibold text-gray-700 hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="md:text-md font-semibold text-gray-700 hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="md:text-md font-semibold text-gray-700 hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="md:text-md text-gray7800 font-semibold hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="md:text-md text-gray7800 font-semibold hover:text-primary"
          >
            Contact
          </Link>
          <Link
            href="tel:9860316903"
            rel="noopener noreferrer"
            className="ml-4 rounded-md bg-primary/80 px-4 py-2 text-white hover:bg-primary"
          >
            Call Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="rounded-md p-2 text-gray-700 hover:bg-gray-200 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 right-0 left-0 border-b bg-white p-4 shadow-md md:hidden">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="rounded-md px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="rounded-md px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="rounded-md px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="rounded-md px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="rounded-md px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="mt-2 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Get a Quote
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
