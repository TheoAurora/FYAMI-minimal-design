import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 bg-[#6D28D9]/10 text-[#6D28D9] text-sm font-bold tracking-widest uppercase rounded-full mb-6">
          Global Sales & Marketing Consultancy
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#425B76] leading-[1.1] mb-8 max-w-5xl mx-auto">
          Increase Demand. Generate <span className="text-[#6D28D9]">High-Value</span> Leads.
        </h1>
        <p className="text-xl md:text-2xl text-[#53535B] opacity-80 max-w-3xl mx-auto mb-10 leading-relaxed">
          We help businesses across Tech, Cyber Security, FinTech, and SaaS accelerate sales growth through data-backed demand generation and digital strategy.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-4 bg-[#6D28D9] text-white font-bold text-lg rounded-full shadow-[0_10px_30px_-10px_#6D28D9] hover:translate-y-[-2px] hover:shadow-[0_15px_35px_-10px_#6D28D9] transition-all duration-300"
          >
            Drive Business Growth
          </a>
          <a 
            href="#success" 
            className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-[#D7D9E3] text-[#425B76] font-bold text-lg rounded-full hover:border-[#6D28D9] hover:text-[#6D28D9] transition-all duration-300"
          >
            See Results
          </a>
        </div>

        <div className="mt-24 opacity-60">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-[#425B76]">Proven results delivered for</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 transition-all duration-700">
             <span className="text-xl font-bold text-[#425B76]">Microsoft</span>
             <span className="text-xl font-bold text-[#425B76] border-l border-[#D7D9E3] pl-8">Fortinet</span>
             <span className="text-xl font-bold text-[#425B76] border-l border-[#D7D9E3] pl-8">Intersys</span>
             <span className="text-xl font-bold text-[#425B76] border-l border-[#D7D9E3] pl-8">Doherty IT</span>
             <span className="text-xl font-bold text-[#425B76] border-l border-[#D7D9E3] pl-8">Tiralis Global</span>
             <span className="text-xl font-bold text-[#425B76] border-l border-[#D7D9E3] pl-8">Cyber Energia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;