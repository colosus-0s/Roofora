import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';

const App: React.FC = () => {
  const handleOpenQuoteModal = () => {
    alert('Get Free Estimate CTA clicked!');
  };

  return (
    <div className="min-h-screen bg-white text-[#0B1220] flex flex-col font-sans antialiased">
      {/* SECTION 1: GLOBAL NAVIGATION */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* SECTION 2: HERO SECTION */}
      <Hero onOpenQuoteModal={handleOpenQuoteModal} />

      {/* SECTION 3: SERVICES / COMPLETE ROOFING SOLUTIONS */}
      <ServicesSection />
    </div>
  );
};

export default App;
