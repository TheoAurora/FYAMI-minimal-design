
import React from 'react';

const blogs = [
  {
    title: "Microsoft & MSP Charity/Non-profit Webinar on Copilot",
    date: "12 May 2024",
    excerpt: "The webinar aimed to introduce charities and non-profits to Microsoft 365 Copilot, a powerful AI tool that can transform how organisations operate.",
    category: "Webinar",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Happy%20volunteer%20looking%20at%20donation%20box%20on%20a%20sunny%20day.jpeg",
    link: "#/blog/microsoft-copilot-webinar",
    isInternal: true
  },
  {
    title: "Elevate Your B2B Demand Generation Across Key Sectors",
    date: "12 May 2024",
    excerpt: "Discover how FYAMI's expert event management services can elevate your B2B demand generation across key sectors with targeted strategies.",
    category: "Demand Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Business%20people%20at%20the%20meeting%20at%20the%20lunch%20buffet-1.jpeg",
    link: "#/blog/b2b-demand-generation-events",
    isInternal: true
  },
  {
    title: "Why Should You Write Blogs for Your Business?",
    date: "31 March 2024",
    excerpt: "The Power of Blogging for Your Business: SEO, Thought Leadership, and Social Media Success. Learn how blogging can transform your marketing strategy.",
    category: "Marketing",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Happy%20young%20woman%20sitting%20on%20the%20floor%20with%20crossed%20legs%20and%20using%20laptop%20on%20gray%20background.jpeg",
    link: "#/blog/why-write-blogs-for-business",
    isInternal: true
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
            <a
              key={i}
              href={b.link}
              {...(b.isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="group block"
            >
              <article className="cursor-pointer">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
