import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FinancingSection } from './components/FinancingSection';
import { ProcessSection } from './components/ProcessSection';
import { ServiceAreas } from './components/ServiceAreas';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';

const App: React.FC = () => {
  const handleOpenQuoteModal = () => {
    alert('Get Free Estimate CTA clicked!');
  };

  return (
    <div className="min-h-screen bg-white text-[#0B1220] flex flex-col font-sans antialiased selection:bg-[#1D61E7] selection:text-white">
      {/* Dynamic Head SEO & JSON-LD Structured Data */}
      <SEO />

      {/* SECTION 1: GLOBAL NAVIGATION */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      <main className="flex-grow">
        {/* SECTION 2: HERO SECTION */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* SECTION 3: SERVICES / COMPLETE ROOFING SOLUTIONS */}
        <ServicesSection />

        {/* SECTION 4: RECENT PROJECTS / REAL WORK */}
        <ProjectsSection />

        {/* SECTION 5: WHY HOMEOWNERS CHOOSE US */}
        <WhyChooseUs />

        {/* SECTION 6: FINANCING / CLEAR ESTIMATES */}
        <FinancingSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* SECTION 7: OUR SIMPLE PROCESS */}
        <ProcessSection />

        {/* SECTION 8: SERVICE AREAS */}
        <ServiceAreas onOpenQuoteModal={handleOpenQuoteModal} />

        {/* SECTION 9: TESTIMONIALS */}
        <TestimonialsSection />

        {/* SECTION 10: FINAL CTA */}
        <FinalCTA onOpenQuoteModal={handleOpenQuoteModal} />
      </main>

      {/* SECTION 11: FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
