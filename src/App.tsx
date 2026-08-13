import React from 'react';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  const handleOpenQuoteModal = () => {
    alert('Get Free Quote CTA clicked! (Quote Modal will be integrated in step)');
  };

  return (
    <div className="min-h-screen bg-white text-[#0B1220] flex flex-col font-sans antialiased">
      {/* SECTION 1: GLOBAL NAVIGATION */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Temporary preview placeholder for testing Navbar alignment */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center text-center">
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 max-w-xl space-y-3 shadow-xs">
          <span className="inline-block px-3 py-1 bg-blue-50 text-[#1D61E7] text-xs font-semibold rounded-full border border-blue-100 uppercase tracking-wider">
            Section 1 Complete
          </span>
          <h2 className="text-xl font-bold text-[#0B1220]">Roofora Global Navigation Built</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            The premium responsive navbar matching <code className="text-blue-600">docs/reference.png</code> has been implemented and tested. Awaiting Section 2 instruction (Hero Section).
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
