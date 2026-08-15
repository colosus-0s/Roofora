import React from 'react';
import { whyUsData } from '../data/whyUs';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="w-full bg-white py-12 sm:py-16 lg:py-24 border-t border-slate-100">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Editorial Intro */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] sm:text-xs font-bold text-[#1D61E7] tracking-wide uppercase">
              <span>WHY HOMEOWNERS CHOOSE US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight leading-[1.15]">
              Quality You Can See. <br />
              <span className="text-[#1D61E7]">Protection You Can Trust.</span>
            </h2>

            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
              Roofora was built on a simple promise: exceptional Texas craftsmanship, complete pricing transparency, and zero compromise on materials.
            </p>
          </div>

          {/* Right Column: 5 Visual Trust Points Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5 sm:gap-6">
              {whyUsData.map((point, index) => {
                const IconComponent = point.icon;
                const isFullWidth = index === 4;

                return (
                  <div
                    key={point.number}
                    className={`bg-[#F8FAFC] rounded-2xl p-4 sm:p-6 lg:p-7 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${
                      isFullWidth ? 'col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-100 text-[#1D61E7] flex items-center justify-center shadow-2xs group-hover:bg-[#1D61E7] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-extrabold text-slate-400">
                        {point.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#0B1220] group-hover:text-[#1D61E7] transition-colors mb-1">
                        {point.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs lg:text-sm text-slate-500 font-medium leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
