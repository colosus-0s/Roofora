import React from 'react';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="w-full bg-[#F8FAFC] py-12 sm:py-16 lg:py-24 border-t border-slate-100">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-6 lg:sticky lg:top-28">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] sm:text-xs font-bold text-[#1D61E7] tracking-wide uppercase">
                <span>OUR SERVICES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight leading-[1.15]">
                Complete Roofing <br />
                <span className="text-[#1D61E7]">Solutions</span>
              </h2>

              <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                From minor leak repairs to full architectural replacements, we deliver quality Texas workmanship built to protect what matters most.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1D61E7] hover:bg-[#1552C6] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 6 Data-Driven Visual Service Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
              {servicesData.map((service) => {
                const IconComponent = service.icon;

                return (
                  <div
                    key={service.id}
                    className="group bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Image Header */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                        <img
                          src={service.image}
                          alt={`${service.title} in Austin, TX`}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md text-[#0B1220] font-mono text-[10px] sm:text-xs font-extrabold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-slate-200/80 shadow-2xs">
                          {service.number}
                        </div>

                        <div className="absolute bottom-2.5 right-2.5 w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#1D61E7] text-white flex items-center justify-center shadow-md">
                          <IconComponent className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-3.5 sm:p-5 space-y-1.5 sm:space-y-2">
                        <span className="text-[10px] sm:text-xs font-bold text-[#1D61E7] tracking-wide uppercase block">
                          {service.tag}
                        </span>

                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#0B1220] group-hover:text-[#1D61E7] transition-colors leading-snug">
                          {service.title}
                        </h3>

                        <p className="text-[11px] sm:text-xs lg:text-sm text-slate-500 font-medium leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Link */}
                    <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-5 pt-1 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#1D61E7]">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
