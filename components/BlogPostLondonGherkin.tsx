import React from 'react';

const BlogPostLondonGherkin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF9F6] to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <a
            href="#/blogs"
            className="inline-flex items-center gap-2 text-[#6D28D9] font-semibold mb-8 hover:opacity-80 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </a>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#6D28D9] text-white px-4 py-1.5 rounded-full text-sm font-bold">
              Case Study
            </span>
            <span className="text-[#53535B] opacity-60">12 May 2024</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#425B76] mb-6 leading-tight">
            Case Study: Fortifying Renewable Energy Assets Through Cyber Resilience
          </h1>

          <p className="text-xl text-[#53535B] opacity-80 mb-8">
            Round Table Event at London's Iconic Gherkin
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Mid%20section%20of%20bartender%20pouring%20red%20wine%20on%20glass%20in%20bar%20counter.jpeg"
              alt="London Gherkin Event"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#425B76] mb-6">Introduction</h2>
              <p className="text-[#53535B] leading-relaxed text-lg">
                FYAMI organised an exclusive roundtable titled "Cyber Resilience in the Renewable Energy Sector: Bridging the Gap Between Digital Transformation and Security" at London's iconic Gherkin on February 27, 2024. The event brought together asset owners from renewable energy firms and renewable asset managers from financial institutions for an evening of strategic discussions and networking.
              </p>
            </section>

            {/* Event Details Box */}
            <div className="bg-gradient-to-r from-[#6D28D9]/10 to-[#425B76]/10 rounded-2xl p-8 mb-12 border-l-4 border-[#6D28D9]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-bold text-[#6D28D9] uppercase mb-2">Event Location</p>
                  <p className="text-xl font-bold text-[#425B76]">The Gherkin, London</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#6D28D9] uppercase mb-2">Event Date</p>
                  <p className="text-xl font-bold text-[#425B76]">February 27, 2024</p>
                </div>
              </div>
            </div>

            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#425B76] mb-6">The Challenge</h2>
              <p className="text-[#53535B] leading-relaxed text-lg">
                The renewable energy sector faces escalating cybersecurity threats amid rapid digitisation. The core issue involves maintaining security resilience while advancing digital transformation. Organisations must navigate the complex landscape of cybersecurity while upholding investor confidence and regulatory compliance.
              </p>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#425B76] mb-6">The Solution</h2>
              <p className="text-[#53535B] leading-relaxed text-lg">
                FYAMI partnered with CFP Cyber Energia to create discussions offering actionable insights and strategies for fortifying renewable energy assets through cyber resilience. The event featured facilitated conversations, networking opportunities, and a three-course meal with beverages in the stunning setting of London's Gherkin.
              </p>
            </section>

            {/* Event Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#425B76] mb-8">Event Highlights</h2>

              <div className="space-y-8">
                <div className="bg-[#FAF9F6] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#6D28D9] mb-4">Insightful Discussions</h3>
                  <p className="text-[#53535B] leading-relaxed">
                    Topics included how renewable energy companies adapt cybersecurity strategies to evolving threats and IT/OT convergence approaches. Attendees engaged in meaningful dialogue about the intersection of digital transformation and security.
                  </p>
                </div>

                <div className="bg-[#FAF9F6] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#6D28D9] mb-4">Strategic Solutions</h3>
                  <p className="text-[#53535B] leading-relaxed">
                    Attendees collaborated on challenges affecting high-risk renewable assets, focusing on portfolio strengthening and regulatory compliance without limiting innovation. The discussions provided practical frameworks for implementation.
                  </p>
                </div>

                <div className="bg-[#FAF9F6] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#6D28D9] mb-4">Networking Opportunities</h3>
                  <p className="text-[#53535B] leading-relaxed">
                    Professionals exchanged experiences and gained insights into sector-specific cybersecurity measures. The intimate setting fostered genuine connections between renewable energy asset owners and financial institution managers.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#425B76] mb-6">Conclusion</h2>
              <p className="text-[#53535B] leading-relaxed text-lg">
                The event successfully united renewable energy asset owners and finance managers, enabling participants to fortify portfolios and navigate cyber threats confidently through collaboration and innovation. FYAMI's expertise in organising high-level roundtables continues to deliver meaningful outcomes for clients in the cybersecurity and renewable energy sectors.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#425B76] to-[#6D28D9] rounded-2xl p-8 md:p-10 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Interested in Hosting Your Own Executive Roundtable?
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                We organise exclusive events globally, bringing together industry leaders for meaningful discussions and networking.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#425B76] rounded-full hover:bg-[#FAF9F6] transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
              >
                Contact Us Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostLondonGherkin;
