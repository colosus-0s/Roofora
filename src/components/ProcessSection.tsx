import React from 'react';
import { processStepsData } from '../data/process';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="w-full bg-white py-12 sm:py-16 lg:py-24 border-t border-slate-100">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] sm:text-xs font-bold text-[#1D61E7] tracking-wide uppercase">
            <span>OUR SIMPLE PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight">
            Transparent 4-Step Process
          </h2>

          <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
            From initial call to final inspection, we make your roofing project effortless.
          </p>
        </div>

        {/* 4-Step Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 relative">
          
          {/* Connector Line for Desktop Only */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-100 z-0"></div>

          {processStepsData.map((step, idx) => {
            const IconComponent = step.icon;

            return (
              <div
                key={step.number}
                className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-6 border border-slate-100 relative z-10 flex flex-col justify-between group hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-5">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-100 text-[#1D61E7] flex items-center justify-center shadow-2xs group-hover:bg-[#1D61E7] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <IconComponent className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
                    </div>

                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 text-[#1D61E7] font-mono text-[11px] sm:text-xs font-extrabold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#0B1220] group-hover:text-[#1D61E7] transition-colors mb-1">
                    {step.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs lg:text-sm text-slate-500 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 text-[11px] sm:text-xs font-bold text-[#1D61E7]">
                  Step {idx + 1} of 4 →
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
