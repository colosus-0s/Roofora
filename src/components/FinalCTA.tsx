import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

interface FinalCTAProps {
  onOpenEstimateModal?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#0F172A] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EA580C]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-blue-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
          <ShieldCheck className="w-4 h-4 text-[#2563EB]" /> Free 17-Point Inspection • Zero Risk
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready for a Roof You Don't Have to Worry About?
        </h2>

        {/* Subtext */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Schedule your free, zero-obligation roof inspection today. Our certified Austin roofing specialists will evaluate your home and deliver an itemized quote within 24 hours.
        </p>

        {/* Dual High-Contrast Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenEstimateModal}
            className="w-full sm:w-auto bg-[#EA580C] hover:bg-[#c84906] text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-orange-600/30 transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Get Free Estimate</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="tel:5125550198"
            className="w-full sm:w-auto border border-slate-700 hover:border-slate-500 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-base px-7 py-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#2563EB]" />
            <span>Call (512) 555-0198</span>
          </a>
        </div>

        {/* Trust Guarantees */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> $0 Out-of-Pocket Diagnostic
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-400" /> 15-Minute Response Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Licensed & Insured #RC-88401
          </span>
        </div>

      </div>
    </section>
  );
};
