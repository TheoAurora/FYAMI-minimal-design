import React from 'react';

const BlogPostRSA: React.FC = () => {
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
            Case Study: Renewable Energy & Cyber Security Round Table Event: RSA, San Fran 2024
          </h1>

          <p className="text-xl text-[#53535B] opacity-80 mb-8">
            FYAMI's Leadership in Roundtable Attendance
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Sunset%20view%20of%20the%20Golden%20Gate%20Bridge%20and%20fog%20from%20Battery%20Spencer%2c%20%20Golden%20Gate%20National%20Recreation%20Area%2c%20in%20San%20Francisco%2c%20California..jpeg"
              alt="Golden Gate Bridge, San Francisco"
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
                In the collaborative effort to drive discussions on cybersecurity within the renewable energy sector, FYAMI played a pivotal role in orchestrating a high-profile roundtable event at the Beacon Grand Hotel in Union Square, San Francisco. Tasked with assembling key leaders, FYAMI demonstrated exceptional organisational prowess, resulting in a remarkable 100% turnout rate among the invited participants.
              </p>
            </section>

            {/* Event Coordination */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#425B76] mb-6">Event Coordination</h2>
              <p className="text-[#53535B] leading-relaxed text-lg">
                FYAMI spearheaded the initiative to curate a select group of 12 influential leaders to participate in the roundtable discussion. Leveraging its extensive network and strategic alliances, FYAMI meticulously crafted invitations targeting individuals with expertise spanning cybersecurity, renewable energy, leaders in critical infrastructure, and representatives from investment and venture capitalist firms.
              </p>
            </section>

            {/* Attendee Turnout */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#425B76] mb-6">Attendee Turnout</h2>
              <p className="text-[#53535B] leading-relaxed text-lg">
                The meticulous planning and diligent efforts undertaken by FYAMI culminated in a resounding success, with all 12 invited leaders attending the roundtable event. This 100% turnout rate underscored FYAMI's effectiveness in engaging and mobilising key stakeholders from cybersecurity, renewable energy, critical infrastructure leadership, and investment sectors to contribute to the discourse on cybersecurity resilience in the renewable energy landscape.
              </p>
            </section>

            {/* Highlight Box */}
            <div className="bg-gradient-to-r from-[#6D28D9]/10 to-[#425B76]/10 rounded-2xl p-8 mb-12 border-l-4 border-[#6D28D9]">
              <p className="text-2xl md:text-3xl font-bold text-[#425B76] text-center">
                100% Turnout Rate
              </p>
              <p className="text-center text-[#53535B] mt-2">
                All 12 invited leaders attended the roundtable event
              </p>
            </div>

            {/* Impact and Implications */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#425B76] mb-8">Impact and Implications</h2>

              <div className="space-y-8">
                <div className="bg-[#FAF9F6] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#6D28D9] mb-4">Effective Stakeholder Engagement</h3>
                  <p className="text-[#53535B] leading-relaxed">
                    FYAMI's ability to secure full attendance from invited leaders across diverse sectors highlights its proficiency in stakeholder engagement and relationship management. By fostering strong connections and clear communication channels, FYAMI ensured active participation and valuable contributions from industry luminaries.
                  </p>
                </div>

                <div className="bg-[#FAF9F6] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#6D28D9] mb-4">Enhanced Collaboration</h3>
                  <p className="text-[#53535B] leading-relaxed">
                    The robust turnout at the roundtable event facilitated meaningful collaboration and knowledge exchange among diverse stakeholders. Assembling leaders from cybersecurity, renewable energy, critical infrastructure, and investment sectors provided a multifaceted perspective on cybersecurity challenges and opportunities within the renewable energy domain.
                  </p>
                </div>

                <div className="bg-[#FAF9F6] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#6D28D9] mb-4">Demonstrated Leadership</h3>
                  <p className="text-[#53535B] leading-relaxed">
                    FYAMI's successful coordination of the roundtable event exemplifies its leadership in driving initiatives that advance cybersecurity resilience and promote industry-wide collaboration. By orchestrating impactful gatherings, FYAMI continues to play a crucial role in shaping the future of cybersecurity in critical infrastructure sectors.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#425B76] mb-6">Conclusion</h2>
              <p className="text-[#53535B] leading-relaxed text-lg">
                FYAMI's performance in orchestrating the roundtable event and achieving a 100% turnout rate underscores its commitment to driving meaningful change and innovation in cybersecurity. As the renewable energy sector grapples with evolving cyber threats, FYAMI's leadership in convening key stakeholders from cybersecurity, renewable energy, critical infrastructure, and investment sectors sets a precedent for collaborative action and collective resilience. Moving forward, FYAMI remains poised to lead initiatives that safeguard critical infrastructure and propel the renewable energy industry towards a more secure and sustainable future.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#425B76] to-[#6D28D9] rounded-2xl p-8 md:p-10 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need Support With Your Cyber Security or Tech Round Table?
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                We can provide event support globally. Let's discuss how FYAMI can help you achieve exceptional results.
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

export default BlogPostRSA;
