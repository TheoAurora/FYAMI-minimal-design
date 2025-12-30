import React from 'react';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  img: string;
  link: string;
  isInternal?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    title: "Microsoft & MSP Charity/Non-profit Webinar on Copilot",
    date: "12 May 2024",
    excerpt: "The webinar aimed to introduce charities and non-profits to Microsoft 365 Copilot, a powerful AI tool that can transform how organisations operate and deliver their missions.",
    category: "Webinar",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Happy%20volunteer%20looking%20at%20donation%20box%20on%20a%20sunny%20day.jpeg",
    link: "#/blog/microsoft-copilot-webinar",
    isInternal: true
  },
  {
    title: "Elevate Your B2B Demand Generation Across Key Sectors with FYAMI's Expert Event Management Services",
    date: "12 May 2024",
    excerpt: "Discover how FYAMI's expert event management services can elevate your B2B demand generation across key sectors with targeted strategies and proven results.",
    category: "Demand Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Business%20people%20at%20the%20meeting%20at%20the%20lunch%20buffet-1.jpeg",
    link: "#/blog/b2b-demand-generation-events",
    isInternal: true
  },
  {
    title: "Why Should You Write Blogs for Your Business? The Power of Blogging for Your Business",
    date: "31 March 2024",
    excerpt: "The Power of Blogging for Your Business: SEO, Thought Leadership, and Social Media Success. Learn how blogging can transform your marketing strategy.",
    category: "Marketing",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Happy%20young%20woman%20sitting%20on%20the%20floor%20with%20crossed%20legs%20and%20using%20laptop%20on%20gray%20background.jpeg",
    link: "#/blog/why-write-blogs-for-business",
    isInternal: true
  },
  {
    title: "50 Lead Generation Ideas for Professional Services Companies",
    date: "10 March 2024",
    excerpt: "Generating leads for professional services companies in London, a highly competitive market, requires innovative and targeted strategies.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Tablet%20pc%20with%20text%20Get%20More%20Leads%20with%20blue%20background.jpeg",
    link: "#/blog/50-lead-generation-ideas",
    isInternal: true
  },
  {
    title: "What Is Lead Scoring?",
    date: "10 March 2024",
    excerpt: "Lead scoring is a methodology used in marketing and sales to evaluate the potential of a lead and prioritise your outreach efforts effectively.",
    category: "Strategy",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Sales%20Process%20on%20the%20Metal%20Gears%20on%20Black%20Background..jpeg",
    link: "#/blog/what-is-lead-scoring",
    isInternal: true
  },
  {
    title: "Here Are 10 Questions People Commonly Ask on Google Related to Lead Generation",
    date: "27 February 2024",
    excerpt: "Here are 10 questions that people commonly ask on Google related to lead generation, answered by FYAMI's experts.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Computer%20keyboard%20with%20word%20Lead%20Generation.jpeg",
    link: "#/blog/10-lead-generation-questions",
    isInternal: true
  },
  {
    title: "Nurturing Growth: A Guide to Securing Seed Funding for Your Business",
    date: "4 February 2024",
    excerpt: "Starting a new business is an exciting journey, and securing seed funding is often a crucial step in turning your vision into reality.",
    category: "Funding",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Confident%20female%20designer%20working%20on%20a%20digital%20tablet%20in%20red%20creative%20office%20space.jpeg",
    link: "#/blog/securing-seed-funding",
    isInternal: true
  },
  {
    title: "Why Do I Need to Blog?",
    date: "20 January 2024",
    excerpt: "The Power of Blogging: Elevating Your Marketing Strategy and Generating Leads. In the dynamic world of digital marketing, blogging remains essential.",
    category: "Marketing",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Image%20of%20a%20succesful%20casual%20business%20woman%20using%20laptop%20during%20meeting.jpeg",
    link: "#/blog/why-do-i-need-to-blog",
    isInternal: true
  },
  // Page 2
  {
    title: "Popular Marketing Questions People Are Asking on Google",
    date: "17 January 2024",
    excerpt: "Here are some popular marketing questions people are asking on Google with expert answers to help guide your strategy.",
    category: "Marketing",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Happy%20young%20woman%20sitting%20on%20the%20floor%20with%20crossed%20legs%20and%20using%20laptop%20on%20gray%20background.jpeg",
    link: "#/blog/marketing-questions-google",
    isInternal: true
  },
  {
    title: "How Can an Accountant Attract More Leads and Get More Business?",
    date: "14 January 2024",
    excerpt: "An accountancy firm can attract more business through a variety of strategies tailored to their target market.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Confident%20female%20designer%20working%20on%20a%20digital%20tablet%20in%20red%20creative%20office%20space.jpeg",
    link: "#/blog/accountant-lead-generation",
    isInternal: true
  },
  {
    title: "Expanding Horizons: Launching Your UK Business in the Middle East",
    date: "11 January 2024",
    excerpt: "A comprehensive guide to expanding your UK business into the Middle East market successfully.",
    category: "Strategy",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Business%20people%20at%20the%20meeting%20at%20the%20lunch%20buffet-1.jpeg",
    link: "#/blog/uk-business-middle-east",
    isInternal: true
  },
  {
    title: "Does Updating Google My Business Help With SEO Rankings?",
    date: "3 January 2024",
    excerpt: "Yes, updating your Google My Business page can have a positive impact on your local SEO and search rankings.",
    category: "SEO",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Computer%20keyboard%20with%20word%20Lead%20Generation.jpeg",
    link: "#/blog/google-my-business-seo",
    isInternal: true
  },
  {
    title: "LinkedIn Profile Optimisation Checklist for Lead & Demand Generation",
    date: "21 December 2023",
    excerpt: "A comprehensive checklist for optimising your LinkedIn profile to generate more leads and demand.",
    category: "LinkedIn",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Image%20of%20a%20succesful%20casual%20business%20woman%20using%20laptop%20during%20meeting.jpeg",
    link: "#/blog/linkedin-profile-optimisation",
    isInternal: true
  },
  {
    title: "Crafting a Seamless Webinar Experience with Microsoft Teams",
    date: "19 December 2023",
    excerpt: "Executing a seamless webinar experience requires careful planning and technical setup. Here's your guide.",
    category: "Events",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Businesswoman%20standing%20on%20stage%20and%20reporting%20for%20audience.jpeg",
    link: "#/blog/microsoft-teams-webinar",
    isInternal: true
  },
  {
    title: "Sales Strategies Used by Famous Brands: Coca-Cola, Apple and Amazon",
    date: "17 December 2023",
    excerpt: "Learn from the best - here are five examples of sales strategies used by famous brands like Apple, Amazon, and Coca-Cola.",
    category: "Strategy",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Sales%20Process%20on%20the%20Metal%20Gears%20on%20Black%20Background..jpeg",
    link: "#/blog/famous-brand-sales-strategies",
    isInternal: true
  },
  {
    title: "Fintech Marketing: What Are the Risks?",
    date: "15 December 2023",
    excerpt: "Fintech marketing, like any other marketing strategy, comes with its own set of risks that need to be managed.",
    category: "Fintech",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Hand%20holding%20smartphone%20with%20hand%20drawn%20media%20icons%20and%20symbols%20concept.jpeg",
    link: "#/blog/fintech-marketing-risks",
    isInternal: true
  },
  {
    title: "What Does a Head of Marketing in the Tech Sector Do?",
    date: "14 December 2023",
    excerpt: "The role of a Head of Marketing for a technology company involves extensive people and stakeholder management.",
    category: "Management",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Group%20of%20business%20people%20in%20office%20working%20on%20project.jpeg",
    link: "#/blog/head-of-marketing-tech",
    isInternal: true
  },
  {
    title: "Launching a New Tech or Fintech Solution? The Importance of a GTM Strategist",
    date: "14 December 2023",
    excerpt: "Launching a new tech or fintech solution is exciting, but without a GTM strategist it can be challenging.",
    category: "Strategy",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/top%20view%20of%20businessman%20hand%20working%20with%20modern%20technology%20and%20digital%20layer%20effect%20as%20business%20strategy%20concept.jpeg",
    link: "#/blog/gtm-strategist-importance",
    isInternal: true
  },
  // Page 3
  {
    title: "SEO Strategy for Your Accountancy Business: What to Consider",
    date: "14 December 2023",
    excerpt: "Looking to do an SEO strategy for your accountancy business? Here are some ideas to get you started.",
    category: "SEO",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/woman%20investment%20consultant%20analyzing%20company%20annual%20financial%20report%20balance%20sheet%20statement%20working%20with%20documents%20graphs.%20Stock%20market%2c%20office%2c%20tax%2c%20education%20concept.%20Hands%20with%20charts%20papers.jpeg",
    link: "#/blog/seo-strategy-accountancy",
    isInternal: true
  },
  {
    title: "The Power Duo: CMO and CTO Collaboration for Business Growth",
    date: "14 December 2023",
    excerpt: "Collaborative synergy between CMO and CTO is essential for sales and marketing success and business growth.",
    category: "Management",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Multiethnic%20group%20of%20young%20people%20sitting%20in%20conference%20room%20and%20brainstorming%20on%20business%20meeting.jpeg",
    link: "#/blog/cmo-cto-collaboration",
    isInternal: true
  },
  {
    title: "Tech Marvels Unleashed: Strategies Behind Unforgettable Marketing Campaigns",
    date: "14 December 2023",
    excerpt: "Decoding the strategies behind unforgettable technology marketing campaigns from Apple and beyond.",
    category: "Marketing",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/communication%20technology%20mobile%20phone%20high%20tech%20concept.%20Happy%20man%20using%20texting%20on%20smartphone%20social%20media%20application%20icons%20flying%20out%20of%20cellphone%20isolated%20grey%20wall%20background.%204g%20data%20plan.jpeg",
    link: "#/blog/tech-marketing-campaigns",
    isInternal: true
  },
  {
    title: "Top 2023 Lead Generation Ideas for Cyber Security Consultancy Firms",
    date: "14 December 2023",
    excerpt: "Lead generation ideas tailored specifically for cybersecurity consultancy tech firms.",
    category: "Cyber",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Eye%20viewing%20digital%20information%20represented%20by%20circles%20and%20signs.jpeg",
    link: "#/blog/cybersecurity-lead-generation-2023",
    isInternal: true
  },
  {
    title: "Running an Event? Your Round Table Event Planning Checklist",
    date: "14 December 2023",
    excerpt: "A comprehensive checklist for planning and executing successful cyber security round table events.",
    category: "Events",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Business%20people%20at%20the%20meeting%20at%20the%20lunch%20buffet.jpeg",
    link: "#/blog/round-table-event-checklist",
    isInternal: true
  },
  {
    title: "Sales Manager's Dilemma: 20 Reasons Your Team Isn't Closing Deals",
    date: "16 November 2023",
    excerpt: "As a sales manager, poor deal closure affects revenue and morale. Here are 20 potential reasons why.",
    category: "Sales",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Successful%20business%20presentation%20of%20a%20man%20at%20the%20office.jpeg",
    link: "#/blog/sales-team-not-closing",
    isInternal: true
  },
  {
    title: "Unpacking the Power of Value Proposition: 10 Famous Examples",
    date: "9 November 2023",
    excerpt: "In a world teeming with options, articulating clear value matters. Learn from 10 famous examples.",
    category: "Strategy",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Businessman%20showing%20computer%20screen%20to%20coworkers%20in%20creative%20office.jpeg",
    link: "#/blog/value-proposition-examples",
    isInternal: true
  },
  {
    title: "The Crucial Role of Thought Leadership in Lead Generation",
    date: "2 November 2023",
    excerpt: "In today's fast-paced and highly competitive marketplace, thought leadership is essential for lead generation.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Successful%20business%20presentation%20of%20a%20man%20at%20the%20office.jpeg",
    link: "#/blog/thought-leadership-lead-generation",
    isInternal: true
  },
  {
    title: "A Guide to Lead Generation for Accountants",
    date: "2 November 2023",
    excerpt: "In today's digital age, lead generation proves essential for accounting firms to grow their client base.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Tablet%20pc%20with%20text%20Get%20More%20Leads%20with%20blue%20background.jpeg",
    link: "#/blog/lead-generation-accountants-guide",
    isInternal: true
  },
  {
    title: "Navigating the Skies of Success: Marketing in the Airline Industry",
    date: "2 November 2023",
    excerpt: "The airline industry remains highly competitive and dynamic. Here's how to navigate marketing success.",
    category: "Marketing",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Business%20people%20at%20the%20meeting%20at%20the%20lunch%20buffet-1.jpeg",
    link: "#/blog/airline-industry-marketing",
    isInternal: true
  },
  // Page 4
  {
    title: "PPL to PPC: Private Pilot's License and Demand Marketing Connection",
    date: "2 November 2023",
    excerpt: "Exploring the fascinating connections between private pilot licensing and demand marketing strategies.",
    category: "Marketing",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Image%20of%20little%20boy%20in%20pilots%20helmet%20playing%20with%20toy%20airplane%20against%20clouds%20background.jpeg",
    link: "#/blog/ppl-to-ppc",
    isInternal: true
  },
  {
    title: "B2B Demand Generation Events Project Management Plan",
    date: "1 November 2023",
    excerpt: "What to include in your B2B demand generation events project management plan for success.",
    category: "Events",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Businesswoman%20standing%20on%20stage%20and%20reporting%20for%20audience.jpeg",
    link: "#/blog/b2b-events-project-management",
    isInternal: true
  },
  {
    title: "The Power of Running Round Table Events in London",
    date: "20 October 2023",
    excerpt: "Uniting businesses through the power of round table events in London to drive leads and new clients.",
    category: "Events",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Business%20people%20at%20the%20meeting%20at%20the%20lunch%20buffet.jpeg",
    link: "#/blog/round-table-events-london",
    isInternal: true
  },
  {
    title: "How to Get Leads for Your IT/Tech/MSP Business Without Spending Money",
    date: "19 October 2023",
    excerpt: "Effective strategies for generating leads for your IT, tech, or MSP business without financial investment.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Tablet%20pc%20with%20text%20Get%20More%20Leads%20with%20blue%20background.jpeg",
    link: "#/blog/it-leads-without-spending",
    isInternal: true
  },
  {
    title: "Searching for MSP Lead Generation?",
    date: "17 October 2023",
    excerpt: "Expert assistance with managed service provider lead generation services to grow your business.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Businesswoman%20standing%20on%20stage%20and%20reporting%20for%20audience.jpeg",
    link: "#/blog/msp-lead-generation-search",
    isInternal: true
  },
  {
    title: "Mastering Cybersecurity Marketing: Lead Generation Strategies That Work",
    date: "17 October 2023",
    excerpt: "Effective approaches to generate leads within the cybersecurity sector that actually deliver results.",
    category: "Cyber",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Young%20people%20meeting%20with%20digital%20tablet.jpeg",
    link: "#/blog/cybersecurity-marketing-strategies",
    isInternal: true
  },
  {
    title: "Crafting a Go-To-Market (GTM) Strategy for Tech Innovation",
    date: "14 October 2023",
    excerpt: "A framework for developing market entry strategies for technology products and innovations.",
    category: "Strategy",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/istockphoto-1380007744-612x612.jpg",
    link: "#/blog/gtm-strategy-tech",
    isInternal: true
  },
  {
    title: "The Importance of B2B Lead Generation & Understanding What It Is",
    date: "13 October 2023",
    excerpt: "Lead generation is the foundational process in B2B business development. Here's what you need to know.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Business%20team%20working%20together%20at%20a%20call%20centre%20wearing%20headsets.jpeg",
    link: "#/blog/b2b-lead-generation-importance",
    isInternal: true
  },
  {
    title: "How to Plan a Successful B2B Webinar in Easy Steps",
    date: "13 October 2023",
    excerpt: "Step-by-step guidance for planning and executing successful B2B webinar events.",
    category: "Events",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Business%20man%20pointing%20to%20transparent%20board%20with%20text%20Free%20Webinar.jpeg",
    link: "#/blog/b2b-webinar-planning",
    isInternal: true
  },
  {
    title: "Best Sales Emails for Your Lead Prospecting",
    date: "13 October 2023",
    excerpt: "A collection of effective email templates and examples for successful lead prospecting.",
    category: "Sales",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Computer%20keyboard%20with%20word%20Lead%20Generation.jpeg",
    link: "#/blog/best-sales-emails",
    isInternal: true
  },
  // Page 5
  {
    title: "Follow Up Survey Examples for Lead Generation Events",
    date: "13 October 2023",
    excerpt: "A good follow-up survey after a lead generation prospect event should be concise and focused.",
    category: "Events",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Successful%20business%20presentation%20of%20a%20man%20at%20the%20office.jpeg",
    link: "#/blog/follow-up-survey-events",
    isInternal: true
  },
  {
    title: "How to Manage a B2B Prospect Event Guest List Effectively",
    date: "13 October 2023",
    excerpt: "Managing a B2B prospect event guest list effectively is crucial for ensuring a successful event.",
    category: "Events",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/business%20people%20group%20have%20education%20leasson%20on%20seminar%20training%20event%20at%20small%20bright%20office%20conference%20room.jpeg",
    link: "#/blog/b2b-event-guest-list",
    isInternal: true
  },
  {
    title: "What Can Golf Teach You About Marketing?",
    date: "13 October 2023",
    excerpt: "Golf offers insights into precision, strategy, and patience applicable to business growth and marketing.",
    category: "Marketing",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Happy%20volunteer%20looking%20at%20donation%20box%20on%20a%20sunny%20day.jpeg",
    link: "#/blog/golf-marketing-lessons",
    isInternal: true
  },
  {
    title: "Transatlantic Triumph: UK Businesses Targeting the USA",
    date: "13 October 2023",
    excerpt: "A comprehensive guide for UK enterprises expanding into American markets successfully.",
    category: "Strategy",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Sunset%20view%20of%20the%20Golden%20Gate%20Bridge%20and%20fog%20from%20Battery%20Spencer%2c%20%20Golden%20Gate%20National%20Recreation%20Area%2c%20in%20San%20Francisco%2c%20California..jpeg",
    link: "#/blog/uk-businesses-usa",
    isInternal: true
  },
  {
    title: "Teeing Up Success: What Golf Can Teach You About Sales",
    date: "13 October 2023",
    excerpt: "Exploring the parallels between golf and sales for professional achievement and success.",
    category: "Sales",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Multiethnic%20group%20of%20young%20people%20sitting%20in%20conference%20room%20and%20brainstorming%20on%20business%20meeting.jpeg",
    link: "#/blog/golf-sales-lessons",
    isInternal: true
  },
  {
    title: "Silver Screen Sales: 10 Must-Watch Movies for Professionals",
    date: "13 October 2023",
    excerpt: "Essential cinema recommendations for sales, marketing, and C-level professionals.",
    category: "Marketing",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/team%20of%20successful%20business%20people%20having%20a%20meeting%20in%20executive%20sunlit%20office.jpeg",
    link: "#/blog/movies-for-professionals",
    isInternal: true
  },
  {
    title: "The Power of In-Person Seminars and Events in Lead Generation",
    date: "13 October 2023",
    excerpt: "Boosting business growth through the power of in-person seminars and events in demand generation.",
    category: "Events",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Young%20people%20meeting%20with%20digital%20tablet.jpeg",
    link: "#/blog/in-person-events-lead-gen",
    isInternal: true
  },
  {
    title: "Navigating the Risks of Pay-Per-Lead for MSPs",
    date: "4 October 2023",
    excerpt: "Examination of financial models for managed service providers seeking leads through pay-per-lead options.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Business%20man%20with%20the%20text%20Qualified%20Leads%20in%20a%20concept%20image.jpeg",
    link: "#/blog/pay-per-lead-msps",
    isInternal: true
  },
  {
    title: "Demand Generation: What Is It?",
    date: "3 October 2023",
    excerpt: "Demand Generation is a marketing strategy focused on creating awareness and interest in your offerings.",
    category: "Demand Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Businesswoman%20standing%20on%20stage%20and%20reporting%20for%20audience.jpeg",
    link: "#/blog/demand-generation-explained",
    isInternal: true
  },
  {
    title: "Microsoft's Best Marketing Campaigns",
    date: "1 October 2023",
    excerpt: "An overview of Microsoft's most notable and successful promotional initiatives.",
    category: "Marketing",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Young%20people%20meeting%20with%20digital%20tablet.jpeg",
    link: "#/blog/microsoft-marketing-campaigns",
    isInternal: true
  },
  // Page 6
  {
    title: "Simon Sinek's Golden Circle in Tech Business Leadership",
    date: "28 September 2023",
    excerpt: "Exploring how Simon Sinek's Golden Circle framework applies to tech business and marketing contexts.",
    category: "Strategy",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Successful%20business%20presentation%20of%20a%20man%20at%20the%20office.jpeg",
    link: "#/blog/simon-sinek-golden-circle",
    isInternal: true
  },
  {
    title: "Innovative Tech, AI, Data and Fintech Tools We Drive Leads For",
    date: "28 September 2023",
    excerpt: "A comprehensive list of all the amazing innovative tech, AI, data and fintech tools and solutions we help drive leads for.",
    category: "Tech",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/top%20view%20of%20businessman%20hand%20working%20with%20modern%20technology%20and%20digital%20layer%20effect%20as%20business%20strategy%20concept.jpeg",
    link: "#/blog/innovative-tech-tools",
    isInternal: true
  },
  {
    title: "50 Creative Lead Generation Ideas for MSPs & Tech Firms in the UK",
    date: "28 September 2023",
    excerpt: "Strategic approaches for UK technology and MSP firms to generate quality leads creatively.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Business%20man%20with%20the%20text%20Qualified%20Leads%20in%20a%20concept%20image.jpeg",
    link: "#/blog/50-lead-gen-ideas-msps-uk",
    isInternal: true
  },
  {
    title: "10 Proven Strategies to Boost Webinar Sign-Ups for Cyber Security",
    date: "28 September 2023",
    excerpt: "Tactics for increasing registrations for cybersecurity provider webinar events.",
    category: "Cyber",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Conceptual%20digital%20image%20of%20lock%20on%20circuit%20background.jpeg",
    link: "#/blog/webinar-signups-cybersecurity",
    isInternal: true
  },
  {
    title: "Unlocking MSP Growth with FYAMI",
    date: "9 September 2023",
    excerpt: "In the fast-paced world of modern business, acquiring new clients is essential for MSP growth.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Businessman%20showing%20computer%20screen%20to%20coworkers%20in%20creative%20office.jpeg",
    link: "#/blog/unlocking-msp-growth",
    isInternal: true
  },
  {
    title: "Addressing the Top 4 Challenges in Tech & MSP Lead Generation",
    date: "5 September 2023",
    excerpt: "Solutions for persistent obstacles in tech sector prospecting and lead generation.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Hand%20holding%20smartphone%20with%20hand%20drawn%20media%20icons%20and%20symbols%20concept.jpeg",
    link: "#/blog/top-4-challenges-msp-lead-gen",
    isInternal: true
  },
  {
    title: "Causes of Business Failure in the UK: Sales & Marketing Focus",
    date: "18 August 2023",
    excerpt: "Analysis of why enterprises struggle with revenue-generating sales and marketing functions.",
    category: "Strategy",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Group%20of%20business%20people%20in%20office%20working%20on%20project.jpeg",
    link: "#/blog/causes-business-failure-uk",
    isInternal: true
  },
  {
    title: "50 Marketing Ideas for Your Business",
    date: "18 August 2023",
    excerpt: "Discover 50 proven marketing strategies for business growth and success.",
    category: "Marketing",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Multiethnic%20group%20of%20young%20people%20sitting%20in%20conference%20room%20and%20brainstorming%20on%20business%20meeting.jpeg",
    link: "#/blog/50-marketing-ideas",
    isInternal: true
  },
  {
    title: "What Makes a Good Landing Page for Lead Generation?",
    date: "18 August 2023",
    excerpt: "Essential components for effective landing page conversion strategy and lead generation.",
    category: "Lead Gen",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Businessman%20showing%20computer%20screen%20to%20coworkers%20in%20creative%20office.jpeg",
    link: "#/blog/good-landing-page-lead-gen",
    isInternal: true
  },
  {
    title: "Mastering Global Technology Solution Sales: 10 Proven Tips",
    date: "18 August 2023",
    excerpt: "International approaches for technology vendor sales success across global markets.",
    category: "Sales",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Businessman%20showing%20computer%20screen%20to%20coworkers%20in%20creative%20office.jpeg",
    link: "#/blog/global-tech-sales-tips",
    isInternal: true
  },
  // Page 7
  {
    title: "20 Dynamic Marketing Strategies for Cyber Security Companies",
    date: "18 August 2023",
    excerpt: "Strategies focused on enhancing lead generation efforts for cybersecurity sector organisations.",
    category: "Cyber",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Businessman%20showing%20computer%20screen%20to%20coworkers%20in%20creative%20office.jpeg",
    link: "#/blog/20-cyber-marketing-strategies",
    isInternal: true
  },
  {
    title: "Mastering Lead Generation with HubSpot Landing Pages & Email Marketing",
    date: "18 August 2023",
    excerpt: "Guide on leveraging HubSpot tools and email tactics for effective lead generation campaigns.",
    category: "MarTech",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/team%20of%20successful%20business%20people%20having%20a%20meeting%20in%20executive%20sunlit%20office.jpeg",
    link: "#/blog/hubspot-lead-generation",
    isInternal: true
  },
  {
    title: "DIY Your Way to Websites & Apps",
    date: "2 August 2023",
    excerpt: "A practical guide covering do-it-yourself approaches to building websites and applications.",
    category: "Tech",
    img: "https://139641198.fs1.hubspotusercontent-eu1.net/hubfs/139641198/Hand%20holding%20smartphone%20with%20hand%20drawn%20media%20icons%20and%20symbols%20concept.jpeg",
    link: "#/blog/diy-websites-apps",
    isInternal: true
  }
];

const BlogsPage: React.FC = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF9F6] to-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-sm font-bold text-[#6D28D9] uppercase tracking-[0.2em] mb-4">Our Blog</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#425B76] mb-6">FYAMI Insights</h2>
          <p className="text-lg md:text-xl opacity-70 max-w-3xl mx-auto">
            Expert strategies on sales acceleration, lead generation, demand generation, and digital growth for B2B tech companies.
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
            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden">
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6 bg-[#6D28D9] text-white px-4 py-2 rounded-full text-sm font-bold">
                  Featured
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#6D28D9]/10 text-[#6D28D9] px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <span className="text-[#53535B] opacity-60 text-sm">{featuredPost.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#425B76] mb-4 group-hover:text-[#6D28D9] transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-[#53535B] opacity-80 leading-relaxed mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[#6D28D9] font-bold">
                  Read Article
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#425B76] mb-10">All Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                {...(post.isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="group block"
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-[#6D28D9]">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-sm text-[#53535B] opacity-60 mb-3">{post.date}</div>
                    <h4 className="text-xl font-bold text-[#425B76] mb-3 group-hover:text-[#6D28D9] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-[#53535B] opacity-80 leading-relaxed mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#6D28D9] font-bold text-sm mt-auto">
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#425B76] text-white rounded-full hover:bg-[#6D28D9] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
