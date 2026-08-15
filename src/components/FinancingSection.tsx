import React from 'react';
import { Check, ArrowRight, DollarSign } from 'lucide-react';

interface FinancingProps {
  onOpenQuoteModal?: () => void;
}

export const FinancingSection: React.FC<FinancingProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="w-full bg-[#F8FAFC] py-12 sm:py-16 lg:py-24 border-t border-slate-100">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Financing Information & Benefits Checklist */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] sm:text-xs font-bold text-[#1D61E7] tracking-wide uppercase">
              <span>FINANCING AVAILABLE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight leading-[1.15]">
              Clear Estimates. <br />
              <span className="text-[#1D61E7]">No Surprise Costs.</span>
            </h2>

            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
              We provide itemized estimates before work begins, paired with flexible monthly payment plans designed to fit your budget.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm lg:text-base font-bold text-[#0B1220]">Flexible financing options</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm lg:text-base font-bold text-[#0B1220]">Fast & easy online approval</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm lg:text-base font-bold text-[#0B1220]">No hidden fees or unexpected surprise charges</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="pt-2 sm:pt-3">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#1D61E7] hover:bg-[#1552C6] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform active:scale-98"
              >
                <span>See Financing Options</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium House Image with Floating Financing Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] w-full">
              <img
                src="/financing_home.jpg"
                alt="Roofora Financing & Estimates"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Financing Card over Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-xs bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-[#1D61E7] flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block">Monthly Payments</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#0B1220]">As Low As</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D61E7]">$129</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-600">/mo*</span>
                </div>

                <p className="text-[10px] text-slate-400 font-medium mt-1.5 sm:mt-2">
                  *Demonstration financing terms with approved credit. Subject to loan terms.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
