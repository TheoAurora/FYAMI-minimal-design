
import React from 'react';

interface CaseStudy {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  img: string;
  link: string;
  isInternal?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Case Study: Renewable Energy & Cyber Security Round Table Event: RSA, San Fran 2024",
    date: "12 May 2024",
    excerpt: "Case Study: FYAMI's Leadership in Roundtable Attendance. Renewable Energy & Cyber security roundtable at RSA San Francisco 2024.",
    category: "Case Study",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Sunset%20view%20of%20the%20Golden%20Gate%20Bridge%20and%20fog%20from%20Battery%20Spencer%2c%20%20Golden%20Gate%20National%20Recreation%20Area%2c%20in%20San%20Francisco%2c%20California..jpeg",
    link: "#/blog/rsa-san-fran-2024",
    isInternal: true
  },
  {
    title: "Case Study: Fortifying Renewable Energy Assets Through Cyber Resilience - Round Table, London Gherkin Event",
    date: "12 May 2024",
    excerpt: "Case Study: Fortifying Renewable Energy Assets Through Cyber Resilience - Round Table London Gherkin Event showcasing FYAMI's expertise.",
    category: "Case Study",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Mid%20section%20of%20bartender%20pouring%20red%20wine%20on%20glass%20in%20bar%20counter.jpeg",
    link: "#/blog/london-gherkin-2024",
    isInternal: true
  },
  {
    title: "Case Study: Doherty Associates & Microsoft - Digital Transformation Event",
    date: "2024",
    excerpt: "FYAMI orchestrated a successful Microsoft-partnered event at the Gherkin, generating net new leads and C-suite relationships in finance and legal sectors.",
    category: "Case Study",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Business%20people%20at%20the%20meeting%20at%20the%20lunch%20buffet-1.jpeg",
    link: "#/blog/doherty-microsoft",
    isInternal: true
  },
  {
    title: "Case Study: Intersys Cyber Security - LinkedIn Lead Generation",
    date: "2024",
    excerpt: "Over 50 C-level executives requested dark web reports within two weeks, achieving 100% increase in LinkedIn company page engagement.",
    category: "Case Study",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Conceptual%20digital%20image%20of%20lock%20on%20circuit%20background.jpeg",
    link: "#/blog/intersys-cybersecurity",
    isInternal: true
  },
  {
    title: "Case Study: Doherty & Fortinet Partnership - Mitigating Risk Event",
    date: "2024",
    excerpt: "89% event turnout, £140k in new business secured, and Doherty awarded Fortinet Partner of the Year after upgrading from silver to gold partner.",
    category: "Case Study",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Successful%20business%20presentation%20of%20a%20man%20at%20the%20office.jpeg",
    link: "#/blog/doherty-fortinet",
    isInternal: true
  },
  {
    title: "Case Study: Microsoft - Azure & M365 Demand Generation",
    date: "2024",
    excerpt: "Targeted FTSE 250 legal and finance firms with Azure and M365 solutions, engaging C-suite decision-makers and generating strong pipeline expansion.",
    category: "Case Study",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Young%20people%20meeting%20with%20digital%20tablet.jpeg",
    link: "#/blog/microsoft-case-study",
    isInternal: true
  }
];

const SuccessPage: React.FC = () => {
  const featuredPost = caseStudies[0];
  const otherPosts = caseStudies.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF9F6] to-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-sm font-bold text-[#6D28D9] uppercase tracking-[0.2em] mb-4">Success Stories</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#425B76] mb-6">Case Studies</h2>
          <p className="text-lg md:text-xl opacity-70 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped B2B tech companies achieve measurable growth through strategic sales and marketing initiatives.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <a
            href={featuredPost.link}
            {...(featuredPost.isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="group block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[21/9] relative">
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="inline-block bg-[#6D28D9] px-4 py-1 rounded-full text-sm font-bold text-white mb-4">
                  {featuredPost.category}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#6D28D9] transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-white/80 text-lg max-w-2xl mb-4">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-white/60">
                  <span>{featuredPost.date}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Other Case Studies */}
      {otherPosts.length > 0 && (
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((study, index) => (
                <a
                  key={index}
                  href={study.link}
                  {...(study.isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="group block"
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={study.img}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#6D28D9] px-3 py-1 rounded-full text-xs font-bold text-white">
                        {study.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-[#53535B] opacity-60 mb-2">{study.date}</div>
                      <h4 className="text-xl font-bold text-[#425B76] mb-3 group-hover:text-[#6D28D9] transition-colors line-clamp-2">
                        {study.title}
                      </h4>
                      <p className="text-[#53535B] opacity-80 text-sm line-clamp-3">
                        {study.excerpt}
                      </p>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SuccessPage;
