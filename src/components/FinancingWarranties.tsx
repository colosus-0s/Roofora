import React from 'react';
import { CreditCard, ShieldCheck, Award, ArrowRight, DollarSign, CheckCircle2 } from 'lucide-react';

interface FinancingWarrantiesProps {
  onOpenEstimateModal?: () => void;
}

export const FinancingWarranties: React.FC<FinancingWarrantiesProps> = ({ onOpenEstimateModal }) => {
  return (
    <section id="financing" className="py-16 lg:py-24 bg-white text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#D97706] text-xs font-semibold uppercase tracking-wider">
            <DollarSign className="w-4 h-4" /> Affordable Payment Plans
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Flexible Financing & Bulletproof Warranties
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Protecting your home shouldn't break your budget. We provide zero-stress financing options and industry-leading warranty protection.
          </p>
        </div>

        {/* 3 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Low Monthly Payments */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center shadow-inner">
                <CreditCard className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">Budget Friendly</span>
                <h3 className="text-2xl font-extrabold text-[#0F172A]">As Low As $149/mo</h3>
                <p className="text-slate-600 text-sm leading-relaxed pt-1">
                  Flexible financing tailored for Central Texas homeowners. Quick 2-minute soft credit pre-approval with zero obligation.
                </p>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-slate-200/80">
                <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  0% Interest APR for 12 Months Available
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  No Hard Credit Pull for Prequalification
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  $0 Down Payment Options
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEstimateModal}
              className="w-full py-3 px-4 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Check Financing Options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: 25-Year Manufacturer Warranty */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider">Manufacturer Certified</span>
                <h3 className="text-2xl font-extrabold text-[#0F172A]">25-Year System Coverage</h3>
                <p className="text-slate-600 text-sm leading-relaxed pt-1">
                  Full non-prorated factory warranties from North America's leading material manufacturers including GAF & Owens Corning.
                </p>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-slate-200/80">
                <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  100% Shingle Replacement Protection
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Class 4 Hail & 130 MPH Wind Ratings
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Transferable to Future Home Buyers
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEstimateModal}
              className="w-full py-3 px-4 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Explore Warranty Protection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: 10-Year Workmanship Guarantee */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#D97706] flex items-center justify-center shadow-inner">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider">Roofcraft Guarantee</span>
                <h3 className="text-2xl font-extrabold text-[#0F172A]">10-Yr Workmanship Guarantee</h3>
                <p className="text-slate-600 text-sm leading-relaxed pt-1">
                  We stand behind our installation craftsmanship with an ironclad 10-year leak-free installation guarantee.
                </p>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-slate-200/80">
                <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Zero-Out-Of-Pocket Repair Warranty
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Dedicated Annual Roof Inspection Included
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Local Austin Response Team
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEstimateModal}
              className="w-full py-3 px-4 rounded-xl bg-[#EA580C] hover:bg-[#c84906] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
