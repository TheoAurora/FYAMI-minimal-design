import React from 'react';

const stories = [
  {
    client: "Cyber Energia",
    result: "100% Attendance Rate",
    quote: "The event delivered real conversations with real buyers, not vanity metrics. Multiple high-value commercial conversations initiated.",
    tag: "Executive Roundtable",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800&auto=format&fit=crop&q=60",
    location: "Las Vegas, USA",
    link: "#/case-study/cyber-energia-las-vegas"
  },
  {
    client: "Cyber Energia",
    result: "Pipeline & Closed Deals",
    quote: "The roundtable delivered depth of engagement and commercial relevance, contributing directly to increased pipeline and closed deals.",
    tag: "Energy Security",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=60",
    location: "London, UK – The Savoy",
    link: "#/case-study/cyber-energia-london"
  },
  {
    client: "Intersys",
    result: "C-Suite Engagement",
    quote: "Attendance from CIOs, CTOs, Heads of Operations, and Managing Directors. Strong awareness of our resilience-led approach.",
    tag: "Financial Services",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
    location: "London, UK",
    link: "#/case-study/intersys-financial-services"
  }
];

const SuccessStories: React.FC = () => {
  return (
    <section id="success" className="py-24 px-6 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-[#6D28D9] uppercase tracking-[0.2em] mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#425B76] mb-6">Real Results. Real Growth.</h3>
            <p className="text-lg opacity-70">From securing government funding to topping Google Search, our focus is always on high-impact outcomes.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <a
              key={i}
              href={s.link}
              className="group bg-white rounded-3xl overflow-hidden border border-[#D7D9E3] hover:shadow-xl transition-all duration-500 block"
            >
              <div className="relative overflow-hidden">
                <img
                  src={s.image}
                  alt={s.client}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#425B76]">
                  {s.location}
                </div>
              </div>
              <div className="p-8">
                <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider mb-2">{s.tag}</div>
                <h4 className="text-2xl font-bold text-[#425B76] mb-2 group-hover:text-[#6D28D9] transition-colors">{s.client}</h4>
                <div className="text-3xl font-black text-[#425B76] mb-4">{s.result}</div>
                <p className="italic text-[#53535B] opacity-70 mb-6">"{s.quote}"</p>
                <div className="flex items-center gap-2 text-[#6D28D9] font-semibold">
                  Read Case Study
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#/success"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6D28D9] text-white rounded-full hover:bg-[#5B21B6] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            View All Case Studies
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;