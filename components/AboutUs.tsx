
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#FAF9F6]/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#6D28D9]/10 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Strategy" 
              className="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl z-20 border border-[#D7D9E3]">
              <div className="text-4xl font-bold text-[#6D28D9]">London</div>
              <div className="text-[#425B76] font-semibold">HQ | Global Reach</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold text-[#6D28D9] uppercase tracking-[0.2em] mb-4">The Consultancy</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#425B76] mb-6 leading-tight">
              Specialist Strategy for Complex Tech
            </h3>
            <p className="text-lg text-[#53535B] mb-6 leading-relaxed">
              Based in London, I run a specialist sales and marketing consultancy supporting tech, cyber security, OT, IoT, SaaS, finance, fintech, and payments globally.
            </p>
            <p className="text-lg text-[#53535B] mb-8 leading-relaxed">
              I’ve built a six-figure consultancy as a solo expert by focusing on what matters: <strong>demand generation and lead conversion.</strong> From strengthening Microsoft & Fortinet partnerships to helping AI startups secure &pound;180K government grants, my mission is to drive real, measurable business growth.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-[#6D28D9] pl-6">
                <div className="font-bold text-[#425B76] text-xl mb-1">Global Events</div>
                <p className="text-sm opacity-70">UK, USA, Italy & Australia roundtables.</p>
              </div>
              <div className="border-l-4 border-[#6D28D9] pl-6">
                <div className="font-bold text-[#425B76] text-xl mb-1">SEO Dominance</div>
                <p className="text-sm opacity-70">Ranked #1 on Google in just 6 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
