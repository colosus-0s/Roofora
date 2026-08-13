import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProofStrip } from './components/ProofStrip';
import { WhoWeAre } from './components/WhoWeAre';
import { ServicesGrid } from './components/ServicesGrid';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ProcessSection } from './components/ProcessSection';
import { FinancingWarranties } from './components/FinancingWarranties';
import { ServiceAreas } from './components/ServiceAreas';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';

const App: React.FC = () => {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const handleOpenEstimateModal = () => {
    setIsEstimateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans antialiased text-[#0F172A] selection:bg-[#EA580C] selection:text-white">
      {/* 1. Header Navigation Shell */}
      <Header onOpenEstimateModal={handleOpenEstimateModal} />

      {/* 2. Above-The-Fold High-Conversion Hero */}
      <HeroSection onOpenEstimateModal={handleOpenEstimateModal} />

      {/* 3. Authority Metrics Proof Strip */}
      <ProofStrip />

      {/* 4. Who We Are - Local Austin Authority */}
      <WhoWeAre />

      {/* 5. Complete Services Grid */}
      <ServicesGrid onOpenEstimateModal={handleOpenEstimateModal} />

      {/* 6. Portfolio Showcase with Interactive Before & After Proof */}
      <PortfolioShowcase onOpenEstimateModal={handleOpenEstimateModal} />

      {/* 7. Transparent 4-Step Process */}
      <ProcessSection onOpenEstimateModal={handleOpenEstimateModal} />

      {/* 8. Flexible Financing & Warranties */}
      <FinancingWarranties onOpenEstimateModal={handleOpenEstimateModal} />

      {/* 9. Local Service Areas & Radius */}
      <ServiceAreas />

      {/* 10. Homeowner Testimonials & Google Reviews */}
      <TestimonialsSection />

      {/* 11. Final High-Impact Conversion CTA */}
      <FinalCTA onOpenEstimateModal={handleOpenEstimateModal} />

      {/* 12. Complete Local Business Footer */}
      <Footer onOpenEstimateModal={handleOpenEstimateModal} />

      {/* Interactive Free Estimate Request Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
      />
    </div>
  );
};

export default App;
