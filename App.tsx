
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import SuccessStories from './components/SuccessStories';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import OrbitBackground from './components/OrbitBackground';
import BlogsPage from './components/BlogsPage';
import SuccessPage from './components/SuccessPage';
import BlogPostRSA from './components/BlogPostRSA';
import BlogPostLondonGherkin from './components/BlogPostLondonGherkin';
import BlogPost from './components/BlogPost';
import AboutUsPage from './components/AboutUsPage';
import { getBlogBySlug, BlogContent } from './data/blogContent';

type PageType = 'home' | 'blogs' | 'success' | 'blog-rsa-san-fran' | 'blog-london-gherkin' | 'blog-dynamic' | 'about';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [currentBlog, setCurrentBlog] = useState<BlogContent | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/blogs') {
        setCurrentPage('blogs');
        setCurrentBlog(null);
        window.scrollTo(0, 0);
      } else if (hash === '#/about') {
        setCurrentPage('about');
        setCurrentBlog(null);
        window.scrollTo(0, 0);
      } else if (hash === '#/success') {
        setCurrentPage('success');
        setCurrentBlog(null);
        window.scrollTo(0, 0);
      } else if (hash === '#/blog/rsa-san-fran-2024') {
        setCurrentPage('blog-rsa-san-fran');
        setCurrentBlog(null);
        window.scrollTo(0, 0);
      } else if (hash === '#/blog/london-gherkin-2024') {
        setCurrentPage('blog-london-gherkin');
        setCurrentBlog(null);
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#/blog/')) {
        const slug = hash.replace('#/blog/', '');
        const blog = getBlogBySlug(slug);
        if (blog) {
          setCurrentPage('blog-dynamic');
          setCurrentBlog(blog);
          window.scrollTo(0, 0);
        } else {
          setCurrentPage('home');
          setCurrentBlog(null);
        }
      } else {
        setCurrentPage('home');
        setCurrentBlog(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderWithLayout = (content: React.ReactNode) => (
    <div className="relative min-h-screen selection:bg-[#6D28D9] selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-white">
        <OrbitBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        {content}
        <Footer />
      </div>
    </div>
  );

  if (currentPage === 'blog-dynamic' && currentBlog) {
    return renderWithLayout(<BlogPost blog={currentBlog} />);
  }

  if (currentPage === 'blog-rsa-san-fran') {
    return renderWithLayout(<BlogPostRSA />);
  }

  if (currentPage === 'blog-london-gherkin') {
    return renderWithLayout(<BlogPostLondonGherkin />);
  }

  if (currentPage === 'blogs') {
    return renderWithLayout(<BlogsPage />);
  }

  if (currentPage === 'success') {
    return renderWithLayout(<SuccessPage />);
  }

  if (currentPage === 'about') {
    return renderWithLayout(<AboutUsPage />);
  }

  return (
    <div className="relative min-h-screen selection:bg-[#6D28D9] selection:text-white">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-white">
        <OrbitBackground />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <WhyUs />
          <SuccessStories />
          <Blog />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
