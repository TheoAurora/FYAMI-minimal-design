
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import SuccessStories from './components/SuccessStories';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import OrbitBackground from './components/OrbitBackground';

const App: React.FC = () => {
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
