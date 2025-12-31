export interface CaseStudyContent {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  category: string;
  img: string;
  client: string;
  service: string;
  industry: string;
  location: string;
  overview: string[];
  challenge: string[];
  strategy: string[];
  execution: {
    title: string;
    points: string[];
  }[];
  eventFocus?: string[];
  results: string[];
  whyItWorked: string[];
}

export const caseStudyContent: Record<string, CaseStudyContent> = {
  "cyber-energia-las-vegas": {
    slug: "cyber-energia-las-vegas",
    title: "Driving High-Value Pipeline Through Executive Roundtables",
    subtitle: "Securing the Next Gigawatt: Cyber Risks in the Renewable-Powered Data Center Boom",
    date: "8th September 2025",
    category: "Case Study",
    img: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800&auto=format&fit=crop&q=60",
    client: "Cyber Energia (Part of CFP Group)",
    service: "Demand Generation & Lead Generation",
    industry: "Cybersecurity, Renewable Energy, Data Centers",
    location: "Las Vegas, USA",
    overview: [
      "Cyber Energia, an OT cybersecurity specialist focused on protecting renewable energy infrastructure, partnered with Fyami to generate qualified enterprise demand and establish thought leadership at the intersection of cybersecurity, renewable energy, and data center infrastructure.",
      "Fyami designed and executed an invite-only executive roundtable in Las Vegas, targeting senior decision-makers responsible for critical infrastructure and operational resilience. The result was a highly curated, high-intent event with 100% attendance from confirmed guests and participation from C-level and senior technical leaders."
    ],
    challenge: [
      "As data center construction accelerates—driven by AI, cloud adoption, and renewable integration—operators face growing cyber risk across Operational Technology (OT) environments.",
      "Cyber Energia needed to reach senior, difficult-to-access buyers, create meaningful, peer-level engagement rather than transactional lead capture, position the brand as a trusted authority in OT cybersecurity, and ensure attendance from the right people, not just registrations."
    ],
    strategy: [
      "Fyami proposed a relationship-led demand generation strategy built around a private executive roundtable, prioritising quality, relevance, and trust.",
      "Instead of large-scale events or webinars, we focused on seniority over volume, carefully curated invitations, and a discussion-led format aligned to real-world challenges."
    ],
    execution: [
      {
        title: "ICP Definition & Targeting",
        points: [
          "Defined Cyber Energia's ideal customer profiles",
          "Built a targeted list of senior infrastructure, energy, and cybersecurity leaders",
          "Prioritised stakeholders with ownership over OT systems and cyber risk"
        ]
      },
      {
        title: "Multi-Channel Executive Outreach",
        points: [
          "Personalised LinkedIn outreach",
          "Targeted email campaigns",
          "Direct phone follow-ups",
          "This hands-on approach ensured commitment, not just interest"
        ]
      },
      {
        title: "Attendance & Experience Management",
        points: [
          "Application-only attendance to maintain exclusivity",
          "Calendar invites, agenda distribution, and confirmations",
          "Ongoing follow-ups to secure attendance",
          "Result: 100% turn-up rate from confirmed attendees"
        ]
      },
      {
        title: "Event Operations",
        points: [
          "Coordinated venue and dining arrangements",
          "Managed guest communications end-to-end",
          "Ensured a seamless, high-end executive experience"
        ]
      },
      {
        title: "Thought Leadership Positioning",
        points: [
          "Emerging cyber threats in next-generation data centers",
          "How renewable integration expands the OT attack surface",
          "Regulatory and compliance challenges",
          "Securing energy supply chains, PPAs, and on-site generation",
          "Best practices for OT security from design through operation"
        ]
      }
    ],
    results: [
      "100% attendance rate from confirmed guests",
      "Participation from CTOs, Asset Managers, and Heads of OT Cybersecurity",
      "Multiple high-value commercial conversations initiated",
      "Strengthened perception of Cyber Energia as a leader in renewable OT cybersecurity",
      "A proven, repeatable executive roundtable model for future demand generation",
      "The event delivered real conversations with real buyers, not vanity metrics."
    ],
    whyItWorked: [
      "Precise ICP targeting",
      "Direct, human outreach",
      "Senior-level positioning",
      "Operational excellence",
      "A discussion-led, value-first format",
      "Fyami didn't just fill seats—we ensured the right leaders showed up and stayed engaged."
    ]
  },

  "cyber-energia-london": {
    slug: "cyber-energia-london",
    title: "Accelerating Pipeline Through Executive Energy Security Roundtables",
    subtitle: "Cyber – Securing the Digital Backbone of the Energy Transition",
    date: "20th November 2025",
    category: "Case Study",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=60",
    client: "Cyber Energia (Part of CFP Group)",
    service: "Demand Generation & Lead Generation",
    industry: "Cybersecurity, Energy, Renewables",
    location: "London, UK – The Savoy Hotel",
    overview: [
      "Cyber Energia partnered with Fyami to drive senior-level demand and commercial impact through the London edition of its Global Roundtable Series, focused on cybersecurity and the energy transition.",
      "Hosted at the iconic Savoy Hotel, this invite-only executive roundtable brought together senior leaders from large energy companies, including asset managers, operational leaders, and professionals directly involved in regulation and compliance.",
      "The event delivered sales-qualified demand, supporting increased pipeline and contributing to closed deals for Cyber Energia."
    ],
    challenge: [
      "As the energy sector rapidly digitises—embracing remote monitoring, SCADA systems, and automated control environments—cyber risk has expanded across distributed OT and IT infrastructures.",
      "Cyber Energia needed to engage senior, hard-to-reach decision-makers, reach asset managers and operational leaders within large energy organisations, include stakeholders responsible for regulatory and compliance alignment, and generate demand that would translate into real pipeline and revenue."
    ],
    strategy: [
      "Fyami designed a relationship-led demand generation strategy built around a private, senior-level roundtable.",
      "The focus was on exclusivity and seniority over volume, practical non-technical discussion, alignment with UK and EU regulatory expectations, and creating a trusted environment that supports commercial progression."
    ],
    execution: [
      {
        title: "ICP Definition & Senior-Level Targeting",
        points: [
          "Defined Cyber Energia's ideal customer profiles across energy operations, asset management, and compliance",
          "Identified and prioritised high-value senior stakeholders within large energy organisations",
          "Ensured representation from leaders responsible for OT environments, regulatory alignment, and operational resilience"
        ]
      },
      {
        title: "Executive Outreach & Invitation Management",
        points: [
          "Personalised LinkedIn outreach",
          "Targeted email campaigns",
          "Direct follow-up to secure commitment",
          "Outreach emphasised the invite-only, limited-capacity nature of the event to maintain seniority and relevance"
        ]
      },
      {
        title: "Attendance & Experience Management",
        points: [
          "Application-led attendance model",
          "Calendar invites, agenda circulation, and reminders",
          "Careful attendee curation to support high-quality discussion"
        ]
      },
      {
        title: "Event Operations",
        points: [
          "Coordinated the Savoy venue experience",
          "Managed guest communications end-to-end",
          "Delivered a private, high-trust executive environment"
        ]
      },
      {
        title: "Agenda & Thought Leadership Design",
        points: [
          "Market-level cyber risk insights",
          "Strategies to strengthen resilience across distributed OT and IT environments",
          "Aligning with NIS2, CAF, and UK regulatory expectations without slowing digital deployment",
          "Improving visibility and incident response for SCADA and energy control networks",
          "Supplier assurance and supply-chain risk management across OT ecosystems"
        ]
      }
    ],
    results: [
      "Full-capacity attendance from senior energy leaders",
      "Strong representation from asset managers at large energy companies",
      "Participation from leaders directly involved in regulation and compliance",
      "Generation of sales-qualified leads",
      "Direct contribution to increased pipeline and closed deals",
      "The roundtable delivered depth of engagement and commercial relevance, not vanity metrics."
    ],
    whyItWorked: [
      "Precise ICP and senior-level targeting",
      "Personal, executive outreach",
      "A regulation-aware, market-specific narrative",
      "A trusted, peer-led discussion format",
      "Strong alignment between marketing execution and sales outcomes",
      "Fyami ensured the right leaders were in the room—and ready to engage commercially."
    ]
  },

  "cyber-energia-melbourne": {
    slug: "cyber-energia-melbourne",
    title: "Remote Executive Roundtable Delivery for APAC Market Entry",
    subtitle: "Cyber Security Act 2024 Compliance in Australian Renewables",
    date: "16th July 2025",
    category: "Case Study",
    img: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=800&auto=format&fit=crop&q=60",
    client: "Cyber Energia (Part of CFP Group)",
    service: "Demand Generation & Executive Event Lead Generation",
    industry: "Cybersecurity, Renewable Energy",
    location: "Melbourne, Australia",
    overview: [
      "Cyber Energia partnered with Fyami to deliver an executive roundtable in Melbourne, Australia, focused on securing renewable energy infrastructure in line with the Cyber Security Act 2024.",
      "While Cyber Energia's CEO hosted and led the discussion in person, Fyami managed the entire guest strategy remotely—owning targeting, outreach, confirmations, and attendance—ensuring the CEO was in the room with the right senior stakeholders.",
      "Fyami was 100% responsible for all guests, while also ensuring the event ran smoothly from planning through execution, despite being delivered across time zones."
    ],
    challenge: [
      "With new cyber regulations coming into force across Australia's critical infrastructure sector, Cyber Energia needed to engage senior renewable energy stakeholders in a new geography, ensure strong attendance without local on-the-ground support, free up the CEO to focus on relationship-building and discussion, and maintain the same quality and seniority as global roundtable events."
    ],
    strategy: [
      "Fyami acted as the remote demand generation and event execution partner, managing the event end-to-end from abroad."
    ],
    execution: [
      {
        title: "Remote Event Management",
        points: [
          "Defining the ideal guest profile for the Australian renewables market",
          "Personally targeting and inviting senior industry specialists",
          "Managing registrations, confirmations, and calendar invites",
          "Ensuring 100% ownership of the guest list and attendance",
          "Coordinating agendas and communications to support smooth delivery"
        ]
      }
    ],
    eventFocus: [
      "Compliance with the Cyber Security Act 2024",
      "Lessons from cyber regulation in other global markets",
      "The role of AI in renewable energy and how to secure it",
      "Emerging cybersecurity trends impacting the sector"
    ],
    results: [
      "Senior renewable energy professionals in attendance",
      "Strong engagement on regulatory and cyber risk topics",
      "Successful delivery of a high-quality executive event managed entirely remotely",
      "Enabled direct CEO-to-buyer conversations in the APAC market"
    ],
    whyItWorked: [
      "Deliver executive-level demand generation across geographies",
      "Own guest strategy and attendance end-to-end",
      "Support leadership teams by removing operational and logistical burden",
      "Execute consistently as part of a global roundtable series"
    ]
  },

  "cyber-energia-milan": {
    slug: "cyber-energia-milan",
    title: "In-Person Executive Roundtable Driving Pipeline in Southern Europe",
    subtitle: "Strengthening Cyber Resilience Across Renewable Energy Infrastructure",
    date: "7th May 2025",
    category: "Case Study",
    img: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&auto=format&fit=crop&q=60",
    client: "Cyber Energia (Part of CFP Group)",
    service: "Demand Generation & Executive Event Lead Generation",
    industry: "Cybersecurity, Renewable Energy",
    location: "Milan, Italy",
    overview: [
      "Cyber Energia partnered with Fyami to deliver an executive roundtable in Milan, Italy, focused on strengthening cyber resilience across renewable energy infrastructure.",
      "Fyami attended the event in person, supporting on-the-ground execution while owning the guest strategy, targeting, and attendance. The roundtable was also attended by Cyber Energia's sales leadership team, enabling direct engagement with senior industry stakeholders and supporting active pipeline growth."
    ],
    challenge: [
      "As renewable energy operators across Europe face increasing cyber risk and regulatory pressure—including NIS2 compliance—Cyber Energia needed to engage senior renewable energy and infrastructure leaders in Southern Europe, create peer-level discussion that supports commercial conversations, and enable sales leaders to build relationships with qualified prospects in a trusted setting."
    ],
    strategy: [
      "Fyami acted as the demand generation and event execution partner, combining outbound-led guest acquisition with in-person delivery."
    ],
    execution: [
      {
        title: "Guest Strategy & In-Person Execution",
        points: [
          "Defining the ideal guest profile for the Italian and wider European market",
          "Targeting and inviting senior renewable energy professionals",
          "Managing registrations, confirmations, and calendar invites",
          "Attending in person to support event flow, guest experience, and logistics",
          "Ensuring Cyber Energia's sales leaders were introduced to the right decision-makers"
        ]
      }
    ],
    eventFocus: [
      "Emerging cyber threats and mitigation strategies",
      "Cyber resilience in renewable energy environments",
      "Managing cyber risk across operational technology",
      "Regulatory challenges, including NIS2 compliance",
      "The role of AI in securing critical infrastructure"
    ],
    results: [
      "Attendance from senior renewable energy and infrastructure leaders",
      "Direct engagement between Cyber Energia sales leadership and qualified prospects",
      "Generation of high-quality conversations supporting pipeline development",
      "Strong positioning of Cyber Energia as a trusted advisor in renewable energy cybersecurity"
    ],
    whyItWorked: [
      "Align demand generation directly with sales objectives",
      "Deliver executive-level events that support pipeline creation",
      "Combine outbound guest acquisition with in-person execution",
      "Create environments where sales leaders can engage naturally and credibly"
    ]
  },

  "cyber-energia-hamburg": {
    slug: "cyber-energia-hamburg",
    title: "Generating High-Quality Executive Leads in Germany's Energy Sector",
    subtitle: "Securing Renewable Energy with Cybersecurity",
    date: "25th November 2025",
    category: "Case Study",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop&q=60",
    client: "Cyber Energia (Part of CFP Group)",
    service: "Demand Generation & Executive Event Lead Generation",
    industry: "Cybersecurity, Renewable Energy",
    location: "Hamburg, Germany – Tortue Hotel",
    overview: [
      "Cyber Energia partnered with Fyami to generate high-quality executive leads through the German edition of its \"Securing Renewable Energy with Cybersecurity\" global roundtable series.",
      "Hosted at the five-star Tortue Hotel in Hamburg, the invite-only roundtable brought together senior leaders responsible for securing and operating critical renewable energy infrastructure, including energy executives, cybersecurity leaders, asset managers, and O&M (Operations & Maintenance) leaders.",
      "Fyami attended in person, ensuring the right decision-makers were in the room and supporting a high-quality executive experience from arrival to close."
    ],
    challenge: [
      "Germany's energy sector is under increasing pressure to secure critical infrastructure as renewable assets scale, digitalisation accelerates, and cyber threats become more sophisticated.",
      "Cyber Energia needed to get senior, sales-relevant leaders into the same room, reach stakeholders accountable for operational resilience and cybersecurity outcomes, create meaningful discussion around improving cyber security not surface-level awareness, and generate leads that could progress into real pipeline opportunities."
    ],
    strategy: [
      "Fyami acted as the demand generation and on-site execution partner, owning the quality of leads and the executive experience."
    ],
    execution: [
      {
        title: "Lead Quality & On-Site Execution",
        points: [
          "Identifying and inviting senior leaders across operations, O&M, asset management, and cybersecurity",
          "Ensuring attendees had direct responsibility for critical infrastructure and operational resilience",
          "Managing registrations, confirmations, and communications",
          "Meeting and greeting guests at the venue to support relationship-building",
          "Supporting smooth event delivery, including agenda timing and flow",
          "Coordinating food and drinks in collaboration with Cyber Energia's internal PA and the venue"
        ]
      }
    ],
    eventFocus: [
      "How senior teams are improving cyber security across renewable energy infrastructure",
      "Building operational resilience across distributed OT environments",
      "Securing critical infrastructure against evolving cyber threats",
      "Strengthening supply-chain security and supplier assurance",
      "Improving visibility and incident response across energy networks"
    ],
    results: [
      "Senior, sales-qualified leaders in the room, not junior attendees",
      "Strong representation from O&M leaders and operational decision-makers",
      "High-quality, peer-led discussions directly tied to real-world challenges",
      "Generation of leads aligned to pipeline development and commercial follow-up",
      "Reinforced Cyber Energia's credibility in the German energy market"
    ],
    whyItWorked: [
      "Prioritised lead quality and seniority over volume",
      "Curated a room of leaders with direct ownership of cyber risk and operational resilience",
      "Created a trusted environment for open discussion on securing critical infrastructure",
      "Combined demand generation with hands-on, on-site execution",
      "Aligned marketing activity directly with sales and pipeline objectives",
      "Fyami ensured the right people were not just invited—but present, engaged, and commercially relevant."
    ]
  },

  "intersys-financial-services": {
    slug: "intersys-financial-services",
    title: "Driving Senior Financial Services Awareness and Leads Through Executive Roundtables",
    subtitle: "Operational Resilience: Technology, Operations, and People Working Together",
    date: "2025",
    category: "Case Study",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
    client: "Intersys (Security-First MSP)",
    service: "Demand Generation & Executive Event Lead Generation",
    industry: "Managed IT Services, Cybersecurity (Targeting Insurance, Reinsurance and Financial Services)",
    location: "London, UK – Leadenhall Market Office",
    overview: [
      "Intersys partnered with Fyami to drive senior-level awareness and lead generation within the financial services, insurance, and reinsurance sectors through a private executive breakfast roundtable at Intersys' Leadenhall Market office.",
      "The event brought together CIOs, CTOs, Heads of Operations, and Managing Directors for a timely discussion on operational resilience, shaped by the rise in high-profile cyber incidents affecting major organisations such as JLR and M&S."
    ],
    challenge: [
      "Recent cyber attacks have reinforced a critical message for financial services leaders: resilience cannot sit with technology teams alone.",
      "Intersys needed to raise awareness that technology, operations, and people must work together, position itself as a security-first MSP focused on resilience outcomes, create meaningful peer-led discussion beyond tooling, and generate sales-relevant conversations with regulated organisations."
    ],
    strategy: [
      "Fyami designed a relationship-led, awareness-driven demand generation strategy centred around an invite-only executive roundtable.",
      "The focus was on seniority and relevance over volume, a real-world incident-led narrative, highlighting that operational resilience is a shared responsibility, and creating a trusted environment for open cross-functional discussion."
    ],
    execution: [
      {
        title: "ICP Definition & Targeting",
        points: [
          "Defined ideal guest profiles across financial services, insurance, and reinsurance",
          "Targeted leaders accountable for technology, operations, and business continuity",
          "Ensured cross-functional representation to support broader resilience conversations"
        ]
      },
      {
        title: "Executive Outreach & Invitations",
        points: [
          "Personalised LinkedIn outreach",
          "Targeted email campaigns",
          "Direct follow-up to secure commitment",
          "All messaging framed the event as a strategic discussion on resilience, not a technology sales pitch"
        ]
      },
      {
        title: "Event Delivery",
        points: [
          "Breakfast roundtable format to suit senior schedules",
          "Hosted at Intersys' Leadenhall Market office",
          "Structured discussion to encourage collaboration between tech and operations leaders",
          "Ensured a smooth, executive-level experience throughout"
        ]
      }
    ],
    eventFocus: [
      "Technology, operations, and people working together to improve resilience",
      "Clear ownership and alignment across teams before incidents occur",
      "Strengthening response and recovery capabilities",
      "Embedding resilience into day-to-day operations, not just IT strategy"
    ],
    results: [
      "Attendance from CIOs, CTOs, Heads of Operations, and Managing Directors",
      "Strong awareness of Intersys' resilience-led, security-first approach",
      "High-quality engagement across technology and operational leaders",
      "Generation of qualified leads aligned to MSP and cyber-resilience services",
      "Strengthened credibility within regulated financial services markets"
    ],
    whyItWorked: [
      "Brought together technology and operations leaders in the same room",
      "Anchored discussions in real-world cyber incidents",
      "Focused the conversation on alignment, preparedness, and resilience",
      "Created a trusted environment for senior-level dialogue",
      "Aligned awareness-building directly with commercial opportunity"
    ]
  }
};

export function getCaseStudyBySlug(slug: string): CaseStudyContent | undefined {
  return caseStudyContent[slug];
}

export function getAllCaseStudies(): CaseStudyContent[] {
  return Object.values(caseStudyContent);
}
