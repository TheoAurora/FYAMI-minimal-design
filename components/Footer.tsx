
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#425B76] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <img 
              src="https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/transparent-1%202023%20fyami%20logo.webp" 
              alt="FYAMI Logo" 
              className="h-10 mb-6 brightness-0 invert"
            />
            <p className="text-white/60 text-lg max-w-sm">
              Strategic sales and marketing growth agency helping B2B technology companies scale through data-driven precision and human-centric strategy.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-xl mb-6">Navigation</h5>
            <ul className="space-y-4 text-white/60">
              <li><a href="#about" className="hover:text-[#6D28D9] transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-[#6D28D9] transition-colors">Services</a></li>
              <li><a href="#success" className="hover:text-[#6D28D9] transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-[#6D28D9] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-xl mb-6">Connect</h5>
            <ul className="space-y-4 text-white/60">
              <li><a href="https://www.linkedin.com/in/fayeeldridge/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6D28D9] transition-colors">LinkedIn</a></li>
              <li><span>Email - Faye@Fyami.com</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col gap-6">
          <div className="text-white/40 text-sm text-center md:text-left">
            Registered Office: 167-169 Great Portland Street, 5th Floor, London, W1W 5PF
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} FYAMI Limited. All rights reserved.
            </div>
            <div className="flex gap-8 text-white/40 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
