import React from 'react';

const stories = [
  {
    client: "Cyber Security SaaS",
    result: "20+ MQLs in One Day",
    quote: "The demand generation strategy was surgical. We captured more qualified leads in 24 hours than we usually see in a month.",
    tag: "Lead Generation",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
  },
  {
    client: "AI Startup",
    result: "£180K Funding Secured",
    quote: "Crucial strategic support in securing a government grant that has fundamentally accelerated our product roadmap.",
    tag: "Business Growth",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
  },
  {
    client: "Finance Consultancy",
    result: "#1 Rank in 6 Weeks",
    quote: "Ranked #1 on Google for our key terms in weeks, leading to a high-value partnership with Santander.",
    tag: "SEO & Digital Strategy",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
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
            <p className="text-lg opacity-70">From securing government funding to topping Google Search, my focus is always on high-impact outcomes.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-[#D7D9E3] hover:shadow-xl transition-all duration-500">
              <img 
                src={s.image} 
                alt={s.client} 
                className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              />
              <div className="p-8">
                <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider mb-2">{s.tag}</div>
                <h4 className="text-2xl font-bold text-[#425B76] mb-2">{s.client}</h4>
                <div className="text-3xl font-black text-[#425B76] mb-4">{s.result}</div>
                <p className="italic text-[#53535B] opacity-70 mb-6">"{s.quote}"</p>
                <div className="h-1 w-20 bg-[#6D28D9]/30 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;