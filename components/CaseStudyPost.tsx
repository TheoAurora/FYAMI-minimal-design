import React from 'react';
import { CaseStudyContent } from '../data/caseStudyContent';

interface CaseStudyPostProps {
  caseStudy: CaseStudyContent;
}

const CaseStudyPost: React.FC<CaseStudyPostProps> = ({ caseStudy }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF9F6] to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <a
            href="#/success"
            className="inline-flex items-center gap-2 text-[#6D28D9] font-semibold mb-8 hover:opacity-80 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Success Stories
          </a>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#6D28D9] text-white px-4 py-1.5 rounded-full text-sm font-bold">
              {caseStudy.category}
            </span>
            <span className="text-[#53535B] opacity-60">{caseStudy.date}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#425B76] mb-6 leading-tight">
            {caseStudy.title}
          </h1>

          {caseStudy.subtitle && (
            <p className="text-xl text-[#53535B] opacity-80 mb-8">
              {caseStudy.subtitle}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white rounded-xl px-4 py-3 shadow-md">
              <span className="text-xs text-[#6D28D9] font-semibold uppercase tracking-wide">Client</span>
              <p className="text-[#425B76] font-medium">{caseStudy.client}</p>
            </div>
            <div className="bg-white rounded-xl px-4 py-3 shadow-md">
              <span className="text-xs text-[#6D28D9] font-semibold uppercase tracking-wide">Location</span>
              <p className="text-[#425B76] font-medium">{caseStudy.location}</p>
            </div>
            <div className="bg-white rounded-xl px-4 py-3 shadow-md">
              <span className="text-xs text-[#6D28D9] font-semibold uppercase tracking-wide">Industry</span>
              <p className="text-[#425B76] font-medium">{caseStudy.industry}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={caseStudy.img}
              alt={caseStudy.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[#425B76] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#6D28D9] rounded-full flex items-center justify-center text-white text-sm">1</span>
              Overview
            </h2>
            <div className="space-y-4">
              {caseStudy.overview.map((paragraph, index) => (
                <p key={index} className="text-[#53535B] leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* The Challenge */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[#425B76] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#6D28D9] rounded-full flex items-center justify-center text-white text-sm">2</span>
              The Challenge
            </h2>
            <div className="space-y-4">
              {caseStudy.challenge.map((paragraph, index) => (
                <p key={index} className="text-[#53535B] leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Strategy */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[#425B76] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#6D28D9] rounded-full flex items-center justify-center text-white text-sm">3</span>
              Fyami's Strategy
            </h2>
            <div className="space-y-4">
              {caseStudy.strategy.map((paragraph, index) => (
                <p key={index} className="text-[#53535B] leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Execution */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[#425B76] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#6D28D9] rounded-full flex items-center justify-center text-white text-sm">4</span>
              Execution
            </h2>
            <div className="space-y-6">
              {caseStudy.execution.map((section, index) => (
                <div key={index} className="border-l-4 border-[#6D28D9] pl-6">
                  <h3 className="text-xl font-semibold text-[#425B76] mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-[#53535B] leading-relaxed flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#6D28D9] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Event Focus (if present) */}
          {caseStudy.eventFocus && caseStudy.eventFocus.length > 0 && (
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-[#425B76] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#6D28D9] rounded-full flex items-center justify-center text-white text-sm">5</span>
                What Was Discussed
              </h2>
              <ul className="space-y-3">
                {caseStudy.eventFocus.map((topic, index) => (
                  <li key={index} className="text-[#53535B] leading-relaxed flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#6D28D9] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results & Impact */}
          <div className="bg-gradient-to-r from-[#425B76] to-[#6D28D9] rounded-3xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">{caseStudy.eventFocus ? '6' : '5'}</span>
              Results & Impact
            </h2>
            <ul className="space-y-3">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-white/90">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why This Worked */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[#425B76] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#6D28D9] rounded-full flex items-center justify-center text-white text-sm">{caseStudy.eventFocus ? '7' : '6'}</span>
              Why This Worked
            </h2>
            <ul className="space-y-3">
              {caseStudy.whyItWorked.map((reason, index) => (
                <li key={index} className="text-[#53535B] leading-relaxed flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#6D28D9] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-lg">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-[#425B76] to-[#6D28D9] rounded-3xl p-8 md:p-10 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to achieve similar results?
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Contact us today to discuss how Fyami can help grow your business through strategic demand generation.
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
      </article>
    </div>
  );
};

export default CaseStudyPost;
