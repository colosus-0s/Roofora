import React from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenQuoteModal?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="w-full bg-[#1D61E7] py-14 sm:py-20 lg:py-24 text-white relative overflow-hidden shadow-xl">
      {/* Background Radial Tint */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-8">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold text-white tracking-wide uppercase mx-auto">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            <span>PROTECT YOUR INVESTMENT</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
            Ready for a Roof You Don't Have to Worry About?
          </h2>

          {/* Subtext */}
          <p className="text-blue-100 font-medium text-sm sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Get your free, no-obligation estimate today and protect what matters most with Texas's trusted roofing craftsmen.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#1D61E7] font-extrabold text-sm sm:text-base lg:text-lg px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer transform active:scale-98"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            </button>

            <a
              href="tel:5125550198"
              className="w-full sm:w-auto border-2 border-white/80 hover:bg-white/10 text-white font-extrabold text-sm sm:text-base lg:text-lg px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer text-center"
            >
              <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
              <span>Call (512) 555-0198</span>
            </a>
          </div>

          <p className="text-[11px] sm:text-xs text-blue-200/90 font-medium pt-2">
            Fast 60-Second Request • Free On-Site 17-Point Diagnostic • Zero Surprise Fees
          </p>

        </div>
      </div>
    </section>
  );
};
