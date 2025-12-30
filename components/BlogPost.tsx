import React from 'react';
import { BlogContent } from '../data/blogContent';

interface BlogPostProps {
  blog: BlogContent;
}

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
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
              {blog.category}
            </span>
            <span className="text-[#53535B] opacity-60">{blog.date}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#425B76] mb-6 leading-tight">
            {blog.title}
          </h1>

          {blog.subtitle && (
            <p className="text-xl text-[#53535B] opacity-80 mb-8">
              {blog.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              {blog.content.map((paragraph, index) => (
                <p key={index} className="text-[#53535B] leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Section */}
            <section className="mt-12 bg-gradient-to-r from-[#425B76] to-[#6D28D9] rounded-2xl p-8 md:p-10 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Want to learn more?
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                Contact us today to discuss how we can help grow your business.
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

export default BlogPost;
