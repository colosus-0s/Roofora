import React from 'react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

const serviceCities = [
  'Austin',
  'Round Rock',
  'Cedar Park',
  'Pflugerville',
  'Leander',
  'Georgetown',
  'Buda',
  'Kyle',
];

export const ServiceAreas: React.FC = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Coverage List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#1D61E7] tracking-wide uppercase">
              <span>WE SERVE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight leading-[1.15]">
              Austin & <br />
              <span className="text-[#1D61E7]">Surrounding Areas</span>
            </h2>

            <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed max-w-md">
              We proudly provide residential roofing, storm restoration, and emergency repairs across Greater Central Texas.
            </p>

            {/* City Grid List */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {serviceCities.map((city) => (
                <div key={city} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <MapPin className="w-4 h-4 text-[#1D61E7] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#0B1220]">{city}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#0B1220] font-bold text-sm sm:text-base shadow-2xs hover:shadow-xs transition-all duration-200 group"
              >
                <span>View Service Areas</span>
                <ArrowRight className="w-4 h-4 text-[#1D61E7] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Custom Visual Regional Map Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B1220] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-between text-white">
              
              {/* Subtle Regional Grid Pattern Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#1D61E7_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>

              {/* Map Card Header */}
              <div className="flex items-center justify-between relative z-10 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-bold tracking-wide uppercase text-slate-300">Central Texas Operational Hub</span>
                </div>

                <span className="text-xs font-mono font-bold text-slate-400">Austin HQ • 50-Mile Radius</span>
              </div>

              {/* Central Map Pins Graphic */}
              <div className="my-8 relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center space-y-1 hover:border-[#1D61E7] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-[#1D61E7] flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Austin HQ</div>
                  <div className="text-[10px] text-slate-400">Primary Hub</div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center space-y-1 hover:border-[#1D61E7] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-[#1D61E7] flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Round Rock</div>
                  <div className="text-[10px] text-slate-400">North Branch</div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center space-y-1 hover:border-[#1D61E7] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-[#1D61E7] flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Cedar Park</div>
                  <div className="text-[10px] text-slate-400">West Branch</div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center space-y-1 hover:border-[#1D61E7] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-[#1D61E7] flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Georgetown</div>
                  <div className="text-[10px] text-slate-400">North Hub</div>
                </div>
              </div>

              {/* Map Footer Note */}
              <div className="relative z-10 flex items-center gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Same-day diagnostic response available across all listed service areas.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
