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

const App: React.FC = () => {
  const handleOpenQuoteModal = () => {
    alert('Get Free Estimate CTA clicked!');
  };

  return (
    <div className="min-h-screen bg-white text-[#0B1220] flex flex-col font-sans antialiased selection:bg-[#1D61E7] selection:text-white">
      {/* SECTION 1: GLOBAL NAVIGATION */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* SECTION 2: HERO SECTION */}
      <Hero onOpenQuoteModal={handleOpenQuoteModal} />

      {/* SECTION 3: SERVICES / COMPLETE ROOFING SOLUTIONS (LIGHT) */}
      <ServicesSection />

      {/* SECTION 4: RECENT PROJECTS / REAL WORK (DARK NAVY) */}
      <ProjectsSection />

      {/* SECTION 5: WHY HOMEOWNERS CHOOSE US (LIGHT) */}
      <WhyChooseUs />

      {/* SECTION 6: FINANCING / CLEAR ESTIMATES (LIGHT / FLOATING CARD) */}
      <FinancingSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* SECTION 7: OUR SIMPLE PROCESS (LIGHT) */}
      <ProcessSection />

      {/* SECTION 8: SERVICE AREAS (SPLIT / LIGHT) */}
      <ServiceAreas />

      {/* SECTION 9: TESTIMONIALS (LIGHT) */}
      <TestimonialsSection />

      {/* SECTION 10: FINAL CTA (ROOFORA BLUE) */}
      <FinalCTA onOpenQuoteModal={handleOpenQuoteModal} />

      {/* SECTION 11: FOOTER (DARK NAVY) */}
      <Footer />
    </div>
  );
};

export default App;
