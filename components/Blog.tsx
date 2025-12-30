
import React from 'react';

const blogs = [
  {
    title: "How to Secure High-Value Deals in B2B Tech",
    date: "March 15, 2024",
    excerpt: "Insights from securing a deal with Santander through precision SEO and targeted demand generation.",
    category: "Strategy",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "The Future of AI Funding for Startups",
    date: "March 2, 2024",
    excerpt: "Breaking down how we helped an AI startup secure a £180K government grant for product development.",
    category: "Funding",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Mastering the C-Level Roundtable",
    date: "February 18, 2024",
    excerpt: "Why our global roundtables achieve 90-100% attendance across the US, UK, and Australia.",
    category: "Events",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#6D28D9] uppercase tracking-[0.2em] mb-4">Latest Insights</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#425B76] mb-6">FYAMI Blog</h3>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">Sharing strategies on sales acceleration, lead generation, and digital growth for B2B tech.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((b, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-64 shadow-lg">
                <img 
                  src={b.img} 
                  alt={b.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-[#6D28D9]">
                  {b.category}
                </div>
              </div>
              <div className="text-sm text-[#53535B] opacity-60 mb-2">{b.date}</div>
              <h4 className="text-2xl font-bold text-[#425B76] mb-3 group-hover:text-[#6D28D9] transition-colors">
                {b.title}
              </h4>
              <p className="text-[#53535B] opacity-80 leading-relaxed mb-4">
                {b.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-[#6D28D9] font-bold text-sm">
                Read More 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
