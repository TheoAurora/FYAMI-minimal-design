
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src="/fyami-logo-transp.png"
            alt="FYAMI Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#/about" className="hover:text-[#6D28D9] transition-colors">About Us</a>
          <a href="/#why-us" className="hover:text-[#6D28D9] transition-colors">Services</a>
          <a href="#/success" className="hover:text-[#6D28D9] transition-colors">Success</a>
          <a href="#/blogs" className="hover:text-[#6D28D9] transition-colors">Blogs</a>
          <a
            href="/#contact"
            className="px-6 py-2.5 bg-[#425B76] text-white rounded-full hover:bg-[#6D28D9] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>

        <button className="md:hidden p-2 text-[#425B76]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
