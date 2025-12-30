
import React from 'react';

const features = [
  {
    title: "Lead Gen & Sales Acceleration",
    description: "Multi-channel demand generation designed to attract high-value decision makers and shorten sales cycles.",
    icon: (
      <svg className="w-8 h-8 text-[#6D28D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "SEO, PR & Digital Growth",
    description: "Rank #1 on Google and build authority. One digital strategy led directly to a high-value deal with Santander.",
    icon: (
      <svg className="w-8 h-8 text-[#6D28D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: "Webinars & Global Events",
    description: "Invite-only C-level roundtables with 90-100% attendance across major global tech hubs.",
    icon: (
      <svg className="w-8 h-8 text-[#6D28D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#6D28D9] uppercase tracking-[0.2em] mb-4">Core Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#425B76] mb-6">How I Drive Growth</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-10 bg-white border border-[#D7D9E3] rounded-3xl hover:border-[#6D28D9] transition-all duration-500 hover:shadow-2xl hover:shadow-[#6D28D9]/5">
              <div className="mb-6 p-4 bg-[#FAF9F6] rounded-2xl inline-block group-hover:bg-[#6D28D9]/10 transition-colors">
                {f.icon}
              </div>
              <h4 className="text-2xl font-bold text-[#425B76] mb-4">{f.title}</h4>
              <p className="text-[#53535B] opacity-80 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#425B76] rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h4 className="text-3xl font-bold mb-4">Ready to accelerate?</h4>
            <p className="text-white/80 text-lg">Download my Lead Gen framework or book a 15-minute growth audit.</p>
          </div>
          <a href="#contact" className="px-10 py-4 bg-[#6D28D9] text-white font-bold rounded-full hover:scale-105 transition-all shadow-lg text-center">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
